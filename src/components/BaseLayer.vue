<template>
    <!-- 创建一个通用布局 每个页面引用 只需要 在插槽填入内容即可 目的是 better-scroll创建的布局被通用 -->
  <div class="baselayer-main">
    <div class="header">
        <slot name="header"></slot>
    </div>
    <!-- 希望这里形成一个 better-scroll的容器 -->
    <div class="content" ref="wrapper">
        <div class="content-body">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'BaseLayer',

  data () {
    return {
    }
  },
  mounted() {
      // vue是双向响应的  逻辑=>数据=>视图  
    
    // 指令1 修改data v-if=show
    // 指令2 获取data对应的元素的dom 
    //     - 直接获取 可能数据还没来得及同步到dom,可能获取不到
    //     - 等待数据渲染完毕后获取  $nextTick() 
    //     - 或者 setTimeout(....,1) 
    // 希望页面完全被初始化之后 再进行better-scroll的处理
      this.$nextTick(() => {
          // 把 实例对象动态绑定到 vm
          this.$BScroll = new BScroll(this.$refs.wrapper, {});
      });
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.baselayer-main {
    height: 100%;
    .header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        // padding: 0 20px;
        height: 40px;
        z-index: 10;
        background-color: $baseBgColor;
    }
    .content {
      // padding-top: 40px;
      width: 100%;
      height: 100%;
    }
}
</style>
