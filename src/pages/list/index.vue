<template>
  <div class="container">
    <!--<scroll-view class="scroll-box" scroll-y @scroll="scroll" :scroll-top="scrollTop" :style="{height: windowHeight}">-->
      <!--<game-box :game-list="recommendList"></game-box>-->
      <!--<div class="text-center mt10 mb20">-->
        <!--<p class="text-light" @click="goTop()">返回顶部</p>-->
      <!--</div>-->
    <!--</scroll-view>-->
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
// import GameBox from '@/components/GameBox'
// import {getAPIUrl} from '../../utils/config'
// import recommend from '../../database/recommend.json'

export default {
  data () {
    return {
      scrollTop: 0,
      recommendList: [],
      windowHeight: '100%',
      channel: ''
    }
  },
  mounted () {
    // this.windowHeight = `${wx.getSystemInfoSync().windowHeight}px`
    // this.getGameList(false)
    // this.userRecord()
  },
  methods: {
  },
  onPullDownRefresh () {
    this.getGameList(true)
  },
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

</style>
