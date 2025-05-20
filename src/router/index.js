import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '@/views/CatalogView.vue'
import GoodView from '@/views/GoodView.vue'
import CartView from '@/views/CartView.vue'

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: CatalogView,
    },
    {
        path: '/:good_id/',
        name: 'good',
        component: GoodView
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router