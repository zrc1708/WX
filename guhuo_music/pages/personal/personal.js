import request from '../../utils/request'

let startY = 0; // 手指起始的坐标
let moveY = 0; // 手指移动的坐标
let moveDistance = 0; // 手指移动的距离

Page({

  data: {
    coverTransform: 'translateY(0)',
    coveTransition: '',
    userInfo: {}, // 用户信息
    recentPlayList: [], // 用户播放记录
  },

  onLoad: function (options) {

  },

  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  handleTouchStart(event){
    startY = event.touches[0].clientY
    this.setData({
      coveTransition:''
    })
  },
  handleTouchMove(event){
    moveY = event.touches[0].clientY
    moveDistance = moveY - startY
    if(moveDistance <= 0){
      return
    }
    if(moveDistance >= 80){
      moveDistance = 80
    }
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`
    })
  },
  handleTouchEnd(){
    this.setData({
      coverTransform: `translateY(0)`,
      coveTransition:'all .3s'
    })
  }
})