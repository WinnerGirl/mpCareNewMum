import {getAPIUrl} from './config'

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
            resolve(res.data)
          } else {
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
