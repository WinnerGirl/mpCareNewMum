<template>
  <div class="action-line" v-if="showActionLine">
    <div class="page-center">
      <img src="/static/images/line.png">
    </div>
    <div class="page-right">
      <div class="title">
        <div class="title-cycle text-el-1">{{action.cycle}}太长了吧</div>
        <div class="title-count">{{action.count}}个动作 {{action.times}}秒</div>
      </div>
      <ul class="action-list">
        <li class="action" v-for="(item, index) in action.actions" :key="index" @click="goDetail(item.id)">
          <span v-text="item.name"></span>
          <div class="clearfix">
            <img class="pull-left" :src="item.imglink">
            <div class="detail pull-left">
              <span>{{item.times}}″</span>
              <span v-text="item.equipment"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getTheme } from '../services/imumServices'

  export default {
    data () {
      return {
        showActionLine: false,
        action: {}
      }
    },
    props: {
      id: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      this.getActionByTheme()
    },
    methods: {
      goDetail (actionId) {
        wx.navigateTo({ url: `../detail/main?actionId=${actionId}&themeId=${this.id}` })
      },
      async getActionByTheme () {
        const data = await getTheme({
          sessionid: wx.getStorageSync('sessionid'),
          themeid: this.id
        })
        if (data.code === 0) {
          this.showActionLine = true
          this.action = data.data
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .action-line {
    position: absolute;
    top: 50px;
    left: 45%;
    width: 55%;
    margin-left: 10px;
  }
  .page-center{
    img{
      width: 13px;
      height: 418px;
    }
  }
  .page-right {
    position: absolute;
    width: 100%;
    margin-left: 15px;
    top: 0;
    .title {
      margin-top: -18px;
      color: #333;
      .title-cycle {
        font-size: 15px;
        width: 152px;
      }
      .title-count {
        white-space: nowrap;
        font-size: 12px;
      }

    }
    .action-list {
      height: 400px;
      overflow-y: auto;
    }
    .action {
      height: 72px;
      margin-top: 8px;
      span {
        display: block;
        font-size: 11px;
        color: #666;
      }
      .detail{
        padding-top: 15px;
        padding-left: 10px;
        color: #999;
        line-height: 20px;
      }
      img{
        width:45px;
        height: 45px;
        margin-top: 10px;
      }
    }

  }
</style>
