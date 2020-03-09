// pages/MerchantAdv/MerchantAdv.js
let datas =require('../../datas/welfare_data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.welfare_data
    })
  },
  
  ToDetail(event){
    let index = event.currentTarget.dataset.index
    
    wx.navigateTo({
      url: '/pages/gongyi/Detail/Detail?index='+index,
      
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

})