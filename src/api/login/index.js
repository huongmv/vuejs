import ApiService from '@/common/ApiService'
export default {
    getInforUser () {
        return new Promise((resolve, reject) => {
            ApiService.post('/userLogin').then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
