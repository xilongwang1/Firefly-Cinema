<template>
  <div class="home-main">
    <BaseLayer>
      <template v-slot:header>
        <!-- 头部 -->
        <div class="header">
          <div class="header-c">
            <!-- 定位 -->
            <router-link class="header-position" to="/home/city" tag="span">
              <div class="address">定位</div>
              <a href="javascript:;">
                <div class="to-bottom"></div>
              </a>
            </router-link>
            <!-- 搜索 -->
            <div class="header-search">
              <a href="javascript:;">
                <div class="search-icon"></div>
              </a>
              <input type="search" placeholder="搜影片、影院、影人" />
              <div></div>
            </div>
            <div class="header-date">
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </template>
      <!-- 默认插槽 -->
      <template v-slot:default>
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
              <swiper class="wr-swiper" :options="wrOptions" ref="wrSwiper">
                <!-- slides -->
                <swiper-slide class="swiper-slide">
                  <div class="wrMovie" v-for="item in wrImgs" :key="item.id">
                    <a href="javascript:;">
                      <img class="img" :src="item.img" alt />
                    </a>
                    <div class="wrMovieName">{{ item.name }}</div>
                    <div class="getTicket">购票</div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <!-- 即将上映电影 -->
            <div class="soonWr">
              <HomeTitle title="即将上映" more="全部"></HomeTitle>
              <swiper class="soonWr-swiper" :options="soonWrOptions" ref="soonWrSwiper">
                <!-- slides -->
                <swiper-slide class="swiper-slide">
                  <div class="soonMovie" v-for="item in soonWrImgs" :key="item.id">
                    <a href="javascript:;">
                      <img class="img" :src="item.img" alt="sorry" />
                    </a>
                    <div class="soonWrMovieName">{{ item.name }}</div>
                    <div class="time">{{ item.time }}</div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <!-- 精选预告 -->
            <div class="notice">
              <HomeTitle title="精选预告" more="更多"></HomeTitle>
              <swiper class="notice-swiper" :options="noticeOptions" ref="noticeSwiper">
                <!-- slides -->
                <swiper-slide class="swiper-slide" v-for="item in noticeImgs" :key="item.id">
                  <div class="noticeMovie" >
                    <a href="javascript:;">
                      <img class="img" :src="item.img" alt="sorry" />
                    </a>
                    <div class="noticeIntroduce">{{ item.introduce }}</div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
//引入组件 注册组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
// 引入hometitle组件
import HomeTitle from "@/components/HomeTitle";
import BaseLayer from "@/components/BaseLayer";

export default {
  name: "home",
  components: {
    swiper,
    swiperSlide,
    HomeTitle,
    BaseLayer
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
        }
      ],
      // 即将上映电影图片
      soonWrImgs: [
        {
          id: 1,
          name: "My bluebery…",
          time: "1月5日",
          img: require("@/assets/imgs/home/soon1.png")
        },
        {
          id: 2,
          name: "THE WORLD…",
          time: "1月13日",
          img: require("@/assets/imgs/home/soon2.png")
        },
        {
          id: 3,
          name: "BABBIT HOLE",
          time: "1月30日",
          img: require("@/assets/imgs/home/soon3.png")
        }
      ],
      // 精选预告
      noticeImgs: [
        {
          id: 1,
          introduce: "《大护法》是一部能够体现反专制、反乌托邦式的寓言动 画… ",
          img: require("@/assets/imgs/home/banner3.png")
        },
        {
          id: 2,
          introduce: "《大护法》是一部能够体现反专制、反乌托邦式的寓言动 画… ",
          img: require("@/assets/imgs/home/notice2.png")
        }
      ],
      // banner的间隔设置
      bannerOptions: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        slidesOffsetBefore: -5,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".banner-pagination"
        }
      },
      // 热映影片 间隔设置
      wrOptions: {
        slidesPerView: 1.2,
        slidesOffsetBefore: -50,
        slidesOffsetAfter: -50,
        // centeredSlides: true,
        pagination: {
          el: ".wr-pagination"
        }
      },
      // 即将上映电影 间隔设置
      soonWrOptions: {},
      // 精选预告
      noticeOptions: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      }
    };
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";

.home-main {
  padding-top: 44px;
  height: 100%;
  padding-bottom: 143px;
  // 头部
  .header {
    position: fixed;
    top: 5px;
    left: 0;
    position: relative;
    width: auto;
    height: 36px;
    margin: 5px auto;
    padding: $basePadding;
    .header-c {
      width: 100%;
      height: 36px;
      display: flex;
      justify-content: space-between;
      .header-position {
        width: 45px;
        height: 100%;
        color: #dfdfdf;
        .address {
          text-align: left;
          line-height: 36px;
          font-size: 12px;
        }
        a {
          text-decoration: none;
          position: absolute;
          top: 0px;
          left: 48px;
          display: block;
          width: 20px;
          height: 36px;
        }
        .to-bottom {
          width: 12px;
          height: 6px;
          margin: 0 auto;
          margin-top: 17px;
          background: url(../../assets/imgs/home/to-bottom.png) no-repeat center;
          background-size: 100%;
        }
      }
      .header-search {
        width: 243px;
        height: 36px;
        border-radius: 18px;
        background-color: #33363d;
        line-height: 36px;
        display: flex;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
        a {
          display: block;
          width: 30px;
          height: 36px;
          text-decoration: none;
          .search-icon {
            width: 17px;
            margin: 0 auto;
            height: 17px;
            margin-top: 10px;
            background: url(../../assets/imgs/home/search.png) no-repeat center;
            background-size: 100%;
          }
        }
        input {
          width: 180px;
          height: 100%;
          color: #fff;
          background-color: #33363d;
          border: 2px solid #33363d;
        }
      }
      .header-date {
        width: 30px;
        height: 36px;

        a {
          display: block;
          width: 18px;
          height: 19px;
          margin: auto;
          margin-top: 8px;
          background: url(../../assets/imgs/home/date.png) no-repeat center;
          background-size: 100%;
        }
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
        margin: 0 10px;
        .img {
          // width: 335px;
          // height: 145px;
          width: 100%;
          height: 100%;
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
  // container
  .container {
    .container-c {
      // 公共padding
      padding: $basePadding;
      // 热映影片
      .wellReceived {
        .wr-swiper {
          width: 100%;
          height: 172px;
          margin-top: 10px;
          padding-right: 20px;
          .swiper-slide {
            display: flex;
            justify-content: space-between;
            .wrMovie {
              width: 90px;
              height: 172px;
              margin-left: 15px;
              &:nth-child(1) {
                margin-left: 0;
              }
              // 图片
              a {
                display: block;
                width: 90px;
                height: 122px;
                box-sizing: border-box;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              // 电影名
              .wrMovieName {
                width: 90px;
                height: 14px;
                text-align: left;
                line-height: 14px;
                font-size: 12px;
                color: #dfdfdf;
                margin-top: 9px;
              }
              // 购票
              .getTicket {
                margin-top: 5px;
                width: 50px;
                height: 22px;
                color: #dfdfdf;
                line-height: 22px;
                font-size: 12px;
                background: linear-gradient(150deg, #f25b86 0%, #f1ac5e 100%);
                box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
                border-radius: 11px;
              }
            }
          }
        }
      }
      // 即将上映电影
      .soonWr {
        .soonWr-swiper {
          width: 100%;
          height: 206px;
          margin-top: 10px;
          padding-right: 20px;
          .swiper-slide {
            display: flex;
            justify-content: space-between;
            .soonMovie {
              width: 120px;
              height: 206px;
              margin-left: 15px;
              &:nth-child(1) {
                margin-left: 0;
              }
              // 图片
              a {
                display: block;
                width: 120px;
                height: 162px;
                // box-sizing: border-box;
                img {
                  width: 120px;
                  height: 162px;
                }
              }
              // 电影名
              .soonWrMovieName {
                width: 120px;
                height: 20px;
                margin-top: 6px;
                color: #dfdfdf;
                font-size: 14px;
                text-align: left;
              }
              // 上映时间
              .time {
                width: 120px;
                height: 17px;
                color: #5b5d62;
                text-align: left;
              }
            }
          }
        }
      }
      // 精选预告
      .notice {
        .notice-swiper {
          width: 100%;
          height: 206px;
          margin-top: 10px;
          padding-right: 20px;
          .swiper-slide {
            width: 295px;
            height: 206px;
            margin-left: 15px;
              &:nth-child(1) {
                margin-left: 0;
              }
            .noticeMovie {
              // 图片
              a {
                display: block;
                width: 295px;
                height: 160px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              // 介绍
              .noticeIntroduce {
                width: 295px;
                height: 36px;
                color: #dfdfdf;
                font-size: 12px;
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
