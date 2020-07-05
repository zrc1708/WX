<template>
  <div class="detailContainer">
    <img class="detail_img" :src="detailObj.detail_img" alt="">
    <img @tap="handleMusicPlay" class="music_img" 
    :src="isMusicPlay?'/static/images/music/music-start.png':'/static/images/music/music-stop.png'" alt="">
    <div class="avatar_date">
        <img :src="detailObj.avatar" alt="">
        <span>{{detailObj.author}}</span>
        <span>发布于</span>
        <span>{{detailObj.date}}</span>
    </div>
    <p class="company">{{detailObj.title}}</p>
    <div class="collection_share_container">
        <div class="collection_share">
            <img @tap="handleCollection" :src="isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" alt="">
            <img @tap="handleShare" src="../../../static/images/icon/share-anti.png" alt="">
        </div>
        <div class="line"></div>
    </div>
    <Button open-type="share">转发此文章</Button>
    <p class="content">{{detailObj.detail_content}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
          detailObj:{},
          isCollected:false,
          isMusicPlay:true
      }
    },
    beforeMount(){
        this.index = this.$mp.query.index

        let oldStorage = wx.getStorageSync('isCollected')
        if(!oldStorage){
            // 为空
            wx.setStorage({
                key:'isCollected',
                data:{}
            })
        }else{
            // 用户缓存过
            this.isCollected = (oldStorage[this.index]?true :false)
        }

    },
    mounted(){
        this.detailObj = this.listTmp[this.index]

        // 设置背景音乐
        this.bgMusic = wx.getBackgroundAudioManager()
        let {dataUrl,title} = this.detailObj.music
        this.bgMusic.title = title
        this.bgMusic.src = dataUrl

        this.bgMusic.onPlay(()=>{
            this.isMusicPlay = true
        })
        this.bgMusic.onPause(()=>{
            this.isMusicPlay = false
        })
    },
    computed:{
        ...mapState(['listTmp'])
    },
    methods:{
        handleCollection(){
            let isCollected = !this.isCollected
            this.isCollected = isCollected
            let title = isCollected?"收藏成功":"取消收藏"
            wx.showToast({
                title,
                icon:'success'
            })

            // 读取之前本地缓存的状态查看是否收藏
            let oldStorage = wx.getStorageSync('isCollected')
            oldStorage[this.index] = isCollected
            // 将本次设置的结果再缓存到本地
            wx.setStorage({
                key:'isCollected',
                data:oldStorage
            })
        },
        handleMusicPlay(){
            let isMusicPlay = !this.isMusicPlay
            this.isMusicPlay = isMusicPlay


            if(isMusicPlay){
                this.bgMusic.play()
            }else{
                this.bgMusic.pause()
            }
        },
        handleShare(){
            wx.showActionSheet({
                itemList:[
                    "分享到朋友圈",
                    "分享到QQ",
                    "分享到微博"
                ]
            });
              
        }
    }
  }
</script>
<style>
  .detailContainer{
      display: flex;;
      flex-direction: column;
  }
  .detail_img{
      width: 100%;
      height: 460rpx;
  }
  .avatar_date{
      padding: 10rpx;
  }
  .avatar_date img{
      width: 64rpx;
      height: 64rpx;
      vertical-align: middle;
  }
  .avatar_date span{
      font-weight: 28rpx;
      margin-left: 6rpx;
  }
  .company{
      font-size: 32rpx;
      font-weight: bold;
      padding: 10rpx;
  }
  .collection_share_container{
      position: relative;
  }
  .collection_share{
      float: right;
      margin-right: 30rpx;
  }
  .collection_share img{
      width: 90rpx;
      height: 90rpx;
      margin-right: 20rpx;
  }
  .line{
      position: absolute;
      top: 45rpx;
      left: 5%;
      width: 90%;
      height: 1rpx;
      background-color: #eee;
      z-index: -1;
  }
  .content{
      font-size: 32rpx;
      text-indent: 32rpx;
      letter-spacing: 3rpx;
      line-height: 50rpx;
  }
  .music_img{
      width: 60rpx;
      height: 60rpx;
      position: absolute;
      left: 50%;
      margin-left: -30rpx;
      top: 200rpx;
  }
</style>
