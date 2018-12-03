<template>
  <div class="container">
    <div class="page-left">
      <div class="leg-image">
        <div class="leg-symptom">
          <span>小腿酸胀疼痛</span>
          <span>大腿内外侧刺痛</span>
          <span>双腿无力</span>
        </div>
        <img class="leg-person" src="/static/images/leg_person.png">
        <img class="leg-line" src="/static/images/leg_line.png">
      </div>
    </div>
    <action-line :id="themeId"></action-line>
    <div class="page-bottom">
      <button class="bottom-button" @click="goVideoPlayer">开始修复</button>
    </div>
  </div>
</template>

<script>
  import ActionLine from '../../components/actionLine.vue'
  import {shareConfig} from '../../utils/commonConfig'

  export default {
    data () {
      return {
        themeId: 4
      }
    },
    methods: {
      goVideoPlayer () {
        wx.navigateTo({ url: `../detail/main?themeId=${this.themeId}` })
      }
    },
    components: {
      ActionLine
    },
    onLoad (params) {
      if (params) {
        this.themeId = params.themeId
      }
    },
    onShareAppMessage () {
      return shareConfig
    }
  }
</script>

<style lang="scss" scoped>
  .page-left{
    position: absolute;
    left: 10px;
    top: 128px;
    width: 45%;
    height: 300px;
    .leg-symptom {
      position: absolute;
      left: 83px;
      top: 249px;
      font-size: 11px;
      color: #4d4d4d;
      width: 79px;
      height: 50px;
      text-align: center;
      span{
        display: block;
      }
    }
    .leg-image{
      position: relative;
      width: 100%;
      /*border: 1px dashed #999;*/
      .leg-person{
        position: absolute;
        width: 165px;
        height: 235px;
      }
      .leg-line{
        position: absolute;
        width: 109px;
        height: 102px;
        left: 53px;
        top: 144px;
      }
    }
  }
  .page-center{
    position: absolute;
    left: 45%;
    top: 50px;
    margin-left: 10px;
    img{
      width: 13px;
      height: 418px;
    }
  }
  .page-right{
    position: absolute;
    left: 45%;
    width: 50%;
    margin-left: 25px;
    top: 47px;
    .title {
      font-size: 13px;
      color: #333;
    }
    .action {
      height: 67px;
      margin-top: 13px;
      span {
        display: block;
        font-size: 11px;
        color: #666;
      }
      .detail{
        padding-top: 5px;
        color: #999;
        line-height: 20px;
      }
      img{
        width:45px;
        height: 45px;
      }
    }

  }
  .page-bottom {
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
    height: 47px;
    .bottom-button {
      width: 100%;
      height: 47px;
      line-height: 47px;
      border: 1px solid #F59FD1;
      color: #F59FD1;
      font-size: 15px;
      text-align: center;
      background: transparent;
      border-radius: 5px;
      font-weight: bold;
    }
  }
</style>
