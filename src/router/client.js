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
                name: 'Home',
                component: () => import('../views/client/home/Home')
            }
        ]
    }
export default routesClient
