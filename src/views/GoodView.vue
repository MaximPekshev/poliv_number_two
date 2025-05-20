<template>
    <!-- <BreadcrumbComponent name="Товар" /> -->
    <GoodContentComponent />
</template>

<script>
// import BreadcrumbComponent from '@/components/Basic/BreadcrumbComponent.vue'
import GoodContentComponent from '@/components/Catalog/Good/GoodContentComponent.vue'
export default {
    name: 'GoodView',
    components: {
        // BreadcrumbComponent,
        GoodContentComponent
    },
}
</script>