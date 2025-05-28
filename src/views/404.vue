<template>
    <PageNotFoundComponent />
</template>

<script>
import PageNotFoundComponent from '@/components/Widgets/PageNotFoundComponent.vue'
import { defaultSEO } from '@/main'
export default {
    name: 'PageNotFound',
    components: {
        PageNotFoundComponent
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