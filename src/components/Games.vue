<template>
  <div class="all-game-container">
    <div class="box all-game-box">
      <block v-for="item in gameList" :key="item.id">
        <navigator class="all-game-list-item flex-row" target="miniProgram" open-type="navigate" :app-id="item.appid" path="" version="release">
          <div class="flex-1 game-cover">
            <image :src="item.img"></image>
          </div>
          <div class="intro flex-4 clearfix">
            <div class="pull-left">
              <p class="text-strong">{{item.name}}</p>
              <p class="text-normal pt20">{{item.description}}</p>
            </div>
            <!--<div class="pull-right">-->
            <!--<p class="c-red"><image class="icon-fire" src="/static/images/fire.png"></image>{{item.firepower}}</p>-->
            <!--</div>-->
          </div>
        </navigator>
      </block>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      gameList: {
        type: Array,
        default: () => []
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  $box-shadow: 2px 2px 5px #999;
  .all-game-container {
    width: 100%;
    padding: 0 20rpx;
    margin: 30rpx 0;
    box-sizing: border-box;
    .all-game-box{
      background: #fff;
    }
    .all-game-list-item{
      .game-cover{
        padding: 20rpx;
        image{
          width: 120rpx;
          height: 120rpx;
          border-radius: 50%;
        }
      }
      .intro{
        padding: 30rpx;
        border-bottom: 1px solid rgba(235, 235,235, 0.7);
      }
    }
    .icon-fire{
      width: 26rpx;
      height: 26rpx;
      margin-right: 10rpx;
    }
  }
  .box{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    border-radius: 20rpx;
    box-shadow: $box-shadow;
    overflow: hidden;
  }
  .c-red{
    color: #ff5a61;
    font-size: 24rpx;
  }
  .text-el{
    max-width: 350rpx;
  }

</style>
