import Client from '../views/client/Index'

const routesClient =
    {
        path: '',
        name: 'client',
        component: Client,
        children: [
            {
                path: '/detail',
                name: 'Detail',
                component: () => import('../views/client/detail/Detail')
            },
            {
                path: '/',
                name: 'home',
                component: () => import('../views/client/home/Home')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/login/User')
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('../views/login/Login')
            },
            {
                path: '/register',
                name: 'register',
                component: () => import('../views/login/Register')
            },
            {
                path: '/secure',
                name: 'Secure',
                component: () => import('../views/login/Secure'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/member/inform',
                name: 'memberInform',
                component: () => import('../views/client/member/MemberInform'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    }
export default routesClient
