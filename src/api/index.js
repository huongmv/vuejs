import ApiService from '@/common/ApiService'
export default {
    apiParamPost (url, data) {
        return new Promise((resolve, reject) => {
            ApiService.post(url, data).then(response => {
                resolve(response)
            }).catch(error => {
                utils.apiError()
                reject(error)
            })
        })
    },
    apiParamGet (url, data) {
        return new Promise((resolve, reject) => {
            ApiService.get(url, data).then(response => {
                resolve(response)
            }).catch(error => {
                utils.apiError()
                reject(error)
            })
        })
    },
    apiNotParamGet (url) {
        return new Promise((resolve, reject) => {
            ApiService.get(url).then(response => {
                resolve(response)
            }).catch(error => {
                utils.apiError()
                reject(error)
            })
        })
    },
    apiNotParamPost (url) {
        return new Promise((resolve, reject) => {
            ApiService.post(url).then(response => {
                resolve(response)
            }).catch(error => {
                utils.apiError()
                reject(error)
            })
        })
    }
}
