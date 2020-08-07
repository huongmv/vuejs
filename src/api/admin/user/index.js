import ApiService from '@/common/ApiService'
export default {
    getUserList () {
        return new Promise((resolve, reject) => {
            ApiService.get('/admin/userList').then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    logOut (data) {
        return new Promise((resolve, reject) => {
            ApiService.get('/logOut/' + data).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    forgot (data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/forgotPassword', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
}