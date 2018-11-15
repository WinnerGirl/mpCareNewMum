<template>
  <div class="all-game-container">
    <div class="box all-game-box">
      <block v-if="gameList.length > 0" v-for="item in gameList" :key="item.id">
        <navigator class="game-item" target="miniProgram" open-type="navigate" :app-id="item.appid" :path="item.path" version="release" @click="gameRecord(item.id)">
          <!--<img class="bg-img" src="http://www.11h5.com/images/banner/banner1.jpg">-->
          <img class="bg-img" :src="item.big_img">
          <div class="all-game-list-item flex-row">
            <div class="flex-1 game-cover">
              <image :src="item.img"></image>
            </div>
            <div class="intro flex-4 clearfix">
              <div class="pull-left">
                <p class="text-strong text-left">{{item.name}}</p>
                <p class="text-normal text-left pt10">{{item.description}}</p>
              </div>
              <!--<div class="pull-right">-->
                <!--<p class="c-red"><image class="icon-fire" src="/static/images/fire.png"></image>{{item.firepower}}</p>-->
              <!--</div>-->
            </div>
          </div>
        </navigator>
      </block>
    </div>
  </div>
</template>

<script>
  import {getAPIUrl} from '../utils/config'
  export default {
    props: {
      gameList: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      gameRecord (id) {
        wx.request({
          url: getAPIUrl('/game/public/index.php/recordByGameId'),
          method: 'POST',
          data: {
            userinfo: JSON.stringify(wx.getStorageSync('user')),
            game_id: id
          },
          header: {
            'content-type': 'application/json'
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  $box-shadow: 2px 2px 5px #999;
  .all-game-container {
    width: 100%;
    padding: 0 20rpx;
    margin-top: 20rpx;
    box-sizing: border-box;
    background: #ededf3;
    .all-game-box{
      background: #ededf3;
      position: relative;
      .game-item{
        position: relative;
        height: 4rem;
        background: #c1bfb4;
        border-radius: 20rpx;
        margin-bottom: 30rpx;
        box-shadow: $box-shadow;
      }
      .bg-img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 20rpx;
      }
    }
    .all-game-list-item{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, .5);
      border-bottom-left-radius: 20rpx;
      border-bottom-right-radius: 20rpx;
      box-sizing: border-box;
      .game-cover{
        padding: 10rpx 0 0 20rpx;
        image{
          width: 120rpx;
          height: 120rpx;
          border-radius: 10rpx;
        }
      }
      .intro{
        padding: 10rpx 20rpx;
        /*border-bottom: 1px solid rgba(235, 235,235, 0.7);*/
        color: #fff;
      }
    }
    .icon-fire{
      width: 26rpx;
      height: 26rpx;
      margin-right: 10rpx;
    }
  }
  .box{
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
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
