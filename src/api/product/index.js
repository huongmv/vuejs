import ApiService from '@/common/ApiService'
export default {
    getProductList () {
        return new Promise((resolve, reject) => {
            ApiService.get('/admin/productList').then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    deleteProductItem (data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/admin/deleteProduct', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
    ,
    createProductItem (data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/admin/createProduct', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    updateProductItem (data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/admin/editProduct', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    changeDisplayOrder (data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/admin/changeDisplayOrder', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    importDataExcel (data) {
        return new Promise((resolve, reject) => {
            ApiService.post('/admin/product/importExcel', data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    searchData (dataSearch) {
        return new Promise((resolve, reject) => {
            ApiService.post('/admin/searchProduct', dataSearch).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
