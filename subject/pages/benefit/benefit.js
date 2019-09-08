// pages/benefit/benefit.js
// var util = require('http://api.51ditu.com/js/maps.js');      //引用外部的js文件
// var util = require('http://api.51ditu.com/js/bus.js');      //引用外部的js文件

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取界面高度
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res);
        // 高度,宽度 单位为px
        that.setData({
          windowHeight: res.windowHeight,
        })
      }
    })
  },
  
  TOcar() {
    //点击跳转到public页面
    wx.navigateTo({
      url: '/pages/benefit_car/benefit_car',
    })

  },

  TOphone() {
    //点击跳转到public页面
    wx.navigateTo({
      url: '/pages/benefit_phone/benefit_phone',
    })

  },

  TOaction() {
    //点击跳转到public页面
    wx.navigateTo({
      url: '/pages/benefit_action/benefit_action',
    })

  },
})