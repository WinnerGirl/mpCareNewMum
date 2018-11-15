import {getAPIUrl} from './config'

function fetchData () {
  async function getResponse (url, params, type) {
    const response = await wx.request({
      url: getAPIUrl(url),
      method: type,
      data: params,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.success === 1) {
          return res.data.data
        }
        return []
      },
      error: function (err) {
        console.log(err)
        return []
      }
    })
    return response
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
