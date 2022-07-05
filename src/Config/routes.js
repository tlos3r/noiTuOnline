const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import("../components/WaitingRoom")
    }
]

export default routes