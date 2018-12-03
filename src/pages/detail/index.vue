<template>
  <div class="container">
    <div class="video-wrapper" v-show="showVideo">
      <video autoplay v-for="(video, index) in actionList" :key="index" v-if="actionId === video.id" :src="video.vlink" @ended="goNextAction"></video>
    </div>
    <ul class="action-list">
      <li class="action-item" v-for="(item, index) in actionList" :key="index" @click="goCertainAction(item, index)">
        <div class="flex-row">
          <div class="flex-3 clearfix">
            <div class="pull-left">
              <img :src="item.imglink">
            </div>
            <div class="pull-left pl15">
              <span class="action-text text-bold" v-text="item.name"></span>
              <span class="action-text mt30"> {{item.times}}″ {{item.equipment}}</span>
            </div>
          </div>
          <div class="flex-1">
            <span v-show="actionId === item.id" class="action-color">修复中...</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="action-control-bar flex-row">
      <div class="control-btn control-left" @click="goLastAction">
        <img src="/static/images/arrow.png">
      </div>
      <div class="control-center"  @click="showDetailPanel">{{actionName}}</div>
      <div class="control-btn control-right" @click="goNextAction">
        <img src="/static/images/arrow.png">
      </div>
    </div>
    <div class="action-detail" :style="{top: positionTop}">
      <div class="action-icon" @click="hideDetailPanel">
        <img src="/static/images/arrow-bottom.png">
      </div>
      <div class="detail-item">
        <h4>作用</h4>
        <span v-text="actionInfo.effect || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>步骤</h4>
        <span v-html="actionInfo.step || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>呼吸</h4>
        <span v-text="actionInfo.breath || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>感觉</h4>
        <span v-text="actionInfo.feel || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>器械</h4>
        <span v-text="actionInfo.equipment || '暂无'"></span>
      </div><div class="detail-item">
      <h4>常见错误</h4>
      <span v-text="actionInfo.wrong || '暂无'"></span>
    </div>
    </div>
  </div>
</template>

<script>
  import { getAction, getTheme, postStartClass, postEndClass } from '../../services/imumServices'
  import {shareConfig} from '../../utils/commonConfig'

  export default {
    data () {
      return {
        actionId: '',
        themeId: '',
        sessionid: '',
        showVideo: false,
        actionIndex: 0,
        showDetail: true,
        positionTop: '100%',
        title: '',
        actionList: [],
        actionInfo: {},
        actionName: '',
        startTime: '',
        recordid: '',
        count: ''
      }
    },
    mounted () {
      this.sessionid = wx.getStorageSync('sessionid')
      this.startTime = Date.parse(new Date())
      this.startRepair()
      this.getActionList()
      this.getActionInfo()
    },
    methods: {
      async startRepair () {
        const courseInfo = JSON.parse(wx.getStorageSync('course'))
        const data = await postStartClass({
          sessionid: this.sessionid,
          courseid: courseInfo.id,
          themeid: this.themeId,
          times: this.startTime
        })
        if (data.code === 0) {
          this.recordid = data.data.recordid
        }
      },
      async finishRepair () {
        const data = await postEndClass({
          sessionid: this.sessionid,
          recordid: this.recordid
        })
        if (data.code === 0) {
          const endTime = Date.parse(new Date())
          wx.navigateTo({ url: `../feedback/main?recordId=${this.recordid}&count=${this.count}&times=${endTime - this.startTime}` })
        }
      },
      async getActionList () {
        const data = await getTheme({
          sessionid: this.sessionid,
          themeid: this.themeId
        })
        if (data.code === 0) {
          const actionList = data.data.actions
          this.count = data.data.count
          this.actionList = actionList
          if (this.actionId !== '') {
            this.actionIndex = actionList.findIndex(action => Number(action.id) === Number(this.actionId))
            this.actionName = actionList[this.actionIndex].name
          } else {
            this.actionId = actionList[0].id
            this.actionName = actionList[0].name
          }
          this.showVideo = true
          wx.setNavigationBarTitle({
            title: data.data.cycle
          })
        }
      },
      async getActionInfo () {
        const data = await getAction({
          sessionid: wx.getStorageSync('sessionid'),
          actionid: this.actionId
        })
        if (data.code === 0) {
          const action = data.data
          action.step = action.step.replace(/\n/g, '<br>')
          this.actionInfo = action
        }
      },
      goFeedback () {
        this.finishRepair()
        wx.navigateTo({ url: `../feedback/main?time=` })
      },
      goLastAction () {
        if (this.actionIndex === 0) return
        this.actionIndex -= 1
        this.actionId = this.actionList[this.actionIndex].id
      },
      goNextAction () {
        if (this.actionIndex === this.actionList.length - 1) {
          this.finishRepair()
          return
        }
        this.showVideo = false
        this.actionIndex += 1
        this.actionId = this.actionList[this.actionIndex].id
        this.showVideo = true
      },
      goCertainAction (action, index) {
        this.actionIndex = index
        this.actionId = action.id
      },
      showDetailPanel () {
        // this.showDetail = true
        this.positionTop = '200px'
      },
      hideDetailPanel () {
        // this.showDetail = true
        this.positionTop = '100%'
      }
    },
    onLoad (params) {
      if (params.actionId) {
        this.actionId = Number(params.actionId)
      }
      if (params.themeId) {
        this.themeId = Number(params.themeId)
      }
    },
    onShareAppMessage () {
      return shareConfig
    }
  }
</script>

<style lang="scss" scoped>
  .video-wrapper {
    height: 200px;
    background: #000;
    video {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
    }
  }
  .action-list {
    margin-bottom: 48px;
    .action-item {
      padding: 15px 30px;
      border-bottom: 1px solid #fff;
      img {
        width: 75px;
        height: 50px;
      }
      .action-text {
        display: block;
        color: #4D4D4D;
        font-size: 11px;
      }
      .action-color {
        color: #F59FD1;
        font-size: 12px;
      }
    }
  }
  .action-control-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    padding: 12px 15px;
    background: #FEE7A6 ;
    font-size: 15px;
    color: #F59FD1;
    border-top: 1px solid #fff;
    box-sizing: border-box;
    font-weight: bold;
    img {
      width: 22px;
      height: 22px;
    }
    .control-center{
      width: 100%;
      text-align: center;
    }
    .control-btn {
      padding-top: 13px;
    }
    .control-right{
      img {
        transform: rotateY(180deg);
      }
    }
  }
  .action-detail {
    position: fixed;
    top: 100%;
    padding: 0 15px;
    font-size: 12px;
    background: rgba(0,0,0,.9);
    width: 100%;
    height: calc(100% - 200px);
    /*height: 0;*/
    color: #fff;
    box-sizing: border-box;
    transition: top 0.5s;
    .action-icon{
      position: absolute;
      top: 15px;
      right: 15px;
      width: 17px;
      height: 10px;
      img {
        width: 17px;
        height: 10px;
      }
    }
    .detail-item {
      margin-top: 15px;
      h4 {
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
  .action-bottom{
    padding: 23px 15px 15px 15px;
  }
  .text-bold {
    font-weight: bold;
  }
  .color-main {
    color: #F59FD1;
  }
</style>
