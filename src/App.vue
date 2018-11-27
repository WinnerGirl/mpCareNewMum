<script>
import { login } from './services/imumServices'
export default {
  created () {
    wx.login({
      success: (res) => {
        if (res.code) {
          this.userLogin(res.code)
        }
      }
    })
  },
  methods: {
    userLogin (code) {
      login({code}).then(res => {
        if (res.code === 1) {
          wx.setStorageSync('sessionId', res.data.sessionid)
        }
      })
    }
  }
}
</script>

<style lang="scss">
  page{
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-image: -webkit-linear-gradient(top, #E9BCD6, #FEE7A6);
  box-sizing: border-box;
  font-family: 'PingFang-SC-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  color: #4d4d4d;
  overflow: hidden;
}
.flex-row{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .flex-1{
    flex: 1;
  }
  .flex-2{
    flex: 2;
  }
  .flex-3{
    flex: 3;
  }
  .flex-4{
    flex: 4;
  }
  .flex-5{
    flex: 5;
  }
  .flex-6{
    flex: 6;
  }
}
.clearfix {
  zoom: 1;
  &::after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
}

.pull-left{
  float:left;
}
.pull-right{
  float:right;
}
$values: (2) (4) (5) (8) (10) (15) (20) (25) (30) (40) (50);
@mixin generateBox($list){
  @each $m in $list{
    $type:nth($m, 1);
    $key:nth($m, 2);
    @each $val in $values{
      $value: #{nth($val,1)};
      .#{$type}#{$value}{
        #{$key}: #{$value}rpx;
      }
    }
  }
}
//margin
@include generateBox($list:(ml margin-left) (mr margin-right) (mt margin-top) (mb margin-bottom));

//padding
@include generateBox($list:(pl padding-left) (pr padding-right) (pt padding-top) (pb padding-bottom));

.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
.text-center{
  text-align: center;
}
.text-grey{
  color: #333;
}
.text-strong{
  color: #fff;
}
.text-normal{
  color: #f1f1f1;
}
.text-light{
  color: #999;
}
.text-el{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}

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
</style>
