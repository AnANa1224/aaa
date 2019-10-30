import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import List from '../views/List.vue'
import Find from '../views/Find.vue'
import Infor from '../views/Infor.vue'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/infor',
    name: 'infor',
    component: Infor
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
