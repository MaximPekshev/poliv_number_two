<template>
    <BreadcrumbComponent name="Дилерам"  />
    <PageSEOComponent />
</template>

<script>
import { defaultSEO } from '@/main'
import BreadcrumbComponent from '@/components/Basic/BreadcrumbComponent.vue'
import PageSEOComponent from '@/components/Widgets/PageSEOComponent.vue'
export default {
    name: 'ForDealersView',
    components: {
        BreadcrumbComponent,
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