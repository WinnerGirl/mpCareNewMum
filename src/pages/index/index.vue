<template>
  <div class="container">
    <!--<div class="round-wrapper">-->
      <!--<img src="/static/images/round.png"/>-->
      <!--<span>10day</span>-->
    <!--</div>-->
    <div class="circle-days-wrapper">
      <img v-if="rateType === 1" src="/static/images/color1.png">
      <img v-if="rateType === 2" src="/static/images/color2.png">
      <img v-if="rateType === 3" src="/static/images/color3.png">
      <div class="circle-days">
        42day
      </div>
      <span class="day-num">{{days[dayIndex]}}天</span>
    </div>
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
    <p class="tip">请选择修复部位</p>
    <div class="modal-wrapper" v-if="showModal">
      <div class="modal-bg"></div>
      <div class="modal">
        <p class="title">请选择您的生产方式</p>
        <div class="flex-row mt30">
          <div class="flex-1 text-center" v-for="(type, index) in typeList" :key="index">
            <button :class="{'active': index === typeIndex}" v-text="type" @click="changeTypeIndex(index)"></button>
          </div>
        </div>
        <picker @change="pickerChange" :value="dayIndex" :range="days">
          <div class="picker">
            <p class="title">今天是产后第几天：</p>
            <div class="text-center">
              <span class="picker-num mt30">{{days[dayIndex]}}</span>天
            </div>
          </div>
        </picker>
      </div>
      <div class="button-footer">
        <button class="button-sure" @click="hideModal">确定</button>
      </div>
    </div>
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
      channel: '',
      showModal: false,
      typeList: ['顺产', '剖腹产'],
      days: [],
      dayIndex: 70,
      typeIndex: 0,
      rateType: 1,
      sessionId: ''
    }
  },
  mounted () {
    this.sessionId = wx.getStorageSync('sessionId')
    this.showModal = wx.getStorageSync('sessionId')
    if (this.sessionId) {

    }
    this.initDays()
  },
  methods: {
    initDays () {
      const days = []
      for (let i = 1; i <= 90; i += 1) {
        days.push(i)
      }
      this.days = days
    },
    goNewPage (pageName) {
      const url = `../${pageName}/main`
      wx.navigateTo({ url })
    },
    scroll (e) {
      this.scrollTop = e.target.scrollTop
      console.log(this.scrollTop)
    },
    pickerChange (e) {
      this.dayIndex = e.mp.detail.value
    },
    changeTypeIndex (index) {
      this.typeIndex = index
    },
    hideModal () {
      const day = this.days[this.dayIndex]
      const rate = day / 90 * 100
      if (rate > 0 && rate <= 25) this.rateType = 1
      else if (rate > 25 && rate <= 50) this.rateType = 2
      else this.rateType = 3
      this.showModal = false
    }
  },
  onShareAppMessage () {
    return {
      title: `     @我 你的好友在这里大杀特杀！快来超过ta`,
      path: 'pages/index/main'
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
  .circle-days-wrapper {
    position: absolute;
    width: 76px;
    height: 76px;
    top: 15px;
    left: 15px;
    img {
      width: 76px;
      height: 76px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .circle-days {
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
    .day-num {
      color: #4D4D4D;
      font-size: 12px;
      position: absolute;
      top: 32px;
      left: 80px;
      font-weight: bold;
      width: 70px;
      white-space: nowrap;
    }
  }
  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .modal-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0 ,.8);
    }
    .modal {
      position: absolute;
      color: #fff;
      top: 90px;
      padding: 0 15px;
      width: 100%;
      box-sizing: border-box;
      .title{
        font-size: 15px;
        margin-top: 60px;
      }
      button {
        width: 150px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        color: #fff;
        background: #000;
        font-size: 12px;
        text-align: center;
        &.active {
          background: #fff;
          color: #4D4D4D;
        }
      }
      .picker-wrapper {
        margin: 0 auto;
      }
      .picker-num {
        display: inline-block;
        border-bottom: 1px solid #eee;
        width: 100px;
        text-align: center;
      }
    }
    .button-footer {
      position: absolute;
      bottom: 15px;
      left: 0;
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      .button-sure {
        width: 100%;
        height: 49px;
        line-height: 49px;
        text-align: center;
        background: #E9BCD6;
        border-radius: 5px;
        color: #fff;
        font-size: 15px;
      }
    }
  }
</style>
