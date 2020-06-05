import ApiService from '@/common/ApiService'
export default {
    getInforUser (data) {
        return new Promise((resolve, reject) => {
            console.log(data)
            ApiService.post('/login', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    register (data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/register', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
