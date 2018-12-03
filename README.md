# mp-care-new-mum

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# api in local
npm run api

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
```
## 项目说明

```
1、项目配置文件：main.js （配置项目全局属性、注册页面）

2、项目入口：App.vue

3、页面说明（pages目录下的一个文件夹代表一个页面）：
首页：index
胸部修复：chest
腹部修复：abdomen
盆骨修复：pelvic
上肢修复：hand
下肢修复：leg
动作详情：detail
信息反馈：feedback

4、配置文件说明：
修改接口域名：utils/apiConfig.js
小程序接口调用封装：utils/request.js
所有接口管理:services/imumServices.js
接口调用示例：
  页面文件中引入接口：import { getCourse } from '../../services/imumServices'
  获取数据
  async getCourseInfo () {
     const data = await getCourse({
       sessionid: this.sessionid
     })
     if (data.code === 0) {
       console.log(data)
     }
   },
公用数据配置文件：utils/commonConfig
  分享文案及图片：shareConfig
  错误码：errorConfig

5、项目运行
  npm run dev









