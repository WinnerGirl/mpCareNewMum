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
    <div class="center-panel">
      <div class="center-panel-wrapper">
        <div class="flex-row">
          <div class="flex-1 text-center title">完成</div>
          <div class="flex-1 text-center title">时长</div>
        </div>
        <div class="flex-row pt30">
          <div class="flex-1 text-center content">5动作</div>
          <div class="flex-1 text-center content">10分钟</div>
        </div>
      </div>
    </div>
    <div class="bottom-panel">
      <p>现在的感受</p>
      <div class="flex-row circle-row">
        <div class="flex-1 circle-row" v-for="item in feelings" @click="submitComment(item)">
          <img src="/static/images/circle.png">
          <span class="circle-text" v-text="item.title"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {shareConfig} from '../../utils/commonConfig'
  import {postComment} from '../../services/imumServices'

  export default {
    data () {
      return {
        recordId: '',
        count: '',
        times: '',
        feelings: [{
          id: 0,
          title: '感觉很棒'
        }, {
          id: 1,
          title: '感觉一般'
        }, {
          id: 2,
          title: '感觉一般'
        }]
      }
    },
    mounted () {
    },
    methods: {
      async submitComment (feeling) {
        const data = await postComment({
          sessionid: wx.getStorageSync('sessionid'),
          recordid: this.recordId,
          count: this.count,
          times: this.times,
          result: feeling.id
        })
        if (data.code === 0) {
          wx.reLaunch({
            url: '../index/main'
          })
        }
      }
    },
    onLoad (params) {
      console.log(params)
      if (params) {
        this.recordId = Number(params.recordId)
        this.themeId = Number(params.count)
        this.times = params.times
      }
    },
    onShareAppMessage () {
      return shareConfig
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
    height: 200px;
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
  .center-panel {
    width: 100%;
    height: 70px;
    padding: 0 25px;
    box-sizing: border-box;
    margin-top: -10px;
    .center-panel-wrapper {
      width: 100%;
      height: 70px;
      background: #f2cec2;
      color: #fff;
      padding-top: 26px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      .title {
        font-size: 12px;
      }
      .content {
        font-size: 15px;
      }
    }
  }
  .bottom-panel {
    color: #eabdd5;
    font-size: 12px;
    padding-top: 100px;
    text-align: center;
    font-weight: bold;
    .circle-row {
      margin-top: 25px;
      position: relative;
      .circle-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: -3px;
        font-weight: normal;
      }
      img {
        width: 66px;
        height: 66px;
      }
    }
  }
</style>
