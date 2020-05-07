//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    control:'',
    showmask:''
  },
  
  onLoad: function () {
    wx.setStorage({
      key: "user",
      data: "123"
    })
  },
  showheader:function(){
    this.setData({
      control: 'showheader',
      showmask: 'show'
    })
  },
  closeHeader:function(){
    this.setData({
      control: 'hideheader',
      showmask: 'hide'
    })
  },
  gotopage:function(e){
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url
    })
  }
})
