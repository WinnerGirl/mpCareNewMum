<template>
  <div class="feedback-container">
    <div class="header flex-row">
      <div class="header-left flex-1">
        <div class="text">
          <p class="title">你已完成了</p>
          <p class="title">胸部修复训练</p>
          <p class="content mt15">今天是产后第10天</p>
          <p class="content">距离修复完成还剩32天</p>
        </div>
      </div>
      <div class="header-right flex-1">
        <img src="/static/images/smile.png"/>
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
      channel: ''
    }
  },
  mounted () {
  },
  methods: {
    mapA () {
      console.log('1')
    },
    goHeadCare () {
      const url = '../list/main?channel=quwei'
      wx.navigateTo({ url })
    },
    scroll (e) {
      this.scrollTop = e.target.scrollTop
      console.log(this.scrollTop)
    },
    goTop () {
      this.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .feedback-container {
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .header {
    width: 100%;
    height: 250px;
    background-image: -webkit-linear-gradient(top, #eabdd5, #f2cec2);
    .header-left {
      .text {
        width: 115px;
        margin: 0 auto;
      }
      .title {
        color: #fff;
        font-weight: bold;
        font-size: 15px;
        line-height: 23px;
      }
      .content {
        color: #fff;
        font-size: 11px;
        line-height: 18px;
      }
    }
    .header-right {
      text-align: center;
      img{
        width: 81px;
        height: 82px;
      }
    }
  }
</style>
