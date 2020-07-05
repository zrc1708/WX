<template>
  <div class="indexContainer">
    <img v-if="isShow" class="index_img" :src="userInfo.avatarUrl" alt="">
    <Button class="btn" v-else open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</Button>
    <p class="userName">Hello {{userInfo.nickName}}</p>
    <div @tap="toDetail" class="goStudy">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userInfo:{},
      isShow:false,
    }
  },
  beforeMount(){
    // 获取用户的登录信息
    this.handleGetUserInfo()
  },
  methods:{
    // 获取用户登录信息
    handleGetUserInfo(){
      wx.getUserInfo({
        success: (data) => {
          this.userInfo = data.userInfo
          this.isShow = true
        },
        fail:()=>{
          console.log('获取失败')
        }
      })
    },
    getUserInfo(data){
      // 判断用户是否授权
      console.log(data)
      if(data.mp.detail.rawData){
        // 用户已经授权
        this.handleGetUserInfo()
      }
    },
    toDetail(){
      wx.switchTab({
        url:'/pages/list/main'
      })
    }
  }
}
</script>

<style>
  page{
    background-color: #8ed415;
  }

  .indexContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index_img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
  }
  .userName{
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }
  .goStudy{
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eee;
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
  }

  .btn{
    width: 300rpx;
    height: 300rpx;
    border-radius: 150rpx;
    margin: 100rpx 0;
    line-height: 300rpx;
    text-align: center;
    font-size: 26rpx;
  }
</style>
