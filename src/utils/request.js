import {getAPIUrl} from './apiConfig'
import {errorHandle} from './errorHandle'

function fetchData () {
  function getResponse (url, params, type) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: getAPIUrl(url),
        method: type,
        data: params,
        header: {
          'content-type': 'application/json' // 默认值
        },
        complete: (res) => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            if (res.data.code !== 0) {
              errorHandle(res.data.code)
            }
            resolve(res.data)
          } else {
            errorHandle(4400)
            reject(res)
          }
        }
      })
    })
  }
  return {
    get (url, params) {
      return getResponse(url, params, 'GET')
    },
    post (url, params) {
      return getResponse(url, params, 'POST')
    }
  }
}

export default fetchData()
