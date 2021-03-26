// template/musiclist-media/musiclist-media.js
Component({

  properties: {
    musicListId:{
      type:Number||String
    },
    musicLisText:{
      type:String,
      value:'刚刚更新'
    }
  },

  data: {
    Name:'',
    imgUrl:'',
    musicList:[],
    author:''
  },

  lifetimes:{
    
  },

  observers: {
    'musicListId': function() {
        const {musicListId} = this.data
        this.getMudic(musicListId)
    }
  },

  methods: {
    getMudic: function(id) {
      wx.request({
        url: `http://www.jibei66.com:3000/playlist/detail?id=${id}`,
        success:(res)=> {
          const arr = []
          for (let i = 0; i < 3; i++) {
            arr.push(res.data.privileges[i].id)
          }
          this.setData({
            imgUrl: res.data.playlist.coverImgUrl,
            title: res.data.playlist.name
          })
          this.getMusicDetail(arr)
        }
      })
    },
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
  }
})