<template>
  <div class="indexContainer">
    <img class="index_img" src="../../../static/images/index/cart.jpg" alt="">
    <p class="userName">Hello mpvue</p>
    <div class="goStudy">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
}
</script>

<style>
  page{
    background-color: #8ed415;
  }

  .indexContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index_img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
  }
  .userName{
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }
  .goStudy{
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eee;
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
  }
</style>
