import Vue from 'vue'
import VueRouter from 'vue-router'
import routesClient from './client'
import routesAdmin from './admin'
import VueCookies from 'vue-cookies'
import store from '@/store'

import { SET_OPEN_LOGIN_DIALOG } from '@/store/ActionStore'

Vue.use(VueRouter)
Vue.use(VueCookies)

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
    // let accesslogin = window.$cookies.isKey('user')
    // console.log(accesslogin)
    // if (accesslogin == false) {
    //     // user doesn't have access token, redirect to login
    //     next({ name: 'login' })
    // }
    // else {
    //     // user has access token, user can open the page
    //     next()
    // }
    if(to.matched.some(record => record.meta.requiresAuth)) {
        console.log(localStorage.getItem('alo123'))
        let data = localStorage.getItem('alo123')
        if (data === 'true') {
            next()
            return
        } else {
            next('/')
        }
    } else {
        next()
    }
    // router.options.routes.forEach((route) => {
    //     if (((to.matched[0].path === route.path || to.matched[0].path === '') && route.path === '/')) {
    //         if (window.$cookies.isKey('user')) {
    //             next()
    //         } else {
    //             next('/')
    //         }
    //     } else {
    //         next('/')
    //     }
    // })
})
export default router
