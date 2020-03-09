let datas = require('/../../datas/work_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.work_data
    })
  },
 

  //点击跳转到详情页面
  TOdetail(event) {
    //console.log(event);
    //获取点击对应的页面下标
    let index = event.currentTarget.dataset.index;

    wx.navigateTo({
      url: '/pages/work_detail/work_detail?index=' + index,
    })

  },
  
})