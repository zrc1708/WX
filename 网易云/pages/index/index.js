//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerheight:0,
    windowheight: wx.getSystemInfoSync().windowHeight,
    playheight:0,
    tabheight:0,
    background: [
      '../../image/banner.jpg',
      '../../image/banner1.jpg', 
      '../../image/banner2.jpg', 
      '../../image/banner3.jpg'
      ],
  },
  onLoad:function(){
    const query = wx.createSelectorQuery()
    var that = this;
    query.select('.tabs').boundingClientRect(function (rect) {
      that.setData({
        tabheight: rect.height
      })
    }).exec();
    query.select('.player').boundingClientRect(function (rect) {
      that.setData({
        playheight: rect.height
      })
    }).exec();
  },
  imageLoad: function (e) {
    var width = e.detail.width  
    var height = e.detail.height
    var windowwidth = wx.getSystemInfoSync().windowWidth
    this.setData({
      bannerheight: height * windowwidth / width+'px'
    })
  },
  async getheight(){

  }
})
