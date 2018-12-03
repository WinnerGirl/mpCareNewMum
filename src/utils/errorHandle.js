import {errorConfig} from './commonConfig'

export function errorHandle (code) {
  wx.showModal({
    title: '提示',
    content: errorConfig[code],
    showCancel: false,
    success (res) {
      if (res.confirm) {
        if (code === 401 || code === 403) { // token失效，需要清除本地sessionid数据返回首页重新登录
          wx.removeStorageSync('sessionid')
          wx.reLaunch({
            url: '/pages/index/main'
          })
        } else {
          console.log(errorConfig[code])
        }
      }
    }
  })
}
