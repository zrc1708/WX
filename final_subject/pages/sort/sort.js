// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: '',
  },

  
  onLoad: function (options) {
    //获取界面高度
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res);
        // 高度,宽度 单位为px
        that.setData({
          windowHeight:  res.windowHeight,
        })
      }
    })
   
  },



  TOpublic() {
    //点击跳转到public页面
    wx.navigateTo({
      url: '/pages/public/public',
    })

  },

  TObenefit() {
    //点击跳转到benefit页面
    wx.navigateTo({
      url: '/pages/benefit/benefit',
    })

  },

  TOwork() {
    //点击跳转到work页面
    wx.navigateTo({
      url: '/pages/work/work',
    })

  },

  TOwelfare() {
    //点击跳转到welfare页面
    wx.navigateTo({
      url: "/pages/gongyi/MerchantAdv" ,
    })

  },
  TOMerchantAdv() {
    //点击跳转到MerchantAdv页面
    wx.navigateTo({
      url: '/pages/MerchantAdv/MerchantAdv',
    })

  }




})