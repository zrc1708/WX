// pages/index/index.js
import request from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    recommendList:[],
    topList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let bannerListData = await request('/banner', {type: 2})
    this.setData({
      bannerList:bannerListData.banners
    })

    let recommendListData = await request('/personalized', {limit:10})
    this.setData({
      recommendList:recommendListData.result
    })

    // 热歌榜，原创榜，飙升榜，新歌榜
    let idArr = [3778678,2884035,19723756,3779629]
    let resultArr = [];
    idArr.forEach(async item=>{
      let topListData = await request('/playlist/detail',{id:item})
      // splice(会修改原数组，可以对指定的数组进行增删改) slice(不会修改原数组)
      let topListItem = {
        name: topListData.playlist.name,
        tracks: topListData.playlist.tracks.slice(0, 3)
      };
      resultArr.push(topListItem);
      // 不需要等待请求全部结束才更新，用户体验较好，但是渲染次数会多一些
      this.setData({
        topList: resultArr
      })
    })
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  roRecommend(){
    wx.navigateTo({
      url: '/pages/recommend/recommend',
    })
  }
})