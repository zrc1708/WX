// pages/MerchantAdv/Detail/Detail.js
let datas = require('../../../datas/welfaredetail_data.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    index:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index;
    this.setData({
      detailObj: datas.welfaredetail_data[index],
      index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

})