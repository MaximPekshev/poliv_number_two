<template>
    <BreadcrumbComponent name="Корзина"  />
    <CartContentComponent />
    <PageSEOComponent />
</template>

<script>
import { defaultSEO } from '@/main'
import BreadcrumbComponent from '@/components/Basic/BreadcrumbComponent.vue'
import CartContentComponent from '@/components/Cart/CartContentComponent.vue'
import PageSEOComponent from '@/components/Widgets/PageSEOComponent.vue'
export default {
    name: 'CartView',
    components: {
        BreadcrumbComponent,
        CartContentComponent,
        PageSEOComponent
    },
     watch: {
        '$route': {
            immediate: true,
            handler() {
                document.title = defaultSEO.title
                document.querySelector('meta[name="keywords"]').setAttribute('content', defaultSEO.keywords)
                document.querySelector('meta[name="description"]').setAttribute('content', defaultSEO.description)
            }
        }
    }
}
</script>