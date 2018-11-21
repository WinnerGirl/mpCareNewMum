<template>
  <div class="container">
    <div class="video-wrapper" v-show="showVideo">
      <video autoplay v-for="video in actionList.data" :key="video.id" v-if="actionId === video.id" :src="video.url"></video>
    </div>
    <ul class="action-list">
      <li class="action-item" v-for="(action, index) in actionList.data" :key="action.id" @click="goCertainAction(action, index)">
        <div class="flex-row">
          <div class="flex-3 clearfix">
            <div class="pull-left">
              <img :src="action.cover">
            </div>
            <div class="pull-left pl15">
              <span class="action-text text-bold" v-text="action.name"></span>
              <span class="action-text mt30"> {{action.time}}{{action.prop}}</span>
            </div>
          </div>
          <div class="flex-1">
            <span v-show="actionId === action.id" class="action-color">开始修复</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="action-control-bar flex-row">
      <div class="control-btn control-left" @click="goLastAction">
        <img src="/static/images/arrow.png">
      </div>
      <div class="control-center"  @click="showDetail = true">{{actionList.data[actionIndex].name}}</div>
      <div class="control-btn control-right" @click="goNextAction">
        <img src="/static/images/arrow.png">
      </div>
    </div>
    <div class="action-detail" v-show="showDetail">
      <div class="action-icon" @click="showDetail = false">
        <img src="/static/images/arrow-bottom.png">
      </div>
      <div class="detail-item">
        <h4>作用</h4>
        <span v-text="action.effect || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>步骤</h4>
        <span v-html="action.step || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>呼吸</h4>
        <span v-text="action.breath || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>感觉</h4>
        <span v-text="action.feeling || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>器械</h4>
        <span v-text="action.prop || '暂无'"></span>
      </div><div class="detail-item">
      <h4>常见错误</h4>
      <span v-text="action.mistaken || '暂无'"></span>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        actionId: 0,
        showVideo: true,
        actionIndex: 0,
        showDetail: false,
        actionList: {
          title: '胸部修复',
          data: [{
            id: 0,
            name: '坐姿腹式呼吸',
            times: '10″',
            prop: '瑜伽垫',
            url: 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/457/default.mp4',
            title: 'Why am I not allowed to attend meetings?',
            cover: 'https://cns.ef-cdn.com/_imgs/community/dailylesson/lessons/lesson457.jpg'
          }, {
            id: 1,
            name: '辅助腰部呼吸',
            times: '4次',
            prop: '瑜伽垫',
            url: 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/458/default.mp4',
            title: 'Bend the knees',
            cover: 'https://cns.ef-cdn.com/_imgs/community/dailylesson/lessons/lesson458.jpg'
          }, {
            id: 2,
            name: '猫式侧腰左扭',
            times: '2次',
            prop: '瑜伽垫',
            url: 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/459/default.mp4',
            title: 'Never strike from behind.',
            cover: 'https://cns.ef-cdn.com/_imgs/community/dailylesson/lessons/lesson459.jpg'
          }, {
            id: 3,
            name: '猫式侧腰右扭',
            times: '2次',
            prop: '瑜伽垫',
            url: 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/460/default.mp4',
            title: 'Keep your eye on the target.',
            cover: 'https://cns.ef-cdn.com/_imgs/community/dailylesson/lessons/lesson460.jpg'
          }, {
            id: 4,
            name: '猫式侧腰左扭',
            times: '2次',
            prop: '瑜伽垫',
            url: 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/458/default.mp4',
            title: ' So far so good.',
            cover: 'https://cns.ef-cdn.com/_imgs/community/dailylesson/lessons/lesson461.jpg'
          }]
        },
        action: {
          name: '鸟式肩部下压',
          effect: '可减缓乳房胀痛；有利于乳腺疏通，开奶',
          step: `1. 跪在瑜伽垫上，双手撑地，保持腰背脊椎放松<br>
        2. 以肚脐为中心，臂部向左摆动，转头看向左臂并保持一下<br>
        3. 还原臂部与身体一直线`,
          breath: '保持平稳呼吸',
          feeling: '动作保持匀速，环绕时胸部有挤压感',
          prop: '瑜伽垫',
          mistaken: '环绕时没有挤压胸部'
        }
      }
    },
    mounted () {
      wx.setNavigationBarTitle({
        title: this.actionList.title
      })
    },
    methods: {
      goFeedback () {
        wx.navigateTo({ url: '../feedback/main' })
      },
      goLastAction () {
        if (this.actionIndex === 0) return
        this.actionIndex -= 1
        this.actionId = this.actionList.data[this.actionIndex].id
      },
      goNextAction () {
        if (this.actionIndex === this.actionList.data.length - 1) {
          this.goFeedback()
          return
        }
        this.showVideo = false
        this.actionIndex += 1
        this.actionId = this.actionList.data[this.actionIndex].id
        this.showVideo = true
      },
      goCertainAction (action, index) {
        this.actionIndex = index
        this.actionId = action.id
      }
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
    top: 200px;
    padding: 0 15px;
    font-size: 12px;
    background: rgba(0,0,0,.9);
    width: 100%;
    height: calc(100% - 200px);
    color: #fff;
    box-sizing: border-box;
    -webkit-transition: all .5s cubic-bezier(0, 1, 0.5, 1);
    transition: all .5s cubic-bezier(0, 1, 0.5, 1);
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
