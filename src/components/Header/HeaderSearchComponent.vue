<template>
    <div class="header__search">
        <div class="search">
            <div class="search__body">
                <div class="search__shadow"></div>
                <input
                    class="search__input"
                    placeholder="Поиск..." 
                    type="text"
                    v-model="searchInput"
                    @keyup.enter.prevent="showSearchResult"
                >
                <button 
                    class="search__button search__button--end" 
                    type="submit"
                    @click.prevent="showSearchResult"
                >
                    <span class="search__button-icon"><svg width="20" height="20">
                            <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                        </svg>
                    </span>
                </button>
                <div class="search__box"></div>
                <div class="search__decor">
                    <div class="search__decor-start"></div>
                    <div class="search__decor-end"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderSearchComponent',
    data () {
        return {
            searchInput: ""
        }
    },
    computed: {
        q () {
            return this.$route.query.q
        },
    },
    methods: {
        showSearchResult: function() {
            if (this.searchInput != '') {
                this.$router.push({ name: 'catalog', query: { q:this.searchInput, page:1 } })
            }
        }
    },
    watch: {
        '$route.query': {
            immediate: true,
            handler() {
                if (this.q == '') {
                    this.searchInput = ""
                } else {
                    this.searchInput = this.q
                }
            },
        },
    }
}
</script>