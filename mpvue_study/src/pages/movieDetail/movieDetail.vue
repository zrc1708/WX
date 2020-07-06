<template>
  <div class="movieDetailContainer">
    <img :src="movieDetail.images.large" alt="">
    <p class="movie_name">{{movieDetail.title}}</p>
    <div class="detail">
        <p class="movies_name">评分：{{movieDetail.rating.average}}</p>
        <p class="movies_year">导演：{{movieDetail.directors[0].name}}</p>
        <p class="movies_dir">主演：{{movieDetail.casts[0].name}}</p>
    </div>
    <button>我要观影</button>
  </div>
</template>

<script>
  const  MOVIE_URL = "https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a"

  import {mapState} from 'vuex'

  export default {
    data () {
      return {
          movieDetail:{}
      }
    },
    beforeMount(){
        this.movieDetail = this.moviesArr[this.$mp.query.index]
        console.log(this.movieDetail)
    },
    mounted(){
        
    },
    computed:{
        ...mapState(['moviesArr'])
    },
    methods:{
        
    }
  }
</script>
<style>
  
</style>
