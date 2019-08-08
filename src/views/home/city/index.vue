<template>
  <div class="city-main">
    <!-- 百度地图容器 -->
    <div id="allmap"></div>
    <BaseLayer ref="baselayer">
      <template v-slot:header>
        <div class="nav">
          <span class="close" @click="$router.back()">关闭</span>
          <p class="title">选择城市</p>
          <p class="clear"></p>
        </div>
      </template>
      <template v-slot:default>
        <div class="container">
          <!-- 搜索城市 -->
          <div class="citys-search">
            <div class="search">
              <span class="icon-search"></span>
              <input type="search" placeholder="输入城市" />
              <span class="clear"></span>
            </div>
            <span class="cancel">取消</span>
          </div>
          <div class="air"></div>
          <div class="citys-position">
            <span>城市定位</span>
            <div class="current-city" >{{ currentCity }}</div>
          </div>

          <!-- 生成基于首字母的块 -->
          <div class="citys-block" v-for="(citys,key) in cityData" :key="key">
            <p class="title" :class="'title-'+key">{{ key }}</p>
            <ul class="city-list">
              <li v-for="item in citys" :key="item.id">{{ item.name }}</li>
            </ul>
          </div>
        </div>
      </template>
    </BaseLayer>
    <!-- 右侧字母及遮盖层 -->
    <ul class="city-nav" v-touch>
      <li class="cha-item" v-for="cha in cityChars" :key="cha">{{ cha }}</li>
    </ul>
    <div class="fiexd-char" v-if="currentChar">{{ currentChar }}</div>
  </div>
</template>

<script>
import cityData from "@/assets/data/cityData.json";
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "city",
  components: {
    BaseLayer
  },
  data() {
    return {
      // 城市数据
      cityData,
      // A~Z 
      cityChars: [],
      // 滑动当前字母
      currentChar: "",
      // 当前城市
      currentCity: "蛋糕和第三个",
    };
  },
  // 事件
  methods: {
    // 初始化字母
    initCityChars() {
      for (var i = 65; i <= 90; i++) {
        // 把 Ascll ==> 字母
        var cha = String.fromCharCode(i);
        this.cityChars.push(cha);
      }
    }
  },
  directives: {
    // 滑动指令

    touch(el, binding, vnode) {
      // 通过vnode获取 当前页面的 vue 的实例对象
      var vm = vnode.context; //当前节点编译作用域
      function updateVm(endY, baseTop, baseHeight, vm) {
        // 需要计算当前位置的比例
        var bl = (endY - baseTop) / baseHeight;
        // 元素下标
        var index = Math.floor(bl * vm.cityChars.length);
        // 修正
        if (index > 25) {
          index = 25;
        }
        if (index < 0) {
          index = 0;
        }
        console.log(index);

        // 设置 vm 当前字符
        vm.currentChar = vm.cityChars[index];
        // 根据dom的选择器 滚动到特定位置
        var dom = document.querySelector(
          ".citys-block .title-" + vm.currentChar
        );

        // 因为 字母动态生成 会有延迟 重新获取
        if (dom) {
          vm.$refs.baselayer.$BScroll.scrollToElement(
            dom,
            400,
            0,
            -100,
            "easing"
          );
        }
      }
      el.ontouchstart = function(e) {
        e.preventDefault();
        var tou = e.touches[0];
        // 元素距离顶部的距离
        var baseTop = this.offsetTop;
        // 元素高度
        var baseHeight = this.offsetHeight;
        // 初始位置
        var startY = tou.clientY;
        // 默认初始位置不变
        var endY = startY;

        updateVm(endY, baseTop, baseHeight, vm);

        el.ontouchmove = function(e) {
          // 获取第一点
          var tou = e.touches[0];
          // 更新endY
          endY = tou.clientY;
          updateVm(endY, baseTop, baseHeight, vm);
        };
        el.ontouchend = function() {
          el.ontouchmove = null;
          vm.currentChar = "";
        };
      };
    }
  },
  // 生命周期
  created() {
    this.initCityChars();
  },
  mounted() {
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);

    var geolocation = new BMap.Geolocation();
    var geoc = new BMap.Geocoder();
    var _this = this;
    geolocation.getCurrentPosition(
      function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          // map.addOverlay(mk);
          // map.panTo(r.point);
          // 获取坐标
          // alert("您的位置：" + r.point.lng + "," + r.point.lat);

          // var pt = e.point;
          geoc.getLocation(r.point, function(rs) {
            var addComp = rs.addressComponents;
            // alert(
            //   addComp.province +
            //     ", " +
            //     addComp.city +
            //     ", " +
            //     addComp.district +
            //     ", " +
            //     addComp.street +
            //     ", " +
            //     addComp.streetNumber
            // );
            
            _this.currentCity = addComp.city;
          });
        } else {
          alert("failed" + this.getStatus());
        }
      },
      { enableHighAccuracy: true }
    );
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";

.city-main {
  height: 100%;
  padding: $basePadding;
  // 头部
  .nav {
    width: 375px;
    height: 40px;
    display: flex;
    padding-left: 20px;
    justify-content: space-between;
    .close {
      height: 40px;
      line-height: 40px;
      color: #f7f7f7;
      font-size: 16px;
    }
    .title {
      height: 40px;
      line-height: 40px;
      color: #f5f5f5;
      font-size: 18px;
    }
    .clear {
      height: 40px;
      width: 40px;
    }
  }
  // a~z 城市
  .container {
    width: 100%;
    box-sizing: border-box;
    padding-top: 40px;
    // 搜索城市
    .citys-search {
      display: flex;
      justify-content: space-between;
      .search {
        width: 298px;
        height: 36px;
        border-radius: 18px;
        background-color: #33363d;
        display: flex;
        justify-content: space-around;
        .icon-search {
          display: block;
          width: 20px;
          height: 36px;
          background: url(../../../assets/imgs/home/search.png) no-repeat center;
          background-size: 17px 17px;
        }
        input {
          width: 210px;
          height: 36px;
          background-color: #33363d;
          border: 1px solid #33363d;
        }
        .clear {
          display: block;
          width: 20px;
          height: 36px;
        }
      }
      .cancel {
        width: 36px;
        height: 36px;
        line-height: 36px;
      }
    }
    .air {
      margin: 14px auto;
    }
    // 定位城市
    .citys-position {
      width: 100px;
      height: 40px;
      .current-city {
        height: 20px;
      }
    }
    .citys-block {
      width: 100%;
      font-size: 14px;
      color: #f7f7f7;
      line-height: 40px;
      text-align: left;
    }
  }
  // 右侧 A~Z
  .city-nav {
    position: fixed;
    right: 20px;
    color: #828282;
    top: 120px;
    border: 1px solid red;
    .cha-item {
      padding: 2px 4px;
    }
  }
  .fiexd-char {
    position: fixed;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    font-size: 20px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
}
</style>