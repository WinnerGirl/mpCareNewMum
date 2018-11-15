<template>
  <div class="container">
    Leg
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
  $person-head-width: 358rpx / 2 * 1.5;
  $person-head-height: 356rpx / 2 * 1.5;

  $person-chest-width: 319rpx / 2 * 1.5;
  $person-chest-height: 222rpx / 2 * 1.5;
  $person-abdomen-width: 341rpx / 2 * 1.5;
  $person-abdomen-height: 244rpx / 2 * 1.5;

  $person-pelvic-width: 312rpx / 2 * 1.5;
  $person-pelvic-height: 161rpx / 2 * 1.5;

  $person-hand-width: 85rpx * 1.5;
  $person-hand-height: 212rpx * 1.5;

  $person-leg-width: 83rpx * 1.5;
  $person-leg-height: 249rpx * 1.5;

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
  width: 400rpx;
  height: 900rpx;
  margin: 0 auto;
  margin-top: 80rpx;
  .person-whole {
    position: absolute;
    top: 0rpx;
    left: 50%;
    width: 400rpx;
    height: 900rpx;
    transform: translateX(-50%);
  }
  .person-head {
    position: absolute;
    top: 0rpx;
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
    margin-left: 100rpx;
  }
  .person-leg-left {
    position: absolute;
    top: $top-leg;
    left: 50%;
    width: $person-leg-width;
    height: $person-leg-height;
    margin-left: -128rpx;
  }
  .person-leg-right {
    position: absolute;
    top: $top-leg;
    left: 50%;
    width: $person-leg-width;
    height: $person-leg-height;
    transform: rotateY(180deg);
    margin-left: 8rpx;
  }
}
</style>
