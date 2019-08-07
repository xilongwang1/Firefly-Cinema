import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/movie',
      name: 'movie',
      // route level code-splitting
      // this generates a separate chunk (movie.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "movie" */ '../views/movie/index.vue')
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import(/* webpackChunkName: "ticket" */ '../views/ticket/index.vue')
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: () => import(/* webpackChunkName: "cinema" */ '../views/cinema/index.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "mine" */ '../views/mine/index.vue')
    },

  ]
})
