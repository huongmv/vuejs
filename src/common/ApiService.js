import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import route from '../router/index'
import VueCookies from 'vue-cookies'
// create service
const service = {
    init () {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_API
        if (VueCookies.get('user2') !== null) {
            Vue.axios.defaults.headers.common['Authorization'] = VueCookies.get('user2').token
        }
        Vue.axios.interceptors.response.use((response) => {
            return response
        }, (error) => {
            // if (error.response.status >= 400) {
            //     delete axios.defaults.headers.common['Authorization']   
            // }
            // const host = window.location.hostname
            // const DOMAIN_ADMIN = process.env.VUE_APP_DOMAIN_ADMIN
            // if (host === DOMAIN_ADMIN) {
            //     route.push({ name: 'login' })
            // } else {
            //     route.push({ name: 'home' })
            // }
            // remove expired Authorization token from request header
            // delete axios.defaults.headers.common['Authorization']   
            console.log('error API' + error) 
            // this.$route.push({ name: 'login' })
            // route.push({ name: 'login' })
            // utils.apiError()
        })
    },
    setHeader (token) {
        Vue.axios.defaults.headers.common['Authorization'] = token
    },
    get (resource, params) {
      return Vue.axios.get(resource, params).catch(error => {
        throw error
      })
    },
    post (resource, params) {
      return Vue.axios.post(`${resource}`, params)
    }
}
// response interceptor
export default service
/**
import axios from 'axios'
import utils from '../common/Utils'
import VueCookies from 'vue-cookies'
let user = VueCookies.get('user2')
console.log('111111111111111111')
// console.log(user.token)
let value = null
if (user !== null) {
    value = user.token
}
console.log(value)
// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000, // request timeout
    headers: {
        'Authorization': value
    }
})
if (value === '' || value === null || value === undefined) {
    console.log('delete')
    delete service.defaults.headers.common['Authorization']
}

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent

        // if (store.getters.token) {
        //     // let each request carry token
        //     // ['X-Token'] is a custom headers key
        //     // please modify it according to the actual situation
        //     config.headers['X-Token'] = getToken()
        // }
        return config
    },
    error => {
        console.log('error API')
        // do something with request error
        return Promise.reject(error)
    }
)
// response interceptor
export default service
*/