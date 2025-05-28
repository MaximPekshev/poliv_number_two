<template>
    <header class="site__mobile-header">
        <div class="mobile-header">
            <div class="container">
                <div class="mobile-header__body">
                    <button @click.prevent="showMobileMenu" class="mobile-header__menu-button" type="button">
                        <svg width="18px" height="14px">
                            <path d="M-0,8L-0,6L18,6L18,8L-0,8ZM-0,-0L18,-0L18,2L-0,2L-0,-0ZM14,14L-0,14L-0,12L14,12L14,14Z"></path>
                        </svg>
                    </button>
                    <router-link :to="{ name: 'catalog' }" class="mobile-header__logo">
                        <!-- mobile-logo -->
                        <img :src="logo" width="130">
                        <!-- mobile-logo / end -->
                    </router-link>
                    <div class="mobile-header__search mobile-search">
                        <div class="mobile-search__body">
                            <input
                                class="mobile-search__input"
                                placeholder="Поиск..." 
                                type="text"
                                v-model="searchInput"
                                @keyup.enter.prevent="showSearchResult"
                            >
                            <button 
                                @click.prevent="showSearchResult"
                                type="submit" class="mobile-search__button mobile-search__button--search"
                            >
                                <svg width="20" height="20">
                                    <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                                </svg>
                            </button>
                            <button type="button" class="mobile-search__button mobile-search__button--close">
                                <svg width="20" height="20">
                                    <path d="M16.7,16.7L16.7,16.7c-0.4,0.4-1,0.4-1.4,0L10,11.4l-5.3,5.3c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L8.6,10L3.3,4.7
c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L10,8.6l5.3-5.3c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L11.4,10l5.3,5.3
C17.1,15.7,17.1,16.3,16.7,16.7z"></path>
                                </svg>  
                            </button>
                            <div class="mobile-search__field"></div>
                        </div>
                    </div>
                    <div class="mobile-header__indicators">
                        <div class="mobile-indicator mobile-indicator--search d-md-none">
                            <button @click.prevent="showSearchDrawer" type="button" class="mobile-indicator__button">
                                <span class="mobile-indicator__icon"><svg width="20" height="20">
                                        <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="mobile-indicator">
                            <router-link :to="{ name: 'cart' }" class="mobile-indicator__button">
                                <span class="mobile-indicator__icon">
                                    <svg width="20" height="20">
                                        <circle cx="7" cy="17" r="2"></circle>
                                        <circle cx="15" cy="17" r="2"></circle>
                                        <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                    </svg>
                                    <span class="mobile-indicator__counter">{{ cartQty }}</span>
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <n-drawer v-model:show="searchDrawerVisble" height="50" placement="top">
        <n-drawer-content>
            <div class="mobile-search__body">
                <input
                    class="mobile-search__input"
                    placeholder="Поиск..." 
                    type="text"
                    v-model="searchInput"
                    @keyup.enter.prevent="showSearchResult(); showSearchDrawer();"
                >
                <button 
                    @click.prevent="showSearchResult(); showSearchDrawer();"
                    type="submit" class="mobile-search__button mobile-search__button--search"
                >
                    <svg width="20" height="20">
                        <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                    </svg>
                </button>
                <button @click.prevent="showSearchDrawer" type="button" class="mobile-search__button mobile-search__button--close">
                    <svg width="20" height="20">
                        <path d="M16.7,16.7L16.7,16.7c-0.4,0.4-1,0.4-1.4,0L10,11.4l-5.3,5.3c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L8.6,10L3.3,4.7
c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L10,8.6l5.3-5.3c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L11.4,10l5.3,5.3
C17.1,15.7,17.1,16.3,16.7,16.7z"></path>
                    </svg>  
                </button>
                <div class="mobile-search__field"></div>
            </div>
        </n-drawer-content>
    </n-drawer>
    <n-drawer v-model:show="mobileMenuDrawerVisble" :width="mobileMenuDrawerWidth" placement="left">
        <div class="mobile-menu__panel">
            <div class="mobile-menu__panel-header">
                <div class="mobile-menu__panel-title">Меню</div>
            </div>
            <div @click="showMobileMenu" class="mobile-menu__indicators justify-content-center">
                <router-link :to="{ name: 'cart' }" class="mobile-menu__indicator">
                    <span class="mobile-menu__indicator-icon">
                        <svg width="20" height="20">
                            <circle cx="7" cy="17" r="2"></circle>  
                            <circle cx="15" cy="17" r="2"></circle>
                            <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                        </svg>
                        <span class="mobile-menu__indicator-counter">{{ cartQty }}</span>
                    </span>
                    <span class="mobile-menu__indicator-title">Корзина</span>
                </router-link>
            </div>
            <div class="mobile-menu__divider"></div>
            <ul class="mobile-menu__links">
                <li @click="showMobileMenu" class="mobile-menu__link">
                    <router-link  :to="{ name: 'catalog' }" class="mobile-menu__link-title">Каталог</router-link>
                </li>
                <li @click="showMobileMenu" class="mobile-menu__link">
                    <router-link :to="{ name: 'dealers' }" class="mobile-menu__link-title">Дилерам</router-link>
                </li>
                <li @click="showMobileMenu" class="mobile-menu__link">
                    <router-link :to="{ name: 'payment' }" class="mobile-menu__link-title">Оплата</router-link>
                </li>
                <li @click="showMobileMenu" class="mobile-menu__link">
                    <router-link :to="{ name: 'delivery' }" class="mobile-menu__link-title">Доставка</router-link>
                </li>
                <li @click="showMobileMenu" class="mobile-menu__link">
                    <router-link :to="{ name: 'warranty' }" class="mobile-menu__link-title">Гарантия/Возврат</router-link>
                </li>
            </ul>
            <div class="mobile-menu__spring"></div>
            <div class="mobile-menu__divider"></div>
            <a class="mobile-menu__contacts" href="tel:+79205772244">
                <div class="mobile-menu__contacts-title">89205772244</div>
            </a>
             <a class="mobile-menu__contacts" href="mailto:89205772244@mail.ru">
                <div class="mobile-menu__contacts-title">89205772244@mail.ru</div>
            </a>
        </div>
    </n-drawer>
</template>

<script>
import logo from '@/assets/images/logo/logo_black.png'
export default {
  name: 'HeaderMobileMenuComponent',
  data () {
    return {
            searchInput: "",
            searchDrawerVisble: false,
            mobileMenuDrawerWidth: 400,
            mobileMenuDrawerVisble: false,
            logo
        }
    },
    computed: {
        q () {
            return this.$route.query.q
        },
        cartQty () {
            return this.$store.getters.cartQty
        },
    },
    mounted() {
        if ((window.innerWidth - 20) < 400) {
            this.mobileMenuDrawerWidth = window.innerWidth - 20
        }
    },
    methods: {
        showSearchResult: function() {
            if (this.searchInput != '') {
                this.$router.push({ name: 'catalog', query: { q:this.searchInput, page:1 } })
            }
        },
        showSearchDrawer () {
            console.log('showSearchDrawer')
            this.searchDrawerVisble = !this.searchDrawerVisble
        },
        showMobileMenu () {
            this.mobileMenuDrawerVisble = !this.mobileMenuDrawerVisble
        },  
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

<style scoped>
.mobile-menu__links {
    padding-top: 30px;
}
.mobile-menu__link-title {
    font-size: 20px;
}
.mobile-menu__panel-title {
    font-size: 22px;
}
</style>