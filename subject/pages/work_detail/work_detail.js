let datas = require('/../../datas/workdetail_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailArr: {},
    index: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    let index = options.index;
    //更新detailArr中的状态
    this.setData({
      detailArr: datas.workdetail_data[index],
      index
    });
  },

  
})