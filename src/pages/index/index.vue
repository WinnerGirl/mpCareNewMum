<template>
  <div class="container">
    <div class="round-wrapper">
      <img src="/static/images/round.png"/>
      <span>10day</span>
    </div>
    <!--<div class="cicle-days-wrapper">-->
      <!--<div class="cicle-days">-->
        <!--42day-->
      <!--</div>-->
    <!--</div>-->
    <div class="person-modal">
      <img class="person-whole" src="/static/images/person.png" alt="整个"/>
    </div>
    <div class="person-modal person-modal-map">
      <img class="person-head" src="/static/images/head.png" alt="头部" />
      <img class="person-chest" src="/static/images/chest.png" alt="胸部" @click="goNewPage('chest')"/>
      <img class="person-abdomen" src="/static/images/abdomen.png" alt="腹部" @click="goNewPage('abdomen')"/>
      <img class="person-hand-left" src="/static/images/hand.png" alt="左手" @click="goNewPage('hand')"/>
      <img class="person-hand-right" src="/static/images/hand.png" alt="右手" @click="goNewPage('hand')"/>
      <img class="person-pelvic" src="/static/images/pelvic.png" alt="盆腔" @click="goNewPage('pelvic')"/>
      <img class="person-leg-left" src="/static/images/leg.png" alt="左脚" @click="goNewPage('leg')"/>
      <img class="person-leg-right"src="/static/images/leg.png" alt="右脚" @click="goNewPage('leg')"/>
    </div>
    <p class="tip">请选择修复位置</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      scrollTop: 0,
      bannerList: [],
      gameList: [],
      recommendList: [],
      windowHeight: '100%',
      showContainer: 0,
      channel: ''
    }
  },
  mounted () {
  },
  methods: {
    mapA () {
      console.log('1')
    },
    goNewPage (pageName) {
      const url = `../${pageName}/main`
      wx.navigateTo({ url })
    },
    goHeadCare () {
      const url = '../feedback/main'
      wx.navigateTo({ url })
    },
    scroll (e) {
      this.scrollTop = e.target.scrollTop
      console.log(this.scrollTop)
    },
    goTop () {
      this.scrollTop = 0
    }
  },
  // onPullDownRefresh () {
  //   wx.showLoading({
  //     title: '加载中'
  //   })
  // },
  onShareAppMessage () {
    return {
      title: `     @我 你的好友在这里大杀特杀！快来超过ta`,
      path: 'pages/index/main'
    }
  },
  onLoad (params) {
    if (params.channel) {
      this.channel = params.channel
    }
  }
}
</script>

<style lang="scss" scoped>
  $person-head-width: 358rpx / 2 * 1.4;
  $person-head-height: 356rpx / 2 * 1.4;

  $person-chest-width: 319rpx / 2 * 1.4;
  $person-chest-height: 222rpx / 2 * 1.4;
  $person-abdomen-width: 341rpx / 2 * 1.4;
  $person-abdomen-height: 244rpx / 2 * 1.4;

  $person-pelvic-width: 312rpx / 2 * 1.4;
  $person-pelvic-height: 161rpx / 2 * 1.4;

  $person-hand-width: 85rpx * 1.4;
  $person-hand-height: 212rpx * 1.4;

  $person-leg-width: 83rpx * 1.4;
  $person-leg-height: 249rpx * 1.4;

  $distance-head-body: 4rpx;
  $distance-body-pelvic: 5rpx;
  $distance-pelvic-leg: 1rpx;
  $distance-body-hand: 2rpx;

  $top-chest: $person-head-height + $distance-head-body;
  $top-abdomen: $top-chest + $person-chest-height - 18rpx;
  $top-pelvic: $top-abdomen + $person-abdomen-height;
  $top-leg: $top-pelvic + $distance-body-pelvic;
  $top-hand: $top-chest;

.person-modal{
  position: relative;
  width: 200px;
  height: 450px;
  margin: 0 auto;
  margin-top: 80px;
  .person-whole {
    position: absolute;
    top: 0;
    left: 50%;
    width: 200px;
    height: 450px;
    transform: translateX(-50%);
    /*border: 1px dashed #999;*/
  }
  .person-head {
    position: absolute;
    top: 0;
    left: 50%;
    width: $person-head-width;
    height: $person-head-height;
    transform: translateX(-50%);
  }
  .person-chest {
    position: absolute;
    top: $top-chest;
    left: 50%;
    width: $person-chest-width;
    height: $person-chest-height;
    transform: translateX(-50%);
  }
  .person-abdomen {
    position: absolute;
    top: $top-abdomen;
    left: 50%;
    width: $person-abdomen-width;
    height: $person-abdomen-height;
    transform: translateX(-50%);
  }
  .person-pelvic {
    position: absolute;
    top: $top-pelvic;
    left: 50%;
    width: $person-pelvic-width;
    height: $person-pelvic-height;
    transform: translateX(-50%);
  }
  .person-hand-left {
    position: absolute;
    top: $top-hand;
    left: 50%;
    width: $person-hand-width;
    height: $person-hand-height;
    margin-left: -221rpx;
  }
  .person-hand-right {
    position: absolute;
    top: $top-hand;
    left: 50%;
    width: $person-hand-width;
    height: $person-hand-height;
    transform: rotateY(180deg);
    margin-left: 50px;
  }
  .person-leg-left {
    position: absolute;
    top: $top-leg;
    left: 50%;
    width: $person-leg-width;
    height: $person-leg-height;
    margin-left: -130rpx;
  }
  .person-leg-right {
    position: absolute;
    top: $top-leg;
    left: 50%;
    width: $person-leg-width;
    height: $person-leg-height;
    transform: rotateY(180deg);
    margin-left: 4px;
  }
}
  .person-modal-map{
    margin-top: -900rpx;
    opacity: 0;
  }
  .tip {
    text-align: center;
    font-size: 13px;
    color: #333;
    margin-top: 13px;
  }
  .round-wrapper{
    position: absolute;
    width: 76px;
    height: 76px;
    top: 15px;
    left: 15px;
    img {
      width: 76px;
      height: 76px;
    }
    span{
      color: #4D4D4D;
      font-size: 12px;
      position: absolute;
      top: 32px;
      left: 80px;
      font-weight: bold;
    }
  }
  .cicle-days-wrapper {
    position: absolute;
    width: 76px;
    height: 76px;
    top: 15px;
    left: 15px;
    border-top: 2px solid #FEE7A6;
    border-radius: 50%;
    /*background: conic-gradient(#9ED110, #50B517, #179067, #476EAF, #9f49ac, #CC42A2, #FF3BA7, #FF5800, #FF8100, #FEAC00, #FFCC00, #EDE604);*/
    /*border-radius: 50%;*/
    /*mask: radial-gradient(transparent 110px, #000 110px);*/
    .cicle-days {
      width: 62px;
      height: 62px;
      line-height: 62px;
      border-radius: 50%;
      border: 2px solid #fff;
      color: #fff;
      font-size: 19px;
      font-weight: bold;
      text-align: center;
      margin-top: 5px;
      margin-left: 5px;
      background: transparent;
    }
  }
</style>
