<template>
    <BreadcrumbComponent name="Каталог" />
    <CatalogContentComponent />
    <PageSEOComponent />
</template>

<script>
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
}
</script>