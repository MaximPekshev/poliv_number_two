import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '@/views/CatalogView.vue'
import GoodView from '@/views/GoodView.vue'
import CartView from '@/views/CartView.vue'
import ForDealersView from '@/views/ForDealersView.vue'
import PaymentView from '@/views/PaymentView.vue'
import DeliveryView from '@/views/DeliveryView.vue'
import WarrantyView from '@/views/WarrantyView.vue'
import PageNotFound from '@/views/404.vue'

const routes = [
    { 
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound 
    },
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
        path: '/cart/',
        name: 'cart',
        component: CartView,
    },
    {
        path: '/for-dealers/',
        name: 'dealers',
        component: ForDealersView,
    },
    {
        path: '/payment/',
        name: 'payment',
        component: PaymentView
    },
    {
        path: '/delivery/',
        name: 'delivery',
        component: DeliveryView
    },
    {
        path: '/warranty/',
        name: 'warranty',
        component: WarrantyView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router