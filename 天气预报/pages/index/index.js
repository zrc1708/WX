//index.js

Page({
  data: {
    weadata:'',
    weacity:''
  },

  onLoad: function () {
    let that = this
    wx.request({
      url: 'https://www.tianqiapi.com/api/?version=v1&appid=99248416&appsecret=g1fjlGJD',
      success(res) {
          console.log(res.data)
          for (let index = 0; index < res.data.data.length; index++) {
            res.data.data[index].tem = parseInt(res.data.data[index].tem)
            res.data.data[index].tem2 = parseInt(res.data.data[index].tem2)
            res.data.data[index].date = res.data.data[index].date.split('-')[1]+'/'+res.data.data[index].date.split('-')[2]
          }
          for (let index = 0; index < res.data.data[0].index.length; index++) {
            if(res.data.data[0].index[index].level==null){
              res.data.data[0].index[index].level = '中'
            }
          }
          that.setData({
            weacity: res.data, 
            weadata: res.data.data
        })
      }
    })
  },
})
