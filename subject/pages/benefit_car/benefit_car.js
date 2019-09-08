let datas = require('/../../datas/benefit_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
    windowHeight: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.benefit_data

    });

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

  
})