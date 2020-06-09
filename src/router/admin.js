import Admin from '../views/admin/Index'

const routesAdmin =
    {
        path: '/',
        name: 'Admin',
        component: Admin,
        children: [
            {
                path: '/admin/home',
                name: 'HomeAdmin',
                component: () => import('../views/admin/home/Home'),
            },{
                path: '/admin/tableData',
                name: 'tableData',
                component: () => import('../views/admin/table/TableData'),
                meta: {
                    requiresAuth: false,
                    title: 'Table Data'
                }
            },
            {
                path: '/admin/productAdmin',
                name: 'productAdmin',
                component: () => import('../views/admin/product/ProductList'),
                meta: {
                    requiresAuth: false,
                    title: 'Product Admin'
                }
            },
            {
                path: '/admin/demoLocalStorage',
                name: 'demoLocalStorage',
                component: () => import('../views/demo/LocalStorage'),
                meta: {
                    requiresAuth: false,
                    title: 'DemoLocal Storage'
                }
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('../views/login/LoginAdmin')
            }
        ]
    }
export default routesAdmin
