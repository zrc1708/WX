// pages/rili/rili.js
Page({
  data: {
    // 控制弹窗的显示
    dialogShow: false,
    // 弹窗的按钮
    oneButton: [{ text: '确定' }],
    // 今日的数据
    today:{},
    // 当月一共多少天
    days:0,
    // 当月第一天的星期
    firstDayWeek:0,
    // 今天的日期，不会改变，用于进行判断给当前日期添加样式
    basedate:{},
    // 存储当前月份的特殊日期
    holiday:[],
    weekList: ['日','星期一', '星期二', '星期三', '星期四', '星期五', '六']
  },

  onLoad: function (options){
    // 获取当前月份
    this.getToday()
  },
  onReady: function (options) {
    // 获取当前月一共有多少天
    var t = this.mGetDate(2020, this.data.today.month);
    this.setData({
      days:t
    })
    // 获取当前月的第一天是周几
    let fw = this.getOneDay(this.data.today.month, 1, 2020)
    this.setData({
      firstDayWeek: fw.week
    })
    this.getjieri()
  },
  // 获取指定日期的信息
  getOneDay: function (month,day,year) {
    var date = new Date(Date.parse(`${month}/${day}/${year}`));
    var obj = {}
    obj.year = date.getFullYear();
    obj.month = date.getMonth() + 1;
    obj.day = date.getDate();
    obj.week = date.getDay()
    return obj
  },
  // 获取当前日期的年,月，日,星期
  getToday:function(){
    var date = new Date();
    var Y = date.getFullYear();
    var M = date.getMonth() + 1;
    var D = date.getDate();
    var X = date.getDay()
    this.setData({
      today:{
        year:Y,
        month:M,
        day:D,
        week:X
      },
      basedate:{
        year: Y,
        month: M,
        day: D,
      }
    })
  },
  // 获取当前月份一共多少天
  mGetDate:function(year, month){
    var d = new Date(year, month, 0);
    return d.getDate();
  },
  //左侧按钮 
  btnleft:function(){
    let newmonth,newyear
    if (this.data.today.month==1){
      newmonth = 12
      newyear = --this.data.today.year
    }else{
      newmonth = --this.data.today.month
      newyear = this.data.today.year
    }
    let newdate = this.getOneDay(newmonth,1, newyear)
    // 获取新的当前月
    this.setData({
      today: newdate
    })
    // 获取当前月一共有多少天
    var t = this.mGetDate(2020, this.data.today.month);
    this.setData({
      days: t
    })
    // 获取当前月的第一天是周几
    let fw = this.getOneDay(this.data.today.month, 1, this.data.today.year)
    this.setData({
      firstDayWeek: fw.week
    })
    // 获取特殊日期
    this.getjieri()
  },
  // 右侧按钮
  btnright:function(){
    let newmonth, newyear
    if (this.data.today.month == 12) {
      newmonth = 1
      newyear = ++this.data.today.year
    } else {
      newmonth = ++this.data.today.month
      newyear = this.data.today.year
    }
    let newdate = this.getOneDay(newmonth, 1, newyear)
    // 获取新的当前月
    this.setData({
      today: newdate
    })
    // 获取当前月一共有多少天
    var t = this.mGetDate(2020, this.data.today.month);
    this.setData({
      days: t
    })
    // 获取当前月的第一天是周几
    let fw = this.getOneDay(this.data.today.month, 1, this.data.today.year)
    this.setData({
      firstDayWeek: fw.week
    })
    // 获取特殊日期
    this.getjieri()
  },
  getjieri:function(){
    var that = this
    wx.request({
      url: `http://timor.tech/api/holiday/year/${this.data.today.year}-${this.data.today.month}`, 
      header: { 
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        that.setData({
          holiday:res.data.holiday
        })
      }
    })
  },
  // 开启弹窗
  openConfirm: function () {
    this.setData({
      dialogShow: true
    })
  },
  // 弹窗按钮的点击事件
  tapDialogButton(e) {
    this.setData({
      dialogShow: false
    })
  },
})