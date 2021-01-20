import request from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [], // 导航标签数据
    navId: '', // 导航的标识
    videoList: [], // 视频列表数据
    videoId: '', // 视频id标识
    videoUpdateTime: [], // 记录video播放的时长
    isTriggered: false, // 标识下拉刷新是否被触发
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取导航数据
    this.getVideoGroupListData();
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  // 获取导航数据
  async getVideoGroupListData(){
    let videoGroupListData = await request('/video/group/list');
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    // 获取视频列表数据
    this.getVideoList(this.data.navId);
  },
  changeNav(event){
    let navId = event.currentTarget.dataset.id
    this.setData({
      navId,
      videoList: []
    })
    wx.showLoading({
      title: '正在加载',
    })
    // 获取视频列表数据
    this.getVideoList(this.data.navId);
  },
  // 获取视频列表数据
  async getVideoList(navId){
    if(!navId){ // 判断navId为空串的情况
      return;
    }
    let videoListData = await request('/video/group', {id: navId});
    // 关闭消息提示框
    wx.hideLoading();
    let index = 0;
    let videoList = videoListData.datas.map(item => {
      item.id = index++;
      return item;
    })
    this.setData({
      videoList,
      isTriggered: false // 关闭下拉刷新
    })

    // 获取视屏地址
    let arr = this.data.videoList
    for (let i = 0; i < 8; i++) {
      let vid = arr[i].data.vid
      let res = await request('/video/url', {id: vid});
      let url = res.urls[0].url
      arr[i].data.urlInfo = {url}
    }
    this.setData({
      videoList:arr
    })
    
  },
  // 点击播放、继续播放
  async handlePlay(event){
    let nowTime = new Date().getTime()
    if(nowTime-(this.lastTime||0)>200){
      let vid = event.currentTarget.id;
      
      this.vid && this.vid != vid && this.videoContext && this.videoContext.stop();

      this.setData({
        videoId:vid
      })
      this.videoContext = wx.createVideoContext(vid)
      this.videoContext.play()
      this.vid = vid;
    }
    this.lastTime = new Date().getTime()
  }
})