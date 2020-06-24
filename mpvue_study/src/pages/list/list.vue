<template>
  <div class="listContainer">
    <swiper indicator-dots indicator-color="pink" indicator-active-color="green" autoplay>
      <swiper-item>
        <img src="../../../static/images/detail/carousel/01.jpg">
      </swiper-item>
      <swiper-item>
        <img src="../../../static/images/detail/carousel/02.jpg">
      </swiper-item>
      <swiper-item>
        <img src="../../../static/images/detail/carousel/03.jpg">
      </swiper-item>
      <swiper-item>
        <img src="../../../static/images/detail/carousel/04.jpg">
      </swiper-item>
    </swiper>
    <div>
      <ListTmp :item="item" :index="index" v-for="(item,index) in listTmp" :key="index"/>
    </div>
  </div>
</template>

<script>
  import ListTmp from '../list_template/list_template.vue'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
      }
    },
    beforeMount(){
      // 分发action修改状态
      this.$store.dispatch('getList')
    },
    computed:{
      // 映射状态到本组件
      ...mapState(['listTmp'])
    },
    methods:{
      
    },
    components:{
      ListTmp
    }
  }
</script>
<style>
  .listContainer swiper{
    width: 100%;
    height: 400rpx;
  }
  .listContainer swiper img{
    width: 100%;
    height: 100%;
  }
</style>
