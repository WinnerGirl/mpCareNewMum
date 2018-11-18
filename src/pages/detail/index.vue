<template>
  <div class="container">
    <img class="action-img" src="https://imgsa.baidu.com/exp/w=480/sign=55050fb4af51f3dec3b2b86ca4eef0ec/241f95cad1c8a78601048d706709c93d70cf50a6.jpg"/>
    <div class="action-detail">
      <div class="detail-item">
        <h4>作用</h4>
        <span v-text="action.effect || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>步骤</h4>
        <span v-html="action.step || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>呼吸</h4>
        <span v-text="action.breath || '暂无'"></span>
      </div>
      <div class="detail-item">
        <h4>感觉</h4>
        <span v-text="action.feeling || '暂无'"></span>
      </div>
      <div class="detail-item">
      <h4>器械</h4>
      <span v-text="action.prop || '暂无'"></span>
    </div><div class="detail-item">
      <h4>常见错误</h4>
      <span v-text="action.mistaken || '暂无'"></span>
    </div>
    </div>
    <div class="action-bottom">
      <button class="bottom-button">开始修复</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      action: {
        name: '鸟式肩部下压',
        effect: '可减缓乳房胀痛；有利于乳腺疏通，开奶',
        step: `1. 跪在瑜伽垫上，双手撑地，保持腰背脊椎放松<br>
        2. 以肚脐为中心，臂部向左摆动，转头看向左臂并保持一下<br>
        3. 还原臂部与身体一直线`,
        breath: '保持平稳呼吸',
        feeling: '动作保持匀速，环绕时胸部有挤压感',
        prop: '瑜伽垫',
        mistaken: '环绕时没有挤压胸部'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .action-img {
    width: 100%;
    height: 200px;
  }
  .action-detail {
    padding: 0 15px;
    font-size: 12px;
    .detail-item {
      margin-top: 15px;
      h4 {
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
  .action-bottom{
    padding: 23px 15px 15px 15px;
  }
</style>
