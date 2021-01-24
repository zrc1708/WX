import appDetail from '../../../appid'

// pages/other/other.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:{
      username:'nico',
      userage:123
    }
  },

  // 获取用户唯一标识openId
  handleGetOpenId(){
    // 1.获取登录凭证
    wx.login({
      success: async res =>{
        // 2.将登录凭证发送到服务器
        wx.request({
          method:'POST',
          url: 'http://127.0.0.1:8877/getOpenId',
          data: {
            code: res.code,
            appId:appDetail.appId,
            appSecret:appDetail.appSecret
          },
          success (res) {
            console.log(res.data)
          }
        })
      }
    })
  },
})