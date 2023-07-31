import { createRouter, createWebHistory } from 'vue-router'
import TabsView from '@/views/tabs/TabsView.vue'
import HomeView from '@/views/tabs/home/HomeView.vue'
import MeView from '@/views/tabs/me/MeView.vue'
import OrderView from '@/views/tabs/order/OrderView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: '/tabs',
            name: 'tabs',
            component: TabsView,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: HomeView,

                },
                {
                    path: '/me',
                    name: 'me',
                    component: MeView
                },
                {
                    path: '/order',
                    name: 'order',
                    component: OrderView
                }
            ]
        },
    ]
})
export default router;