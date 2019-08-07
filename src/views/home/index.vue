<template>
  <div class="home-main">
    <!-- 头部 -->
    <div class="header">
      <div class="header-c">
        <!-- 定位 -->
        <div class="header-position">
          <div class="address">定位</div>
          <a href="javascript:;">
            <div class="to-bottom"></div>
          </a>
        </div>
        <!-- 搜索 -->
        <div class="header-search">
          <a href="javascript:;">
            <div class="search-icon"></div>
          </a>
          <input type="search" placeholder="搜影片、影院、影人" />
        </div>
        <div class="header-date">
          <a href="javascript:;"></a>
        </div>
      </div>
    </div>
    <!-- banner轮播 -->
    <div class="banner">
      <div class="banner-c">
        <swiper class="banner-swiper" :options="bannerOptions" ref="bannerSwiper">
          <!-- slides -->
          <swiper-slide v-for="item in bannerImgs" :key="item.id">
            <img class="img" :src="item.img" alt />
          </swiper-slide>
        </swiper>
        <div class="banner-pagination" slot="pagination"></div>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="container">
      <div class="container-c">
        <!-- 热映电影 -->
        <div class="wellReceived">
          <HomeTitle title="热映影片" more="全部"></HomeTitle>
          <swiper class="wr-swiper" :options="wrOptions" ref="wrSwiper"> -->
            <!-- slides -->
             <swiper-slide>
              <div class="wrMovie" v-for="item in wrImgs" :key="item.id">
                <a href="javascript:;"><img class="img" :src="item.img" alt /></a>
                <div class="wrMovieName">{{ item.name }}</div>
                <div class="getTicket">购票</div>
              </div>
            </swiper-slide>
           </swiper>
        </div>
        <!-- 即将上映电影 -->
        <div class="soonWr"></div>
        <!-- 精选预告 -->
        <div class="notice"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
//引入组件 注册组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 引入hometitle组件
import HomeTitle from "@/components/HomeTitle";

export default {
  name: "home",
  components: {
    swiper,
    swiperSlide,
    HomeTitle
  },
  data() {
    return {
      // banner图片
      bannerImgs: [
        {
          id: 1,
          img: require("@/assets/imgs/home/banner1.png")
        },
        {
          id: 2,
          img: require("@/assets/imgs/home/banner2.png")
        },
        {
          id: 3,
          img: require("@/assets/imgs/home/banner3.png")
        }
      ],
      // 热映电影图片
      wrImgs: [
        {
          id: 1,
          name: "傲慢与偏见",
          img: require("@/assets/imgs/home/wr1.png")
        },
        {
          id: 2,
          name: "韩国电影 ",
          img: require("@/assets/imgs/home/wr2.png")
        },
        {
          id: 3,
          name: "帕丁顿熊 ",
          img: require("@/assets/imgs/home/wr3.png")
        },
        {
          id: 4,
          name: "帕丁顿熊 ",
          img: require("@/assets/imgs/home/wr4.png")
        },
      ],
      // banner的间隔设置
      bannerOptions: {
        // slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".banner-pagination"
        }
      }
    };
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
// 头部
.header {
  position: fixed;
  top: 5px;
  left: 0;
  position: relative;
  width: 100%;
  height: 36px;
  .header-c {
    width: 100%;
    height: 36px;
    .header-position {
      position: absolute;
      left: 0;
      width: 45px;
      height: 100%;
      color: #dfdfdf;
      .address {
        text-align: left;
        line-height: 36px;
        font-size: 14px;
      }
      .to-bottom {
        position: absolute;
        top: 17px;
        left: 32px;
        width: 12px;
        height: 6px;
        background: url(../../assets/imgs/home/to-bottom.png) no-repeat center;
        background-size: 100%;
      }
    }
    .header-search {
      position: absolute;
      left: 50px;
      width: 243px;
      height: 36px;
      border-radius: 18px;
      background-color: #33363d;
      line-height: 36px;
      // display: flex;
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
      a {
        text-decoration: none;
      }
      .search-icon {
        position: absolute;
        left: 12px;
        width: 17px;
        height: 17px;
        margin-top: 10px;
        background: url(../../assets/imgs/home/search.png) no-repeat center;
        background-size: 100%;
        // background-color: #7a7a7a;
      }
      input {
        position: absolute;
        left: 36px;
        margin: 0 auto;
        width: 180px;
        height: 100%;
        color: #fff;
        background-color: #33363d;
        border: 2px solid #33363d;
      }
    }
    .header-date {
      position: absolute;
      right: 1px;
      top: 8px;
      width: 18px;
      height: 19px;
      background: url(../../assets/imgs/home/date.png) no-repeat center;
      background-size: 100%;
    }
  }
}
// banner
.banner {
  width: 100%;
  height: 156px;
  margin-top: 12px;
  .banner-c {
    width: 100%;
    height: 100%;
    .banner-swiper {
      width: 100%;
      height: 145px;
      .img {
        width: 335px;
        height: 145px;
      }
    }
    .banner-pagination {
      ::v-deep.swiper-pagination-bullet {
        width: 4px;
        height: 4px;
        border-radius: 2px;
        margin: 0 7px;
        background-color: #fff;
        transition: all ease 0.4s;
        &.swiper-pagination-bullet-active {
          width: 14px;
          height: 3px;
        }
      }
    }
  }
}
// container --> 热映影片
.container {
  .container-c {
    .wellReceived {
      .wr-swiper {
        width: 90px;
        height: 172px;
        margin-top: 10px;
        .swiper-wrapper {

        }
      }
    }
  }
}
</style>
