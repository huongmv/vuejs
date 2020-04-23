import Vue from 'vue'
import VueRouter from 'vue-router'
import routesClient from './client'
import routesAdmin from './admin'
Vue.use(VueRouter)

  const routes = [
      routesClient,
      routesAdmin
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
