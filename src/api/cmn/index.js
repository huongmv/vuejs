import ApiService from '@/common/ApiService'
import utils from '@/common/Utils'
export default {
    dataCountry () {
        return new Promise((resolve, reject) => {
            ApiService.get('/cmn/countryList').then(response => {
                resolve(response)
            }).catch(error => {
                console.log('aaaaaaa')
                utils.apiError()
                reject(error)
            })
        })
    }
}
