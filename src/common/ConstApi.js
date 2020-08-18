const api = {
    admin: {
        /** Product */
        ADMIN_PRODUCT_LIST: '/admin/productList',
        ADMIN_DELETE_PRODUCT: '/admin/deleteProduct',
        ADMIN_CREATE_PRODUCT: '/admin/createProduct',
        ADMIN_EDIT_PRODUCT: '/admin/editProduct',
        ADMIN_CHANGE_DISPLAY_ORDER: '/admin/changeDisplayOrder',
        ADMIN_PRODUCT_IMPORT_EXCEL: '/admin/product/importExcel',
        ADMIN_PRODUCT_IMPORT_EXCEL_BASE64: '/admin/product/importExcelBase64',
        ADMIN_SEARCH_PRODUCT: '/admin/searchProduct',
        /** User */
        ADMIN_USER_LIST: '/admin/userList'
    },
    client: {
        clienta: 'aaaaaaaaaaaa'
    },
    all: {
        ALL_LOGIN: '/login',
        ALL_REGISTER: '/register/',
        ALL_LOGOUT: '/logout',
        ALL_FORGOT_PASSWORD: '/forgotPassword',
        ALL_CHANGE_PASS_BY_EMAIL: '/changePassByEmail',
        ALL_CMN_COUNTRY_LIST: '/cmn/countryList'
    }
}
export default api


/** CLIENT */