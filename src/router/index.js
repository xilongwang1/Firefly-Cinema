import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        footerShow: true
      }
    },
    // 电影页面
    {
      path: '/movie',
      name: 'movie',
      // route level code-splitting
      // this generates a separate chunk (movie.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "movie" */ '../views/movie/index.vue'),
      meta: {
        footerShow: true
      }
    },
    //电影票页面
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import(/* webpackChunkName: "ticket" */ '../views/ticket/index.vue'),
      meta: {
        footerShow: true
      }
    },
    // 影院页面
    {
      path: '/cinema',
      name: 'cinema',
      component: () => import(/* webpackChunkName: "cinema" */ '../views/cinema/index.vue'),
      meta: {
        footerShow: true
      }
    },
    // 个人详情页
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "mine" */ '../views/mine/index.vue'),
      meta: {
        footerShow: true
      }
    },
    // 定位城市页面
    {
      path: '/home/city',
      name: 'city',
      component: () => import(/* webpackChunkName: "mine" */ '../views/home/city/index.vue')
    },
    // 避免乱输网址 除了已经被配置过的路由 其余全部重定向到 /home
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
