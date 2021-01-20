import request from '../../utils/request'

Page({

  data: {
    phone: '', // 手机号
    password: '' // 用户密码
  },

  onLoad: function (options) {

  },
  handleInput(event){
    let type = event.target.dataset.type
    this.setData({
      [type]:event.detail.value
    })
  },
  async login(){
    let {phone, password} = this.data;
    if(!phone){
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
      return;
    }
    let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    if(!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
      return;
    }
    if(!password){
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return;
    }

    let result = await request('/login/cellphone', {phone, password, isLogin:true}, 'POST')
    if(result.code === 200){
      wx.showToast({
        title: '登录成功'
      })
      wx.setStorageSync('userInfo', JSON.stringify(result.profile))
      
      wx.reLaunch({
        url: '/pages/personal/personal'
      })
    }else if(result.code === 400){
      wx.showToast({
        title: '手机号错误',
        icon: 'none'
      })
    }else if(result.code === 502){
      wx.showToast({
        title: '密码错误',
        icon: 'none'
      })
    }else {
      wx.showToast({
        title: '登录失败，请重新登录',
        icon: 'none'
      })
    }
  }
})