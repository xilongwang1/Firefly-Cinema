<template>
  <div id="app">
      
    <router-view/>
    <Footer v-show="$route.meta.footerShow"></Footer>
  </div>
</template>

<script>
// 引入公共组件
import Footer from '@/components/Footer'
export default {
  name: 'App',
  // 注册组件
  components: {
    Footer
  },
  data(){
    return{
      
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/style/common/common.scss";
  body,html {
    height: 100%;
    background-color: $baseBgColor;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  // color: #2c3e50;
  color: #fff;
  
}

</style>
