<template>
  <div class="container">
    <div class="page-left">
      <div class="chest-image">
        <img class="chest-person" src="/static/images/chest_person.png">
        <img class="chest-line" src="/static/images/chest_line.png">
        <div class="chest-symptom">
          <span>胀痛</span>
          <span>压痛</span>
          <span>乳房肿胀</span>
        </div>
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
            <img class="pull-left" src="/static/images/action.png">
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
        title: '胸部修复 6个动作，90秒',
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
    left: 10px;
    top: 142px;
    width: 45%;
    height: 335px;
    .chest-symptom {
      position: absolute;
      left: 117px;
      top: -50px;
      font-size: 11px;
      color: #4d4d4d;
      width: 45px;
      height: 50px;
      text-align: center;
      span{
        display: block;
      }
    }
    .chest-image{
      position: relative;
      width: 100%;
      /*border: 1px dashed #999;*/
      .chest-person{
        position: absolute;
        width: 165px;
        height: 265px;
        top: 17px;
      }
      .chest-line{
        position: absolute;
        width: 69px;
        height: 157px;
        left: 92px;
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
