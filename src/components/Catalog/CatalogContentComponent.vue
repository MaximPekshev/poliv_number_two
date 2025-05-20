<template>
    <div class="block-split block-split--has-sidebar">
        <div class="container">
            <div class="block-split__row row no-gutters">
                <div class="block-split__item block-split__item-sidebar col-auto">
                    <div class="sidebar sidebar--offcanvas--mobile">
                        <div class="sidebar__backdrop"></div>
                        <div class="sidebar__body">
                            <CatalogSidebarComponent />
                        </div>
                    </div>
                </div>
                <div class="block-split__item block-split__item-content col-auto">
                    <div class="block">
                        <div 
                            class="products-view"
                        >
                            <div class="products-view__options view-options view-options--offcanvas--mobile">
                                <div class="view-options__body">
                                    <button
                                        type="button" 
                                        class="view-options__filters-button filters-button"
                                        @click.prevent="showCategoryMenu"
                                    >
                                        <span class="filters-button__icon"><svg width="16" height="16">
                                                <path d="M7,14v-2h9v2H7z M14,7h2v2h-2V7z M12.5,6C12.8,6,13,6.2,13,6.5v3c0,0.3-0.2,0.5-0.5,0.5h-2
C10.2,10,10,9.8,10,9.5v-3C10,6.2,10.2,6,10.5,6H12.5z M7,2h9v2H7V2z M5.5,5h-2C3.2,5,3,4.8,3,4.5v-3C3,1.2,3.2,1,3.5,1h2
C5.8,1,6,1.2,6,1.5v3C6,4.8,5.8,5,5.5,5z M0,2h2v2H0V2z M9,9H0V7h9V9z M2,14H0v-2h2V14z M3.5,11h2C5.8,11,6,11.2,6,11.5v3
C6,14.8,5.8,15,5.5,15h-2C3.2,15,3,14.8,3,14.5v-3C3,11.2,3.2,11,3.5,11z"></path>
                                            </svg>
                                        </span>
                                        <span class="filters-button__title"> Категории</span>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="products-view__list products-list products-list--grid--3" 
                                data-layout="grid" 
                                data-with-features="false"
                            >
                                <div 
                                    v-if="goods_list_loading" 
                                    class="products-list__content"
                                >
                                    <div 
                                        class="products-list__item"
                                        v-for="item in demoContentCount" v-bind:key="item.id"
                                    >   
                                        <CatalogLoadingGoodComponent />
                                    </div>
                                </div>
                                <div 
                                    class="products-list__content"
                                    v-else-if="!goods_list_loading && goods_list.length == 0"
                                >
                                    <div class="not-found__content" style="text-align: center; width: 100%;">
                                        <h1 class="not-found__title">По Вашему запросу ничего не найдено.</h1>
                                        <router-link class="btn btn-primary" :to="{ name: 'catalog' }">На главную</router-link>
                                    </div>
                                </div>
                                <div v-else class="products-list__content">
                                    <div 
                                        class="products-list__item"
                                        v-for="goodItem in goods_list" v-bind:key="goodItem.id"
                                    >   
                                        <CatalogGoodComponent 
                                            :goodInfo="goodItem"
                                            :manufacturer="goodItem.manufacturer"
                                            :images="goodItem.images"
                                            >
                                        </CatalogGoodComponent>
                                    </div>
                                </div>
                            </div>
                            <CatalogPaginatorComponent />
                        </div>
                    </div>
                </div>
            </div>
            <div class="block-space block-space--layout--before-footer"></div>
        </div>
    </div>
    <n-drawer v-model:show="categoryDrawerVisble" :width="categoryDrawerWidth" placement="left">
        <n-drawer-content title="Категории" closable>
            <CatalogSidebarComponent @chooseCategory="showCategoryMenu" />
        </n-drawer-content>
    </n-drawer>
</template>

<script>
import CatalogSidebarComponent from '@/components/Catalog/CatalogSidebarComponent.vue'
import CatalogPaginatorComponent from '@/components/Catalog/CatalogPaginatorComponent.vue'
import CatalogGoodComponent from '@/components/Catalog/CatalogGoodComponent.vue'
import CatalogLoadingGoodComponent from '@/components/Catalog/CatalogLoadingGoodComponent.vue'
export default {
    name: 'CatalogContentComponent',
    data() {
        return {
            categoryDrawerVisble: false,
			categoryDrawerWidth: 400,
            demoContentCount: 27,
        }
    },
    components: {
        CatalogSidebarComponent,
        CatalogPaginatorComponent,
        CatalogGoodComponent,
        CatalogLoadingGoodComponent
    },
    computed: {
        goodsQty() {
            return this.$store.getters.goods_qty
        },
        goods_list() {
            return this.$store.getters.goods_list
        },
        goods_list_loading() {
            return this.$store.getters.goods_list_loading
        },
        category () {
            return this.$store.getters.category
        }
    },
    mounted() {
        if ((window.innerWidth - 20) < 400) {
            this.categoryDrawerWidth = window.innerWidth - 20
        }
    },
    methods: {
        showCategoryMenu() {
            this.categoryDrawerVisble = !this.categoryDrawerVisble
        },
    },
    // watch: {
    //     '$route': {
    //         immediate: true,
    //         handler() {
    //             if (this.$route.query.category_id) {
    //                 this.$store.dispatch('loadCategoryInfo', this.$route.query.category_id)
    //             } else {
    //                 this.$store.dispatch('loadCategoryInfo', "")
    //             }
    //         }
    //     },
    //     category: {
    //         deep: true,
    //         handler() {
    //             document.title = this.category.seo_cleaned_title
    //             document.querySelector('meta[name="keywords"]').setAttribute('content', this.category.seo_cleaned_keywords)
    //             document.querySelector('meta[name="description"]').setAttribute('content', this.category.seo_cleaned_description)
    //         }
    //     },
    // }
}
</script>