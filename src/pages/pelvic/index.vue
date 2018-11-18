<template>
  <div class="container">
    <div class="page-left">
      <div class="pelvic-image">
        <div class="pelvic-symptom">
          <span>体型走样</span>
          <span>腰酸背痛</span>
          <span>子宫下垂</span>
          <span>小便失禁</span>
        </div>
        <img class="pelvic-person" src="/static/images/pelvic_person.png">
        <img class="pelvic-line" src="/static/images/pelvic_line.png">
      </div>
    </div>
    <div class="page-center">
      <img src="/static/images/line.png">
    </div>
    <div class="page-right">
      <div class="title" v-text="actionList.title">
      </div>
      <ul class="action-list">
        <li class="action" v-for="(item, index) in actionList.data" :key="index">
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
    <div class="page-bottom">
      <button class="bottom-button">开始修复</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        actionList: {
          title: '盆骨修复 6个动作，90秒',
          data: [{
            name: '坐姿腹式呼吸',
            times: '10″',
            prop: '瑜伽垫'
          }, {
            name: '辅助腰部呼吸',
            times: '4次',
            prop: '瑜伽垫'
          }, {
            name: '猫式侧腰左扭',
            times: '2次',
            prop: '瑜伽垫'
          }, {
            name: '猫式侧腰右扭',
            times: '2次',
            prop: '瑜伽垫'
          }, {
            name: '猫式侧腰左扭',
            times: '2次',
            prop: '瑜伽垫'
          }]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-left{
    position: absolute;
    left: 14px;
    top: 88px;
    width: 45%;
    height: 300px;
    .pelvic-symptom {
      position: absolute;
      left: 24px;
      top: 284px;
      font-size: 11px;
      color: #4d4d4d;
      width: 45px;
      height: 69px;
      text-align: center;
      span{
        display: block;
      }
    }
    .pelvic-image{
      position: relative;
      width: 100%;
      /*border: 1px dashed #999;*/
      .pelvic-person{
        position: absolute;
        width: 160px;
        height: 265px;
      }
      .pelvic-line{
        position: absolute;
        width: 53px;
        height: 27px;
        left: 24px;
        top: 255px;
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
