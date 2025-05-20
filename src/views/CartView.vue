<template>
    <BreadcrumbComponent name="Корзина" />
    <CartContentComponent />
</template>

<script>
import BreadcrumbComponent from '@/components/Basic/BreadcrumbComponent.vue'
import CartContentComponent from '@/components/Cart/CartContentComponent.vue'
export default {
    name: 'CartView',
    components: {
        BreadcrumbComponent,
        CartContentComponent
    },
}
</script>