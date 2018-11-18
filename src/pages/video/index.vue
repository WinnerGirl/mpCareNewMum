<template>
  <div class="container">
    <video v-if="showVideo" autoplay :src="videoUrl" @ended="showVideo = false"></video>
    <div class="modal" v-else>
      <div class="button-group">
        <button class="button-end">结束修复</button>
        <button class="button-continue">继续修复</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showVideo: false,
      videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
    }
  }
}
</script>

<style lang="scss" scoped>
  video {
    width: 100%;
    height: 100%;
  }
  .modal {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    .button-group {
      width: 180px;
      height: 120px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%);
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
