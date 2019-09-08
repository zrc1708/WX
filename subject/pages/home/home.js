var util = require('../../utils/util.js')
var amapFile = require('../../libs/amap-wx.js');

Page({

  data: {
    listArr: [],
    weather: [],
    nowDate: '',
    windowHeight: '',
    week:'',
    weadata:'',
  },
  
  
  //获取list_data.js里面的内容转给listArr数组
  onLoad: function (options) {
    var that = this;
    
    wx.request({
      url: 'https://www.tianqiapi.com/api/?version=v1&appid=99248416&appsecret=g1fjlGJD',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
          console.log(res.data)
          that.setData({
            weadata: res.data, 
           
        })
         
      }
    })
     

    this.setData({
      nowDate: util.formatDate(new Date()),//获取时间
      week: util.getDates(1, util.formatDate(new Date()))[0].week,
    });
    //获取界面高度

    wx.getSystemInfo({
      success: function (res) {
        //  console.log(res);
        // 高度,宽度 单位为px
        that.setData({
          windowHeight: res.windowHeight,
        })
      }
    })

    
   

  },
  
  TOpublic() {
    //点击跳转到public页面
    wx.navigateTo({
      url: '/pages/public/public',
    })

  },
  
  TOwelfare() {
    //点击跳转到public页面
    wx.navigateTo({
      url: '/pages/gongyi/',
    })

  },
  
  TOadver() {
    //点击跳转到public页面
    wx.navigateTo({
      url: '/pages/MerchantAdv/MerchantAdv',
    })

  },


})