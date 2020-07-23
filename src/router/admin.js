import Admin from '../views/admin/Index'

const routesAdmin =
    {
        path: '',
        name: 'Admin',
        component: Admin,
        children: [
            {
                path: '/',
                name: 'HomeAdmin',
                component: () => import('../views/admin/home/Home'),
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('../views/login/LoginAdmin')
            },
            {
                path: '/admin/tableData',
                name: 'tableData',
                component: () => import('../views/admin/table/TableData'),
                meta: {
                    requiresAuth: true,
                    title: 'Table Data'
                }
            },
            {
                path: '/admin/productAdmin',
                name: 'productAdmin',
                component: () => import('../views/admin/product/ProductList'),
                meta: {
                    requiresAuth: true,
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
                path: '/admin/wysiwyg',
                name: 'wysiwyg',
                component: () => import('../views/admin/demo_Froala_WYSIWYG/wysiwyg'),
                meta: {
                    requiresAuth: true,
                    title: 'Product Admin'
                }
            }
        ]
    }
export default routesAdmin
