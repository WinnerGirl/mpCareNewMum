import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/feedback/main',
      'pages/chest/main',
      'pages/abdomen/main',
      'pages/pelvic/main',
      'pages/hand/main',
      'pages/leg/main',
      'pages/detail/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#E9BCD6',
      navigationBarTitleText: '新妈修复',
      navigationBarTextStyle: 'white',
      resizable: true
    }
  }
}
