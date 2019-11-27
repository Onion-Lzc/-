<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="../../image/1.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../image/2.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../image/3.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../image/4.jpg" alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "../../image/1.jpg",
        "../../image/2.jpg",
        "../../image/3.jpg",
        "../../image/4.jpg"
      ]
    };
  },
  methods: {
    // getLunbotu() {
    //   this.$http.get("https://www.apiopen.top/meituApi").then(result => {
    //     for (let key in result.body.data) {
    //       /7xi8d6/.test(result.body.data[key]["url"])
    //         ? null
    //         : this.images.push(result.body.data[key]["url"]);
    //     }
    //   });
    // }
  },
  created() {
    // this.getLunbotu();
  }
};
</script>

<style lang="less" scoped>
.home {
  background-color: #fff;
  // height: 600px;
  .van-swipe__track {
    overflow: hidden;
    .van-swipe-item {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
  .mui-table-view {
    // height: 300px;
    background-color: #fff;
    .mui-table-view-cell {
      border: 0;
      img {
        width: 60px;
        height: 60px;
      }
      .mui-media-body {
        font-size: 13px;
      }
    }
  }
}
</style>