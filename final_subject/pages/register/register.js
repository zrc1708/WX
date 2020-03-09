//login.js
//获取应用实例

Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },

  //跳转到主页面
  goToIndex() {
    wx.switchTab({
      url: '/pages/home/home',
    });
  },


  //初始化
  onLoad: function () {
    this.getUserInfo();
  },


  //获取用户信息
  getUserInfo() {
    //判断用户是否授权
    wx.getSetting({
      success: (data) => {
        //console.log(data);
        if (data.authSetting['scope.userInfo'])
          this.setData({ show: false });//用户已经授权
        else
          this.setData({ show: true }); //用户没有授权
      }
    })

    wx.getUserInfo({
      success: (data) => {
        //更新data中的userInfo
        this.setData({ userInfo: data.userInfo });
      },
      fail: (data) => {
        //console.log("获取用户信息失败");
      }
    })

  },


  //回调函数,判断用户点击的是否是允许
  backgetuserinfo(data) {
    //console.log('用户点击了',data);
    if (data.detail.rawData) {
      //用户点击的是允许
      this.getUserInfo();
    }
  },


  //页面初次渲染
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) {
        angle = 14;
      } else if (angle < -14) {
        angle = -14;
      }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
  }
});