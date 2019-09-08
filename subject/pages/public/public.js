// pages/public/public.js
let datas = require('/../../datas/public_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
    windowHeight: '',
  },

  //获取list_data.js里面的内容转给listArr数组
  onLoad: function () {
    this.setData({
      listArr: datas.public_data
    })

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
  

  //点击跳转到帖子详情页面
  TOdetail(event) {
    //console.log(event);
    //获取点击对应的页面下标
    let index = event.currentTarget.dataset.index;

    wx.navigateTo({
      url: '/pages/public_detail/public_detail?index=' + index,
    })

  },
  
})