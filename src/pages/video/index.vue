<template>
  <div class="container">
    <ul>
      <li v-for="video in videoList" :key="video.id" @click="goNextVideo">
        <video v-if="videoId === video.id" autoplay :src="videoUrl"></video>
        <span class="text-red" v-show="video.id === videoId">播放中</span>
        <span v-text="video.title"></span>
      </li>
    </ul>
    <div class="footer">
      <button>上一首</button>
      <button @click="goNextVideo">下一期</button>
    </div>
    <!--<div class="modal" v-else>-->
      <!--<div class="button-group">-->
        <!--<button class="button-end" @click="showVideo = true">结束修复</button>-->
        <!--<button class="button-continue">继续修复</button>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>

export default {
  data () {
    return {
      showVideo: true,
      videoId: 1,
      index: 0,
      videoUrl: '',
      videoUrl1: '',
      videoList: [{
        id: 1,
        isPlaying: false,
        title: 'What are you waiting for?',
        url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      }, {
        id: 2,
        isPlaying: false,
        title: 'Who cares?',
        url: 'http://cns.ef-cdn.com/_vids/dailylesson/lesson/473/default.mp4'
      }, {
        id: 3,
        isPlaying: false,
        title: 'Who cares?',
        url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      }]
    }
  },
  created () {
    this.videoId = this.videoList[this.index].id
    this.videoUrl = this.videoList[0].url
    this.videoUrl1 = 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
    console.log(this.videoUrl)
    this.showVideo = true
  },
  methods: {
    goNextVideo () {
      this.index += 1
      this.videoId = this.videoList[this.index].id
      this.videoUrl = this.videoList[this.index].url
    }
  }
}
</script>

<style lang="scss" scoped>
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
  }
  .play {
    position: absolute;
    top: 0;
    left: 0;
  }
  .modal {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    .button-group {
      width: 180px;
      height: 120px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    button {
      width: 180px;
      height: 35px;
      color: #fefefe;
      font-size: 15px;
      border-radius: 4px;
    }
    .button-end {
      background: #808080;
    }
    .button-continue {
      background: #E9BCD6;
      margin-top: 50px;
    }
  }
</style>
