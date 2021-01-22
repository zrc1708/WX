import request from '../../utils/request'
import PubSub from 'pubsub-js'
import moment from 'moment'

const appInstance = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, // 音乐是否播放
    song: {}, // 歌曲详情对象
    musicId: '', // 音乐id
    musicLink: '', // 音乐的链接
    currentTime: '00:00',  // 实时时间
    durationTime: '00:00', // 总时长
    currentWidth: 0, // 实时进度条的宽度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let musicId = options.id
    // let musicId = 4998139
    this.setData({
      musicId
    })
    // 获取音乐详情
    this.getMusicInfo(musicId);
    // 判断当前页面音乐是否在播放
    if(appInstance.globalData.isMusicPlay && appInstance.globalData.musicId === musicId){
      this.setData({
        isPlay: true
      })
    }

    this.backgroundAudioManger = wx.getBackgroundAudioManager()
    this.backgroundAudioManger.onPlay(()=>{
      this.changePlayState(true)
      appInstance.globalData.musicId = musicId;
    })
    this.backgroundAudioManger.onPause(()=>{
      this.changePlayState(false)
    })
    this.backgroundAudioManger.onStop(()=>{
      this.changePlayState(false)
    })
    this.backgroundAudioManger.onTimeUpdate(()=>{
      // 格式化实时的播放时间
      let currentTime = moment(this.backgroundAudioManger.currentTime * 1000).format('mm:ss')
      let currentWidth = this.backgroundAudioManger.currentTime/this.backgroundAudioManger.duration * 450;
      this.setData({
        currentTime,
        currentWidth
      })
    })
  },
  // 修改播放状态
  changePlayState(isPlay){
    // 修改音乐是否的状态
    this.setData({
      isPlay
    })
    // 修改全局音乐播放的状态
    appInstance.globalData.isMusicPlay = isPlay;
  },

  // 点击播放、暂停键
  handleMusicPlay(){
    let isPlay = !this.data.isPlay
    // this.setData({
    //   isPlay
    // })
    this.musicControl(isPlay,this.data.musicId,this.data.musicLink)
  },

  // 控制音乐播放
  async musicControl(isPlay, musicId, musicLink){
    if(isPlay){
      if(!musicLink){
        let musicLinkData = await request('/song/url', {id: musicId});
        musicLink = musicLinkData.data[0].url;
        this.setData({
          musicLink
        })
      }
      this.backgroundAudioManger.src = musicLink
      this.backgroundAudioManger.title = this.data.song.name
    }else{
      this.backgroundAudioManger.pause()
    }
  },

  // 获取音乐详情的功能函数
  async getMusicInfo(musicId){
    let songData = await request('/song/detail', {ids: musicId});
    
    let durationTime = moment(songData.songs[0].dt).format('mm:ss');
    this.setData({
      song: songData.songs[0],
      durationTime
    })
    // 动态修改窗口标题
    wx.setNavigationBarTitle({
      title: this.data.song.name
    })
  },

  // 音乐切换 
  handleSwitch(event){
    let type = event.currentTarget.id;
    // 关闭当前播放的音乐
    this.backgroundAudioManger.stop();
    // 订阅来自recommendSong页面发布的musicId消息
    PubSub.subscribe('musicId', (msg, musicId) => {      
      // 获取音乐详情信息
      this.getMusicInfo(musicId);
      // 自动播放当前的音乐
      this.musicControl(true, musicId);
      // 取消订阅
      PubSub.unsubscribe('musicId');
    })
    // 发布消息数据给recommendSong页面
    PubSub.publish('switchType',type)
  }
})