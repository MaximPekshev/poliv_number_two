<template>
    <div v-if="goodsQty > 1" class="products-view__pagination">
        <nav aria-label="Page navigation example">
            <ul v-if="goods_list_loading" class="pagination loading">
                <li class="page-item"><span class="page-link"><n-skeleton circle /></span></li>
                <li class="page-item"><span class="page-link"><n-skeleton circle /></span></li>
                <li class="page-item"><span class="page-link"><n-skeleton circle /></span></li>
                <li class="page-item"><span class="page-link"><n-skeleton circle /></span></li>
                <li class="page-item"><span class="page-link"><n-skeleton circle /></span></li>
                <li class="page-item"><span class="page-link"><n-skeleton circle /></span></li>
                <li class="page-item"><span class="page-link"><n-skeleton circle /></span></li>
                <li class="page-item"><span class="page-link"><n-skeleton circle /></span></li>
            </ul>
            <ul v-else class="pagination">
                <li 
                    class="page-item"
                    :class="{ 'disabled': currentPage == 1 }"
                >
                    <a @click.prevent="previosPage" class="page-link">
                        <i class="fa fa-chevron-left"></i>
                    </a>
                </li>
                <li v-if="currentPage > 3" class="page-item">
                    <router-link v-if="q" :to="{ name: 'catalog', query: {q: q, page:1} }" class="page-link">1</router-link>
                    <router-link v-else-if="routeName=='catalog'"  :to="{ name: 'catalog', query: actualQuery(1) }" class="page-link">1</router-link>

                </li>
                <li v-if="currentPage > 4" class="page-item page-item--dots">
                    <div class="pagination__dots"></div>
                </li>
                <li 
                    v-for="item in availablePagesBeforeCurrent" v-bind:key="item.id"
                    class="page-item"
                >
                    <router-link 
                        v-if="q" 
                        :to="{ name: 'catalog', query: {q: q, page:item} }"
                        class="page-link"
                    >
                        {{ item }}
                    </router-link>
                    <router-link 
                        v-else-if="routeName=='catalog'" 
                        :to="{ name: 'catalog', query:  actualQuery(item) }"
                        class="page-link"
                    >
                        {{ item }}
                    </router-link>
                </li>
                <li class="page-item active" aria-current="page">
                    <span class="page-link">
                        {{ currentPage }}
                    </span>
                </li>
                <li 
                    v-for="item in availablePagesAfterCurrent" 
                    v-bind:key="item.id"
                    class="page-item"
                >
                    <router-link 
                        v-if="q" 
                        :to="{ name: 'catalog', query: {q: q, page:item} }"
                        class="page-link"
                    >
                        {{ item }}
                    </router-link>
                    <router-link 
                        v-else-if="routeName=='catalog'" 
                        :to="{ name: 'catalog', query:  actualQuery(item) }"
                        class="page-link"
                    >
                        {{ item }}
                    </router-link>
                </li>
                <li 
                    v-if="(pageQty-currentPage) > 3"    
                    class="page-item page-item--dots"
                >
                    <div class="pagination__dots"></div>
                </li>
                <li 
                    v-if="(pageQty-currentPage) > 2"
                    class="page-item"
                >
                    <router-link 
                        v-if="q" 
                        :to="{ name: 'catalog', query: {q: q, page:pageQty} }"
                        class="page-link"
                    >
                        {{ pageQty }}
                    </router-link>
                    <router-link 
                        v-else-if="routeName=='catalog'" 
                        :to="{ name: 'catalog', query: actualQuery(pageQty) }"
                        class="page-link"
                    >   
                        {{ pageQty }}
                    </router-link>
                </li>
                <li 
                    class="page-item"
                    :class="{ 'disabled': currentPage == pageQty }"
                >
                    <a @click.prevent="nextPage" class="page-link">
                        <i class="fa fa-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div> 
</template>

<script>
export default {
  name: 'CatalogPaginatorComponent',
  computed: {
        q () {
            return this.$route.query.q
        },
        routeName () {
            return this.$route.name
        },
        goodsQty: function() {
            return this.$store.getters.goods_qty
        },
        pageQty () {
            return this.$store.getters.page_qty
        },
        currentPage () {
            return this.$store.getters.current_page
        },
        goods_list_loading () {
            return this.$store.getters.goods_list_loading
        },
        availablePagesBeforeCurrent () {
            return this.$store.getters.availablePagesBeforeCurrent
        },
        availablePagesAfterCurrent () {
            return this.$store.getters.availablePagesAfterCurrent
        }
    },
    methods: {
        loadCurrentGoodsList(data) {
            this.$store.dispatch('getGoodsList', data) 
        },
        setCurrentPage (page_num) {
            if (!this.$route.query.page == '') {
                this.$store.dispatch('setCurrentPage', page_num)
            } else {
                this.$store.dispatch('setCurrentPage', 1)
            }
        },
        nextPage: function() {
            if (this.goods_list_loading == false) {
                if (!(this.currentPage == this.pageQty)) {
                    this.setCurrentPage(this.currentPage + 1)
                    if (!this.q=='') {
                        this.$router.push({ name: 'catalog', query: {q:this.q, page:this.currentPage } })
                    } else {
                        let actualQuery = this.actualQuery(this.currentPage)
                        this.$router.push({ name: 'catalog', query: actualQuery})
                    }
                }    
            }
        },
        previosPage: function() {
            if (this.goods_list_loading == false) {
                if (this.currentPage > 1) {
                    this.setCurrentPage(this.currentPage - 1)
                    if (!this.q=='') {
                        this.$router.push({ name: 'catalog', query: {q:this.q, page:this.currentPage } })
                    } else {
                        let actualQuery = this.actualQuery(this.currentPage)
                        this.$router.push({ name: 'catalog', query: actualQuery})
                    }
                }
            }    
        },
        actualQuery (page) {
            let query = {
                page: page
            }
            return query
        },
    },
    watch: {
        '$route': {
            immediate: true,
            handler() {
                let query = this.$route.query
                if (!query.page == '') {
                    this.setCurrentPage(parseInt(query.page))
                } else {
                    this.setCurrentPage(1)
                }
                let data = {
                    "page" : this.currentPage
                }
                if (this.q!='') {
                    data.q = this.q
                }
                if (query.category!='') {
                    data.category_id = query.category_id
                }
                this.loadCurrentGoodsList(data)
            }
        }
    }
}
</script>

<style scoped>
.pagination.loading {
    justify-content: space-between;
}
.pagination.loading span {
    width: 33px;
}
</style>