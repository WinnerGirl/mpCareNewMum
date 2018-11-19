<template>
  <div class="action-line">
    <div class="page-center">
      <img src="/static/images/line.png">
    </div>
    <div class="page-right">
      <div class="title" v-text="action.title">
      </div>
      <ul class="action-list">
        <li class="action" v-for="(item, index) in action.data" :key="index" @click="goDetail">
          <span v-text="item.name"></span>
          <div class="clearfix">
            <img class="pull-left" src="https://imgsa.baidu.com/exp/w=480/sign=55050fb4af51f3dec3b2b86ca4eef0ec/241f95cad1c8a78601048d706709c93d70cf50a6.jpg">
            <div class="detail pull-left">
              <span v-text="item.times"></span>
              <span v-text="item.prop"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      action: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      goDetail () {
        wx.navigateTo({ url: '../detail/main' })
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
      font-size: 15px;
      color: #333;
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
