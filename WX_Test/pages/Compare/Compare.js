// pages/比较数字大小/Compare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:'',
  },

  change:function(e){
    // console.log(e)
    this[e.target.dataset.id]=Number(e.detail.value)
  },

  compare:function(){
    var str='相等'
    if(this.num1>this.num2){
      str='数字1大'
    } else if (this.num1 < this.num2){
      str='数字2大'
    }
    this.setData({ result: str})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})