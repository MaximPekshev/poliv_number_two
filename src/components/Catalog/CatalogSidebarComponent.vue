<template>
    <div class="sidebar__content">
        <div class="widget widget-filters widget-filters--offcanvas--mobile" data-collapse="" data-collapse-opened-class="filter--opened">
            <div class="widget__header widget-filters__header">
                <h4>Категории</h4>
            </div>
            <div class="widget-filters__list">
                <div class="widget-filters__item">
                    <div class="filter filter--opened" data-collapse-item="">
                        <div class="filter__body" data-collapse-content="">
                            <div class="filter__container">
                                <div class="filter-categories">
                                    <n-collapse 
                                        arrow-placement="right"
                                    >
                                        <!-- первый уровень -->
                                        <div 
                                            class="n-collapse-item"
                                            v-for="catLev1 in categories_list"
                                            :key="catLev1.id"
                                        >
                                            <n-collapse-item 
                                                v-if="catLev1.items.length > 0"
                                                :title="catLev1.category.name" 
                                                :name="catLev1.id"
                                            >   
                                                <!-- второй уровень -->
                                                <div 
                                                    class="n-collapse-item"
                                                    v-for="catLev2 in catLev1.items"
                                                    :key="catLev2.id"
                                                >
                                                    <n-collapse 
                                                        arrow-placement="right"
                                                    >
                                                        <n-collapse-item 
                                                            v-if="catLev2.items.length > 0"
                                                            :title="catLev2.category.name" 
                                                            :name="catLev2.id"
                                                        >
                                                        <!-- третий уровень -->
                                                        <div 
                                                            class="n-collapse-item"
                                                            v-for="catLev3 in catLev2.items"
                                                            :key="catLev3.id"
                                                        >   
                                                            <div class="category-link">
                                                                <router-link 
                                                                    @click="chooseCategory(); $emit('chooseCategory')"
                                                                    :to="{ name: 'catalog', query: {category_id: catLev3.category.id, page: 1}}"
                                                                >{{ catLev3.category.name }}
                                                                </router-link>
                                                            </div>
                                                        </div>
                                                        </n-collapse-item>
                                                        <div class="category-link" v-else>
                                                            <router-link 
                                                                @click="chooseCategory(); $emit('chooseCategory')"
                                                                :to="{ name: 'catalog', query: {category_id: catLev2.category.id, page: 1}}"
                                                            >{{ catLev2.category.name }}
                                                            </router-link>
                                                        </div>
                                                    </n-collapse>
                                                </div>
                                            </n-collapse-item>
                                            <div class="category-link" v-else>
                                                <router-link 
                                                    @click="chooseCategory(); $emit('chooseCategory')"
                                                    :to="{ name: 'catalog', query: {category_id: catLev1.category.id, page: 1}}"
                                                >{{ catLev1.category.name }}
                                                </router-link>
                                            </div>
                                        </div>
                                    </n-collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatalogSidebarComponent',
    data () {
        return {
            catDrawerVisble: this.categoryDrawerVisble,
            categoriesDemoCount: 15,
        }
    },
    computed: {
        categories_list () {
            return this.$store.getters.categories_list
        },
        categoriesListLoading () {
            return this.$store.getters.categories_list_loading
        }
    },
    methods: {
        loadCategoriesList () {
            this.$store.dispatch('loadCategoriesList')
        },
        chooseCategory() {
            this.$emit('myevent')
        },
    },
    watch: {
        '$route': {
            immediate: true,
            handler() {
                this.loadCategoriesList()
            }
        }
    },
}
</script>

<style scoped>
.n-collapse .n-collapse-item {
    margin: 0px;
    padding: 7px 0px;
}
</style>