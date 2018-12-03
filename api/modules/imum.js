/* eslint-disable */
module.exports = function (app) {
  // 获取3rdsession
  app.get('/users/3rdsession', function (req, res, next) {
    return res.send({
      "code": 0,
      "msg": "",
      "data": {
        "sessionid": "11"
      }
    })
  })
  // 提交微信userinfo信息，解密UnionID，解密成功后更新UnionID,并返回客户端
  app.post('/users/info', function (req, res, next) {
    return res.send({
      "code": 0,
      "msg": ""
    })
  })
  // 获取用户修复信息
  app.get('/users/repairinfo', function (req, res, next) {
    return res.send({
      "code": 0,
      "msg": "",
      "data": {
        "ppday": 20
      }
    })
  })
  // 获取用户修复信息
  app.post('/users/repairinfo', function (req, res, next) {
    return res.send({
      "code": 0,
      "msg": ""
    })
  })
  // 获取基础修复课程信息
  app.get('/repair/course', function (req, res, next) {
    return res.send({
      "data": {
        "course": [
          {
            "id": 1,
            "name": "轻修42天",
            "cycle": "42",
            "themes": [
              {
                "id": 0,
                "name": "胸部修复",
                "region": 0
              },
              {
                "id": 1,
                "name": "胸部修复",
                "region": 1
              },
              {
                "id": 2,
                "name": "胸部修复",
                "region": 2
              }
            ]
          }
        ]
      },
      "code": 0,
      "msg": "成功"
    })
  })
  // 获取修复主题内容
  app.get('/repair/theme', function (req, res, next) {
    return res.send({
      "code": 0,
      "msg": "成功",
      "data": {
        "cycle": "胀痛，乳房肿胀，堵塞",
        "count": 6,
        "times": 90,
        "actions": [
          {
            "id": 1,
            "name": "腹式呼吸",
            "times": 10,
            "equipment": "瑜伽垫",
            'vlink': 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/458/default.mp4',
            'imglink': 'https://imgsa.baidu.com/exp/w=480/sign=55050fb4af51f3dec3b2b86ca4eef0ec/241f95cad1c8a78601048d706709c93d70cf50a6.jpg'
          },
          {
            "id": 2,
            "name": "腹式呼吸",
            "times": 10,
            "equipment": "瑜伽垫",
            'vlink': 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/459/default.mp4',
            'imglink': 'https://imgsa.baidu.com/exp/w=480/sign=55050fb4af51f3dec3b2b86ca4eef0ec/241f95cad1c8a78601048d706709c93d70cf50a6.jpg'
          },
          {
            "id": 3,
            "name": "腹式呼吸",
            "times": 10,
            "equipment": "瑜伽垫",
            'vlink': 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/460/default.mp4',
            'imglink': 'https://imgsa.baidu.com/exp/w=480/sign=55050fb4af51f3dec3b2b86ca4eef0ec/241f95cad1c8a78601048d706709c93d70cf50a6.jpg'
          },
          {
            "id": 4,
            "name": "腹式呼吸",
            "times": 10,
            "equipment": "瑜伽垫",
            'vlink': 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/461/default.mp4',
            'imglink': 'https://imgsa.baidu.com/exp/w=480/sign=55050fb4af51f3dec3b2b86ca4eef0ec/241f95cad1c8a78601048d706709c93d70cf50a6.jpg'
          },
          {
            "id": 5,
            "name": "腹式呼吸",
            "times": 10,
            "equipment": "瑜伽垫",
            'vlink': 'https://cns.ef-cdn.com/_vids/dailylesson/lesson/461/default.mp4',
            'imglink': 'https://imgsa.baidu.com/exp/w=480/sign=55050fb4af51f3dec3b2b86ca4eef0ec/241f95cad1c8a78601048d706709c93d70cf50a6.jpg'
          }
        ]
      }
    })
  })
  // 返回动作详情
  app.get('/repair/action', function (req, res, next) {
    return res.send({
      "code": 0,
      "msg": "成功",
      "data": {
        "effect": "可减缓乳房胀痛；有利于乳腺疏通，开奶",
        "step": "1）跪在瑜伽垫上，双手撑地，保持腰背脊椎放松\n2）以肚脐为中心，臀部向左摆动，转头看向左臀并保持一下\n3）还原臀部与身体一直线",
        "breath": "保持平稳呼吸",
        "feel": "动作保持匀速，环绕时胸部有挤压感",
        "equipment": "瑜伽垫",
        "wrong": "环绕时没有挤压胸部"
      }
    })
  })
  // 提交开始修复
  app.post('/repair/start', function (req, res, next) {
    return res.send({
      "code": 0,
      "msg": "成功",
      "data": {
        "recordid": "1"
      }
    })
  })
  // 提交结束修复
  app.post('/repair/end', function (req, res, next) {
    return res.send({
      "code": 0,
      "msg": "成功"
    })
  })
  // 获取用户修复信息
  app.post('/repair/comment', function (req, res, next) {
    return res.send({
      "code": 0,
      "msg": "成功"
    })
  })
  // 模拟接口调用失败
  app.post('/error/1', function (req, res, next) {
    return res.send({
      "code": 1,
      "msg": "失败"
    })
  })
  // 模拟token过期
  app.post('/error/304', function (req, res, next) {
    return res.send({
      "code": 304,
      "msg": "失败"
    })
  })
}
