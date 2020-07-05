<template>
  <div>
    <div class="moviesContainer" v-for="(item, index) in moviesArr" :key="index">
        <img class="movies_img" :src="item.images.large" alt="">
        <div class="movies_info">
            <p class="movies_name">{{item.title}}</p>
            <p class="movies_year">年份：{{item.year}}</p>
            <p class="movies_dir">导演：{{item.directors[0].name}}</p>
        </div>
        <p class="movies_rating">{{item.rating.average}}</p>
    </div>
  </div>
</template>

<script>
  const  MOVIE_URL = "https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a"

  export default {
    data () {
      return {
          moviesArr:[]
      }
    },
    beforeMount(){
       this.$fly.get(MOVIE_URL)
        .then(response => {
            let moviesArr = response.data.subjects
            this.moviesArr = moviesArr
            console.log(moviesArr)
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    mounted(){
        
    },
    computed:{
     
    },
    methods:{
        
    }
  }
</script>
<style>
  .moviesContainer{
      display: flex;
      padding: 10rpx;
  }
  .movies_img{
      width: 128rpx;
      height: 128rpx;
      margin-right: 20rpx;
  }
  .movies_info{
      width: 70%;
  }
  .movies_name{
      font-size: 32rpx;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .movies_year{
      font-size: 28rpx;
      color: #999;
      margin: 5rpx 0;
  }
  .movies_dir{
      font-size: 30rpx;
      color: #666;
  }
  .movies_rating{
      color: red;
      font-weight: bold;
      font-size: 40rpx;
  }
</style>
