<template>
  <div class="HomeTitle">
    <div class="title-bg"></div>
    <div class="ht-title">{{ title }}</div>
    <div class="ht-more">{{ more }}</div>
    <div class="to-right"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeTitle',
  props: {
    title: String,
    more: String
  },
  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
  .HomeTitle {
    position: relative;
    margin-top: 30px;
    width: 100%;
    height: 18px;
    .title-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 17px;
      background:linear-gradient(90deg,#F26182 0%,#F1A064 100%);
    }
    .ht-title {
      width: 72px;
      height: 18px;
      font-size: 18px;
      line-height: 18px;
      color: #DFDFDF;
      margin-left: 9px;
    }
    .ht-more {
      position: absolute;
      top: 0;
      right: 15px;
      font-size: 12px;
      color: #DFDFDF;
      width: 24px;
      height: 12px;
    }
    .to-right {
      position: absolute;
      right: 0;
      top: 4px;
      width: 10px;
      height: 10px;
      background: url(../assets/imgs/home/to-right.png) no-repeat center;
      background-size: 200%;
    }
  }
</style>
