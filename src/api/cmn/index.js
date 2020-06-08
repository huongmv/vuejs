import ApiService from '@/common/ApiService'
export default {
    dataCountry () {
        return new Promise((resolve, reject) => {
            ApiService.get('/cmn/countryList').then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
