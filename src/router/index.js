import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home.vue'
import login from '@/pages/login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
