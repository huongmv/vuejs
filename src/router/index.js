import Vue from 'vue'
import VueRouter from 'vue-router'
import routesClient from './client'
import routesAdmin from './admin'
import store from '@/store/index'
Vue.use(VueRouter)

let routes = []
const host = window.location.hostname
const DOMAIN_ADMIN = process.env.VUE_APP_DOMAIN_ADMIN
const DOMAIN_CLIENT = process.env.VUE_APP_DOMAIN_CLIENT
if (host === DOMAIN_ADMIN) {
    routes = [
        routesAdmin
    ]
} else if (host === DOMAIN_CLIENT) {
    routes = [
        routesClient
    ]
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        console.log('requiresAuth')
        next('/login')
    } else {
        console.log('Not requiresAuth')
        next()
    }
})
export default router
