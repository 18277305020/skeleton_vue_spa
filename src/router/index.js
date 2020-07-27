import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children:[
      {
        path: '/',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/suiyuewan',
        component: () => import('../views/Shuiyuewan.vue')
      },
      {
        path: '/team',
        component: () => import('../views/Team.vue')
      },
      {
        path: '/jionus',
        component: () => import('../views/JionUs.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
