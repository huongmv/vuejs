import ApiService from '@/common/ApiService'
export default {
    getInforUser(data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/login', data).then(response => {
                console.log(response);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    register(data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/register', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout() {
        return new Promise((resolve, reject) => {
            ApiService.post('/logout').then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    forgot(data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/forgotPassword', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    changePassByEmail(data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/changePassByEmail', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}