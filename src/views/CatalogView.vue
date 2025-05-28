<template>
    <BreadcrumbComponent name="Каталог" :categoryObj="category" />
    <CatalogContentComponent />
    <PageSEOComponent />
</template>

<script>
import { defaultSEO } from '@/main'
import CatalogContentComponent from '@/components/Catalog/CatalogContentComponent.vue'
import BreadcrumbComponent from '@/components/Basic/BreadcrumbComponent.vue'
import PageSEOComponent from '@/components/Widgets/PageSEOComponent.vue'
export default {
    name: 'CatalogView',
    components: {
        CatalogContentComponent,
        BreadcrumbComponent,
        PageSEOComponent
    },
    computed: {
        category () {
            return this.$store.getters.category
        }
    },
    watch: {
        '$route': {
            immediate: true,
            handler() {
                document.title = defaultSEO.title
                document.querySelector('meta[name="keywords"]').setAttribute('content', defaultSEO.keywords)
                document.querySelector('meta[name="description"]').setAttribute('content', defaultSEO.description)
                if (this.$route.query.category_id) {
                    this.$store.dispatch('loadCategoryInfo', this.$route.query.category_id)
                } else {
                    this.$store.dispatch('cleanCategoryInfo')
                }
            },
        },
        category: {
            deep: true,
            handler() {
                if (this.$route.query.category_id) {
                    document.title = this.category.seo_cleaned_title
                    document.querySelector('meta[name="keywords"]').setAttribute('content', this.category.seo_cleaned_keywords)
                    document.querySelector('meta[name="description"]').setAttribute('content', this.category.seo_cleaned_description)
                } 
            }
        },
    },
}
</script>