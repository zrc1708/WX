import http from '../../utils/http'
import moment from 'moment'

Page({

  data: {
    musicId:'1833024922',
    musicUrl:'',
    musicObj:'',
    isPlay:false,
    backgroundStyle:''
  },

  onLoad: function (options) {
    this.getMusic(this.data.musicId).then(()=>{
      this.playMusic()
      this.lrcChange()
    })
  },

  // 获取歌曲的基本信息
  getMusic: async function(musicId) {
    return new Promise(async resolve=>{
      // 先检查歌曲是否有版权
      const res = await http(`/check/music?id=${musicId}`)
      if(!res.success){
        return  wx.showToast({
          title: '亲爱的暂无版权',
          icon:'error'
        })
      }
      // 获取歌曲地址
      const res1 = await http(`/song/url?id=${musicId}`)
      // // 获取歌词
      const res2 = await http(`/lyric?id=${musicId}`)
      // // 获取歌曲详情
      const res3 = await http(`/song/detail?ids=${musicId}`)
      res3.songs[0].al.picUrl+='?param=130y130'
      res3.songs[0].lastTime = moment(res3.songs[0].dt).format('mm:ss')
      this.setData({
        musicUrl:res1.data[0],
        musicObj:res3.songs[0],
        musicLrc:res2.lrc,
        backgroundStyle: `url(${res3.songs[0].al.picUrl})`
      })
      resolve()
    })
  },
  // 播放歌曲
  playMusic: function(){
    this.backgroundAudioManger = wx.getBackgroundAudioManager()
    this.backgroundAudioManger.src = this.data.musicUrl.url
    this.backgroundAudioManger.title = this.data.musicObj.name
    this.backgroundAudioManger.onPause(()=>{
      this.iconClick(false)
    })
    this.backgroundAudioManger.onPlay(()=>{
      this.iconClick(true)
    })
    this.backgroundAudioManger.onEnded(()=>{
      this.iconClick(false)
    })
    this.setData({
      isPlay:true,
      animatepause:false
    })
  },
  // 控制按钮点击事件
  iconClick(flag){
    if(flag===this.data.isPlay){
      return
    }
    const isPlay = !this.data.isPlay
    if(isPlay){
      this.backgroundAudioManger.play()
    }else{
      this.backgroundAudioManger.pause()
    }
    this.setData({
      isPlay,
    })
  },
  // 歌词格式化
  lrcChange(){
    const arr = this.data.musicLrc.lyric.split('\n')
    const ans = []
    let index = 0
    arr.forEach(item =>{
      const time = item.match(/\[([^)]*)\]/,'')
      const world = item.replace(/^\[\S*\]/,'')
      let arr = []
      let second = 0
      if(time){
        arr = time[1].split(':')
        if(arr.length==2){
          second = Number(arr[0])*60+Number(arr[1])
        }else if(arr.length==3){
          second = Number(arr[0])*60*60+Number(arr[1])*60+Number(arr[2])
        }
      }
      if(time) {
        ans.push({
          index:index++,
          time:time[1],
          second,
          world
        })
      }
    })
    // return ans
    console.log(ans)
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
})