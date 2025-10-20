export default [
    {
        path:  '/',
        name: 'main',
        component: () => import('@/views/layout/index.vue'),
        children: [
            {
                path: '',
                name: 'name',
                component: () => import('@/views/main/index.vue')
            }
        ]
    }
]