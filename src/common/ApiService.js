import axios from 'axios'
import utils from '../common/Utils'
// let user = this.$cookies.get('user2')
// let value = window.localStorage.getItem('id_token')
let value = utils.getLocalStorageToken('id_token')
// let token = ''
// if (user !== null) {
//     token = user.token
// }
// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000, // request timeout
    headers: {'Authorization': value }
})
console.log(value)
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
        // do something with request error
        return Promise.reject(error)
    }
)

// response interceptor
export default service
