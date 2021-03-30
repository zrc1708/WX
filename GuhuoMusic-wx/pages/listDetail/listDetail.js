// pages/listDetail/listDetail.js
Page({

  data: {
    listId:'',
    backColor:'',
    title:'',
    imgUrl:'',
    creater:'',
    description:''
  },

  onLoad: function (options) {
    this.data.listId = options.id
    this.getColor(this.data.listId)
    this.getMudic(this.data.listId)
  },
  // 根据歌单id获取背景色
  getColor(id){
    let backColor = '#ff4a37'
    if(id=='19723756'){
        backColor = '#5d92d6'
    }else if(id=='3779629'){
        backColor = '#4ebabf'
    }else if(id=='2884035'){
        backColor = '#ca4f72'
    }else if(id=='3778678'){
        backColor = '#b65e4c'
    }
    this.setData({
      backColor
    })
    wx.setNavigationBarColor({
      backgroundColor: backColor,
      frontColor:'#ffffff'
    })
  },
  // 根据歌单id获取歌单详情
  getMudic: function(id) {
    wx.request({
      url: `http://www.jibei66.com:3000/playlist/detail?id=${id}`,
      success:(res)=> {
        const arr = []
        for (let i = 0; i < res.data.privileges.length; i++) {
          arr.push(res.data.privileges[i].id)
        }
        this.setData({
          imgUrl: res.data.playlist.coverImgUrl,
          title: res.data.playlist.name,
          creater:{
            avatarUrl:res.data.playlist.creator.avatarUrl,
            nickname: res.data.playlist.creator.nickname
          },
          description:res.data.playlist.description
        })
        this.getMusicDetail(arr)
      }
    })
  },
  // 获取音乐详情
  getMusicDetail:function(arr){
    const ids = arr.join(',')
    wx.request({
      url: `http://www.jibei66.com:3000/song/detail?ids=${ids}`,
      success:(res)=> {
        res.data.songs.forEach(item=>{
          item.author = item.ar.map(item=>item.name).join('/')
        })
        this.setData({
          musicList:res.data.songs
        })
      }
    })
  }
})