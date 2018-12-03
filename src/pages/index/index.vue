<template>
  <div class="container">
    <!--<div class="round-wrapper">-->
      <!--<img src="/static/images/round.png"/>-->
      <!--<span>10day</span>-->
    <!--</div>-->
    <div class="circle-days-wrapper">
      <img v-if="rateType === 1" src="/static/images/color1.png">
      <img v-if="rateType === 2" src="/static/images/color2.png">
      <img v-if="rateType === 3" src="/static/images/color3.png">
      <div class="circle-days">
        {{cycle}}day
      </div>
      <span class="day-num">{{dayNum}}天</span>
    </div>
    <div class="person-modal">
      <img class="person-whole" src="/static/images/person.png" alt="整个"/>
    </div>
    <div class="person-modal person-modal-map">
      <img class="person-head" src="/static/images/head.png" alt="头部" />
      <img class="person-chest" src="/static/images/chest.png" alt="胸部" @click="goNewPage('chest', 0)"/>
      <img class="person-abdomen" src="/static/images/abdomen.png" alt="腹部" @click="goNewPage('abdomen', 1)"/>
      <img class="person-hand-left" src="/static/images/hand.png" alt="左手" @click="goNewPage('hand', 3)"/>
      <img class="person-hand-right" src="/static/images/hand.png" alt="右手" @click="goNewPage('hand', 3)"/>
      <img class="person-pelvic" src="/static/images/pelvic.png" alt="盆腔" @click="goNewPage('pelvic', 2)"/>
      <img class="person-leg-left" src="/static/images/leg.png" alt="左脚" @click="goNewPage('leg', 4)"/>
      <img class="person-leg-right"src="/static/images/leg.png" alt="右脚" @click="goNewPage('leg', 4)"/>
    </div>
    <p class="tip">请选择修复部位</p>
    <div class="modal-wrapper" v-if="showModal">
      <div class="modal-bg"></div>
      <div class="modal">
        <p class="title">请选择您的生产方式</p>
        <div class="flex-row mt30">
          <div class="flex-1 text-center" v-for="(type, index) in typeList" :key="index">
            <button :class="{'active': index === typeIndex}" v-text="type" @click="changeTypeIndex(index)"></button>
          </div>
        </div>
        <picker @change="pickerChange" :value="dayIndex" :range="days">
          <div class="picker">
            <p class="title">今天是产后第几天：</p>
            <div class="text-center">
              <span class="picker-num mt30">{{days[dayIndex]}}</span>天
            </div>
          </div>
        </picker>
      </div>
      <div class="button-footer">
        <button class="button-sure" @click="setRepaireInfo">确定</button>
      </div>
    </div>
    <button v-if="!auth" type="success" class="button-auth" open-type="getUserInfo" @getuserinfo="bindGetUserInfo"></button>
  </div>
</template>

<script>
import {login, getRepairinfo, postRepairinfo, getCourse, postUserinfo} from '../../services/imumServices'
import {shareConfig} from '../../utils/commonConfig'

export default {
  data () {
    return {
      showModal: false, // 信息提交面板显示控制字段
      typeList: ['顺产', '剖腹产'],
      days: [], // 产后第几天选择列表（包含1-90天可选）
      dayIndex: 0, // 用户选择的天数
      typeIndex: 0, // 用户选择的生产方式
      rateType: 1, // 完成周期的占比 1 0%-25%； 2 20% - 50%； 3 50% - 100%
      sessionid: '',
      dayNum: 0, // 用户修复天数
      cycle: '42', // 修复总周期
      auth: true // 用户是否授权
    }
  },
  created () {
    console.log(wx.getStorageSync('sessionid'))
    if (!wx.getStorageSync('sessionid')) { // 未登录过的用户走登录流程
      wx.login({ // 调用接口获取登录凭证（code)
        success: (res) => {
          if (res.code) {
            this.userLogin(res.code)
          }
        }
      })
    } else {
      this.initPageView()
    }
  },
  methods: {
    /**
     * 小程序登录
     * @param code 小程序提供的登录码
     * @return {Promise<void>}
     */
    async userLogin (code) {
      const data = await login({code})
      if (data.code === 0 && data.data && data.data.sessionid) {
        this.sessionid = data.data.sessionid
        this.getWxUserInfo()
      }
    },
    /**
     * 用户授权获取用户信息，授权成功提交数据，拒绝授权显示授权按钮
     */
    getWxUserInfo () {
      wx.getUserInfo({
        success: res => {
          this.postUserInfo(res)
        },
        fail: () => {
          this.auth = false
        }
      })
    },
    /**
     * 用户点击确认授权后提交信息到服务端，记录sessionid并更新页面
     * @param res 微信端提供的用户数据
     * @return {Promise<void>}
     */
    async postUserInfo (res) {
      const data = await postUserinfo({
        encryptedData: res.encryptedData,
        iv: res.iv,
        rawData: res.rawData,
        signature: res.signature
      })
      if (data && data.code === 0) {
        this.auth = true
        wx.setStorageSync('sessionid', this.sessionid)
        this.initPageView()
      }
    },
    bindGetUserInfo (e) {
      if (e.mp.detail.rawData) {
        this.getWxUserInfo()
      } else {
        this.auth = false
      }
    },
    /**
     * 初始化页面显示
     */
    initPageView () {
      this.sessionid = wx.getStorageSync('sessionid')
      this.getCourseInfo() // 获取课程信息
      const notFirstVisit = wx.getStorageSync('notFirstVisit') === 'true' // 用户是否初次访问
      if (notFirstVisit) {
        this.getRepairInfo() // 不是初次访问直接加载该用户的修复信息
      } else { // 初次访问用户显示信息提交modal
        this.initDays()
        this.showModal = true
      }
    },
    /**
     * 获取基础修复课程信息
     */
    async getCourseInfo () {
      const data = await getCourse({
        sessionid: this.sessionid
      })
      if (data.code === 0) {
        const courseInfo = data.data.course[0]
        this.cycle = courseInfo.cycle
        wx.setStorageSync('course', JSON.stringify({
          id: courseInfo.id,
          cycle: courseInfo.cycle,
          name: courseInfo.name
        }))
      }
    },
    /**
     * 获取登录用户的修复
     * @return {Promise<void>}
     */
    async getRepairInfo () {
      const data = await getRepairinfo({
        sessionid: this.sessionid
      })
      if (data.code === 0) {
        this.dayNum = data.data.ppday
        wx.setStorageSync('ppday', this.dayNum)
        this.setRateType(this.dayNum)
      }
    },
    /**
     * 提交用户个人的修复信息
     **/
    async setRepaireInfo () {
      const ppmode = this.typeList[this.typeIndex]
      const ppday = this.days[this.dayIndex]
      const data = await postRepairinfo({
        sessionid: this.sessionid,
        ppmode,
        ppday
      })
      if (data.code === 0) {
        wx.setStorageSync('notFirstVisit', 'true')
        this.showModal = false
        this.getRepairInfo()
      }
    },
    /**
     * 初始化天数选择器
     **/
    initDays () {
      const days = []
      for (let i = 1; i <= 90; i += 1) {
        days.push(i)
      }
      this.days = days
    },
    /**
     * 跳转主题修复页面
     * @param pageName 主题对应的页面名称
     * @param id 身体区域 0-胸部 1-腹部 2-骨盆3-手臂 4-腿部
     **/
    goNewPage (pageName, id) {
      const url = `../${pageName}/main?themeId=${id}`
      wx.navigateTo({ url })
    },
    /**
     * 记录用户选择的天数序号
     **/
    pickerChange (e) {
      this.dayIndex = e.mp.detail.value
    },
    /**
     * 记录用户选择的生产类型序号
     **/
    changeTypeIndex (index) {
      this.typeIndex = index
    },
    /**
     * 根据用户产后的天数对应相应的外圆类型
     * @param day 新妈产后天数
     */
    setRateType (day) {
      const cycle = this.cycle
      const rate = day / cycle * 100
      if (rate > 0 && rate <= 25) this.rateType = 1
      else if (rate > 25 && rate <= 50) this.rateType = 2
      else this.rateType = 3
    }
  },
  onShareAppMessage () {
    return shareConfig
  }
}
</script>

<style lang="scss" scoped>
  $person-head-width: 358rpx / 2 * 1.4;
  $person-head-height: 356rpx / 2 * 1.4;

  $person-chest-width: 319rpx / 2 * 1.4;
  $person-chest-height: 222rpx / 2 * 1.4;
  $person-abdomen-width: 341rpx / 2 * 1.4;
  $person-abdomen-height: 244rpx / 2 * 1.4;

  $person-pelvic-width: 312rpx / 2 * 1.4;
  $person-pelvic-height: 161rpx / 2 * 1.4;

  $person-hand-width: 85rpx * 1.4;
  $person-hand-height: 212rpx * 1.4;

  $person-leg-width: 83rpx * 1.4;
  $person-leg-height: 249rpx * 1.4;

  $distance-head-body: 4rpx;
  $distance-body-pelvic: 5rpx;
  $distance-pelvic-leg: 1rpx;
  $distance-body-hand: 2rpx;

  $top-chest: $person-head-height + $distance-head-body;
  $top-abdomen: $top-chest + $person-chest-height - 18rpx;
  $top-pelvic: $top-abdomen + $person-abdomen-height;
  $top-leg: $top-pelvic + $distance-body-pelvic;
  $top-hand: $top-chest;

.person-modal{
  position: relative;
  width: 200px;
  height: 450px;
  margin: 0 auto;
  margin-top: 80px;
  .person-whole {
    position: absolute;
    top: 0;
    left: 50%;
    width: 200px;
    height: 450px;
    transform: translateX(-50%);
    /*border: 1px dashed #999;*/
  }
  .person-head {
    position: absolute;
    top: 0;
    left: 50%;
    width: $person-head-width;
    height: $person-head-height;
    transform: translateX(-50%);
  }
  .person-chest {
    position: absolute;
    top: $top-chest;
    left: 50%;
    width: $person-chest-width;
    height: $person-chest-height;
    transform: translateX(-50%);
  }
  .person-abdomen {
    position: absolute;
    top: $top-abdomen;
    left: 50%;
    width: $person-abdomen-width;
    height: $person-abdomen-height;
    transform: translateX(-50%);
  }
  .person-pelvic {
    position: absolute;
    top: $top-pelvic;
    left: 50%;
    width: $person-pelvic-width;
    height: $person-pelvic-height;
    transform: translateX(-50%);
  }
  .person-hand-left {
    position: absolute;
    top: $top-hand;
    left: 50%;
    width: $person-hand-width;
    height: $person-hand-height;
    margin-left: -221rpx;
  }
  .person-hand-right {
    position: absolute;
    top: $top-hand;
    left: 50%;
    width: $person-hand-width;
    height: $person-hand-height;
    transform: rotateY(180deg);
    margin-left: 50px;
  }
  .person-leg-left {
    position: absolute;
    top: $top-leg;
    left: 50%;
    width: $person-leg-width;
    height: $person-leg-height;
    margin-left: -130rpx;
  }
  .person-leg-right {
    position: absolute;
    top: $top-leg;
    left: 50%;
    width: $person-leg-width;
    height: $person-leg-height;
    transform: rotateY(180deg);
    margin-left: 4px;
  }
}
  .person-modal-map{
    margin-top: -900rpx;
    opacity: 0;
  }
  .tip {
    text-align: center;
    font-size: 13px;
    color: #333;
    margin-top: 13px;
  }
  .round-wrapper{
    position: absolute;
    width: 76px;
    height: 76px;
    top: 15px;
    left: 15px;
    img {
      width: 76px;
      height: 76px;
    }
    span{
      color: #4D4D4D;
      font-size: 12px;
      position: absolute;
      top: 32px;
      left: 80px;
      font-weight: bold;
    }
  }
  .circle-days-wrapper {
    position: absolute;
    width: 76px;
    height: 76px;
    top: 15px;
    left: 15px;
    img {
      width: 76px;
      height: 76px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .circle-days {
      width: 60px;
      height: 60px;
      line-height: 60px;
      border-radius: 50%;
      border: 2px solid #fff;
      color: #fff;
      font-size: 19px;
      font-weight: bold;
      text-align: center;
      margin-top: 6px;
      margin-left: 6px;
      background: transparent;
    }
    .day-num {
      color: #4D4D4D;
      font-size: 12px;
      position: absolute;
      top: 32px;
      left: 80px;
      font-weight: bold;
      width: 70px;
      white-space: nowrap;
    }
  }
  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .modal-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0 ,.8);
    }
    .modal {
      position: absolute;
      color: #fff;
      top: 90px;
      padding: 0 15px;
      width: 100%;
      box-sizing: border-box;
      .title{
        font-size: 15px;
        margin-top: 60px;
      }
      button {
        width: 150px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        color: #fff;
        background: #000;
        font-size: 12px;
        text-align: center;
        &.active {
          background: #fff;
          color: #4D4D4D;
        }
      }
      .picker-wrapper {
        margin: 0 auto;
      }
      .picker-num {
        display: inline-block;
        border-bottom: 1px solid #eee;
        width: 100px;
        text-align: center;
      }
    }
    .button-footer {
      position: absolute;
      bottom: 15px;
      left: 0;
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      .button-sure {
        width: 100%;
        height: 49px;
        line-height: 49px;
        text-align: center;
        background: #E9BCD6;
        border-radius: 5px;
        color: #fff;
        font-size: 15px;
      }
    }
  }
  .button-auth {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1000;
  }
</style>
