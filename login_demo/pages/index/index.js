// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo:{}
  },
  onLoad() {
    // 授权以后获取用户信息
    wx.getUserInfo({
      success:(res)=>{
        this.setData({
          userInfo:res.userInfo
        })
      },
      fail:(err)=>{
        console.log(err);
      } 
    })
    
  },
  handleGetUserInfo(res){
    if(res.detail.userInfo){
      this.setData({
        userInfo:res.detail.userInfo
      })
    }
  }
})
