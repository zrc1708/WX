let zhengfudata = require('../../datas/detail_data.js');
let advdata = require('../../datas/MerchantAdv_data.js');
let gongyidata = require('../../datas/welfaredetail_data.js');
var viewnumber = {}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: '',
    listArr: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(zhengfudata)
    // console.log(advdata)    
    // console.log(gongyidata)
    
    this.createnumber()
    this.xuanran1(viewnumber.viewone1, viewnumber.viewone2)
    this.xuanran2(viewnumber.viewtwo1, viewnumber.viewtwo2)
    this.xuanran3(viewnumber.viewthree1, viewnumber.viewthree2)
    this.xuanran4(viewnumber.viewfour1, viewnumber.viewfour2)    
 

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
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.createnumber()
    this.xuanran1(viewnumber.viewone1, viewnumber.viewone2)
    this.xuanran2(viewnumber.viewtwo1, viewnumber.viewtwo2)
    this.xuanran3(viewnumber.viewthree1, viewnumber.viewthree2)
    this.xuanran4(viewnumber.viewfour1, viewnumber.viewfour2)  
    wx.stopPullDownRefresh()
  },
  //生成从minNum到maxNum的随机数
  randomNum: function (minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  },

createnum2:function(index){
   if(index == 0){
     return this.randomNum(0, 4)
   }else if(index==1){
     return this.randomNum(0, 3)     
   }else{
     return this.randomNum(0, 5)          
   }
},
  createnumber:function(){
    let number1 = this.randomNum(0, 2)
    let number2 = this.randomNum(0, 2)
    let number3 = this.randomNum(0, 2)
    let number4 = this.randomNum(0, 2)  

    viewnumber.viewone1 = number1
    viewnumber.viewtwo1 = number2
    viewnumber.viewthree1 = number3
    viewnumber.viewfour1 = number4

    viewnumber.viewone2 = this.createnum2(number1)

    do{
      viewnumber.viewtwo2 = this.createnum2(number2)
    } while (number2 == number1 && viewnumber.viewtwo2 == viewnumber.viewone2)

    do {
      viewnumber.viewthree2 = this.createnum2(number3)
    } while ((number3 == number1 && viewnumber.viewthree2 == viewnumber.viewone2) ||
             (number3 == number2 && viewnumber.viewthree2 == viewnumber.viewtwo2))

    do {
      viewnumber.viewfour2 = this.createnum2(number4)
    } while ((number4 == number1 && viewnumber.viewfour2 == viewnumber.viewone2) ||
      (number4 == number2 && viewnumber.viewfour2 == viewnumber.viewtwo2)||
      (number4 == number3 && viewnumber.viewfour2 == viewnumber.viewthree2))


    // console.log(viewnumber)
  },
  
  xuanran1:function(index,num){ 
    if(index==0){
      this.setData({
        'viewone.title': zhengfudata.detail_data[num].detailTitle,
        'viewone.img': zhengfudata.detail_data[num].img,
      })
    }else if(index==1){
      this.setData({
        'viewone.title': advdata.MerchantAdv_data[num].Title,
        'viewone.img': advdata.MerchantAdv_data[num].Image,
      })
    }else{ 
      this.setData({
        'viewone.title': gongyidata.welfaredetail_data[num].title,
        'viewone.img': gongyidata.welfaredetail_data[num].welfareimage,
      })
    }
  },
  xuanran2: function (index, num) {
    if (index == 0) {
      this.setData({
        'viewtwo.title': zhengfudata.detail_data[num].detailTitle,
        'viewtwo.img': zhengfudata.detail_data[num].img,
      })
    } else if (index == 1) {
      this.setData({
        'viewtwo.title': advdata.MerchantAdv_data[num].Title,
        'viewtwo.img': advdata.MerchantAdv_data[num].Image,
      })
    } else {
      this.setData({
        'viewtwo.title': gongyidata.welfaredetail_data[num].title,
        'viewtwo.img': gongyidata.welfaredetail_data[num].welfareimage,
      })
    }
  },
  xuanran3: function (index, num) {
    if (index == 0) {
      this.setData({
        'viewthree.title': zhengfudata.detail_data[num].detailTitle,
        'viewthree.img': zhengfudata.detail_data[num].img,
      })
    } else if (index == 1) {
      this.setData({
        'viewthree.title': advdata.MerchantAdv_data[num].Title,
        'viewthree.img': advdata.MerchantAdv_data[num].Image,
      })
    } else {
      this.setData({
        'viewthree.title': gongyidata.welfaredetail_data[num].title,
        'viewthree.img': gongyidata.welfaredetail_data[num].welfareimage,
      })
    }
  },
  xuanran4: function (index, num) {
    if (index == 0) {
      this.setData({
        'viewfour.title': zhengfudata.detail_data[num].detailTitle,
        'viewfour.img': zhengfudata.detail_data[num].img,
      })
    } else if (index == 1) {
      this.setData({
        'viewfour.title': advdata.MerchantAdv_data[num].Title,
        'viewfour.img': advdata.MerchantAdv_data[num].Image,
      })
    } else {
      this.setData({
        'viewfour.title': gongyidata.welfaredetail_data[num].title,
        'viewfour.img': gongyidata.welfaredetail_data[num].welfareimage,
      })
    }
  },
  To_one:function(){
    if (viewnumber.viewone1==0){
      wx.navigateTo({
        url: '/pages/public_detail/public_detail?index=' + viewnumber.viewone2,
      })
    } else if (viewnumber.viewone1 == 1){
      wx.navigateTo({
        url: '/pages/MerchantAdv/Detail/Detail?index=' + viewnumber.viewone2,
      })
    }else{
      wx.navigateTo({
        url: '/pages/gongyi/Detail/Detail?index=' + viewnumber.viewone2
      })
    }
  },
  To_two: function () {
    if (viewnumber.viewtwo1 == 0) {
      wx.navigateTo({
        url: '/pages/public_detail/public_detail?index=' + viewnumber.viewtwo2,
      })
    } else if (viewnumber.viewtwo1 == 1) {
      wx.navigateTo({
        url: '/pages/MerchantAdv/Detail/Detail?index=' + viewnumber.viewtwo2,
      })
    } else {
      wx.navigateTo({
        url: '/pages/gongyi/Detail/Detail?index=' + viewnumber.viewtwo2
      })
    }
  },
  To_three: function () {
    if (viewnumber.viewthree1 == 0) {
      wx.navigateTo({
        url: '/pages/public_detail/public_detail?index=' + viewnumber.viewthree2,
      })
    } else if (viewnumber.viewthree1 == 1) {
      wx.navigateTo({
        url: '/pages/MerchantAdv/Detail/Detail?index=' + viewnumber.viewthree2,
      })
    } else {
      wx.navigateTo({
        url: '/pages/gongyi/Detail/Detail?index=' + viewnumber.viewthree2
      })
    }
  },
  To_four: function () {
    if (viewnumber.viewfour1 == 0) {
      wx.navigateTo({
        url: '/pages/public_detail/public_detail?index=' + viewnumber.viewfour2,
      })
    } else if (viewnumber.viewfour1 == 1) {
      wx.navigateTo({
        url: '/pages/MerchantAdv/Detail/Detail?index=' + viewnumber.viewfour2,
      })
    } else {
      wx.navigateTo({
        url: '/pages/gongyi/Detail/Detail?index=' + viewnumber.viewfour2
      })
    }
  },

})