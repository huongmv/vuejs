import Vue from 'vue'
import VueRouter from 'vue-router'
import routesClient from './client'
import routesAdmin from './admin'

Vue.use(VueRouter)

let routes = []
const host = window.location.hostname
const DOMAIN_ADMIN = process.env.VUE_APP_DOMAIN_ADMIN
const DOMAIN_CLIENT = process.env.VUE_APP_DOMAIN_CLIENT
if (host === DOMAIN_ADMIN) {
    routes = routesAdmin
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
        let data = localStorage.getItem('adminLogin')
        if (data === 'true') {
            next()
            return
        } else {
            next('/')
        }
    } else {
        next()
    }
})
export default router
