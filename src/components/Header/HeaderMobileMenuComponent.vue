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
                        <svg width="130" height="20">
                            <path class="mobile-header__logo-part-one" d="M40,19.9c-0.3,0-0.7,0.1-1,0.1h-4.5c-0.8,0-1.5-0.7-1.5-1.5v-17C33,0.7,33.7,0,34.5,0H39c0.3,0,0.7,0,1,0.1
c4.5,0.5,8,4.3,8,8.9v2C48,15.6,44.5,19.5,40,19.9z M44,9.5C44,6.7,41.8,4,39,4h-0.8C37.5,4,37,4.5,37,5.2v9.6
c0,0.7,0.5,1.2,1.2,1.2H39c2.8,0,5-2.7,5-5.5V9.5z M29.5,20h-11c-0.8,0-1.5-0.7-1.5-1.5v-17C17,0.7,17.7,0,18.5,0h11
C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4H21v4h6.5C28.3,8,29,8.7,29,9.5v1c0,0.8-0.7,1.5-1.5,1.5H21v4h8.5
c0.8,0,1.5,0.7,1.5,1.5v1C31,19.3,30.3,20,29.5,20z M14.8,17.8c0.6,1-0.1,2.3-1.3,2.3h-2L8,14H4v4.5C4,19.3,3.3,20,2.5,20h-1
C0.7,20,0,19.3,0,18.5v-17C0,0.7,0.7,0,1.5,0H8c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L14.8,17.8z M9,4.2
C8.7,4.1,8.3,4,8,4H5C4.4,4,4,4.4,4,5v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.7-0.3,0.9-0.5C10.6,8.8,11,7.9,11,7
C11,5.7,10.2,4.6,9,4.2z"></path>
                            <path class="mobile-header__logo-part-two" d="M128.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7c-0.2-0.3-0.4-0.6-0.8-0.8c-0.5-0.3-1.4-0.5-2.1-0.5c-1.5,0-2.8,0.9-2.8,2
c0,0.7,0.5,1.3,1.2,1.6c0.8,0.4,1.1,1.3,0.7,2.1l-0.4,0.9c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2c-1-1.1-1.7-2.5-1.7-4
c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C130.3,4.9,129.6,6,128.6,6z M113.5,4H109v14.5c0,0.8-0.7,1.5-1.5,1.5h-1
c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C99.7,4,99,3.3,99,2.5v-1c0-0.8,0.7-1.5,1.5-1.5h13c0.8,0,1.5,0.7,1.5,1.5v1C115,3.3,114.3,4,113.5,4
z M97.8,17.8c0.6,1-0.1,2.3-1.3,2.3h-2L91,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17C83,0.7,83.7,0,84.5,0H91
c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L97.8,17.8z M92,4.2C91.7,4.1,91.3,4,91,4h-3c-0.6,0-1,0.4-1,1v4
c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.7-0.3,0.9-0.5C93.6,8.8,94,7.9,94,7C94,5.7,93.2,4.6,92,4.2z M79.5,20h-1.1
c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1L68,19c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l6.2-17c0.2-0.6,0.8-1,1.4-1h1.6
c0.6,0,1.2,0.4,1.4,1l6.2,17C81.3,19,80.5,20,79.5,20z M72.5,6.6L70.9,11h3.2L72.5,6.6z M58,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1
c-0.8,0-1.5-0.7-1.5-1.5v-17C50,0.7,50.7,0,51.5,0H58c3.9,0,7,3.1,7,7S61.9,14,58,14z M61,7c0-1.3-0.8-2.4-2-2.8
C58.7,4.1,58.3,4,58,4h-3c-0.5,0-1,0.4-1,1v4c0,0.6,0.5,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.7-0.3,0.9-0.5C60.6,8.8,61,7.9,61,7z
    M118.4,14h1c0.5,0,0.9,0.3,1.2,0.7c0.2,0.3,0.4,0.6,0.8,0.8c0.5,0.3,1.4,0.5,2.1,0.5c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6
c-0.8-0.4-1.1-1.3-0.7-2.1l0.4-0.9c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4c0,3.3-2.9,6-6.5,6
c-2.8,0-5.5-1.7-6.4-4C116.7,15.1,117.4,14,118.4,14z"></path>
                        </svg>
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
            <div class="mobile-menu__indicators justify-content-center">
                <!-- <a class="mobile-menu__indicator" href="wishlist.html">
                    <span class="mobile-menu__indicator-icon">
                        <svg width="20" height="20">
                            <path d="M14,3c2.2,0,4,1.8,4,4c0,4-5.2,10-8,10S2,11,2,7c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.7,1L10,5.2L11.3,4C12.1,3.4,13,3,14,3 M14,1
c-1.5,0-2.9,0.6-4,1.5C8.9,1.6,7.5,1,6,1C2.7,1,0,3.7,0,7c0,5,6,12,10,12s10-7,10-12C20,3.7,17.3,1,14,1L14,1z"></path>
                        </svg>
                    </span>
                    <span class="mobile-menu__indicator-title">Wishlist</span>
                </a>
                <a class="mobile-menu__indicator" href="account-dashboard.html">
                    <span class="mobile-menu__indicator-icon">
                        <svg width="20" height="20">
                            <path d="M20,20h-2c0-4.4-3.6-8-8-8s-8,3.6-8,8H0c0-4.2,2.6-7.8,6.3-9.3C4.9,9.6,4,7.9,4,6c0-3.3,2.7-6,6-6s6,2.7,6,6
c0,1.9-0.9,3.6-2.3,4.7C17.4,12.2,20,15.8,20,20z M14,6c0-2.2-1.8-4-4-4S6,3.8,6,6s1.8,4,4,4S14,8.2,14,6z"></path>
                        </svg>
                    </span>
                    <span class="mobile-menu__indicator-title">Account</span>
                </a> -->
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
                <!-- <a class="mobile-menu__indicator" href="account-garage.html">
                    <span class="mobile-menu__indicator-icon">
                        <svg width="20" height="20">
                            <path d="M6.6,2c2,0,4.8,0,6.8,0c1,0,2.9,0.8,3.6,2.2C17.7,5.7,17.9,7,18.4,7C20,7,20,8,20,8v1h-1v7.5c0,0.8-0.7,1.5-1.5,1.5h-1
c-0.8,0-1.5-0.7-1.5-1.5V16H5v0.5C5,17.3,4.3,18,3.5,18h-1C1.7,18,1,17.3,1,16.5V16V9H0V8c0,0,0.1-1,1.6-1C2.1,7,2.3,5.7,3,4.2
C3.7,2.8,5.6,2,6.6,2z M13.3,4H6.7c-0.8,0-1.4,0-2,0.7c-0.5,0.6-0.8,1.5-1,2C3.6,7.1,3.5,7.9,3.7,8C4.5,8.4,6.1,9,10,9
c4,0,5.4-0.6,6.3-1c0.2-0.1,0.2-0.8,0-1.2c-0.2-0.4-0.5-1.5-1-2C14.7,4,14.1,4,13.3,4z M4,10c-0.4-0.3-1.5-0.5-2,0
c-0.4,0.4-0.4,1.6,0,2c0.5,0.5,4,0.4,4,0C6,11.2,4.5,10.3,4,10z M14,12c0,0.4,3.5,0.5,4,0c0.4-0.4,0.4-1.6,0-2c-0.5-0.5-1.3-0.3-2,0
C15.5,10.2,14,11.3,14,12z"></path>
                        </svg>
                    </span>
                    <span class="mobile-menu__indicator-title">Garage</span>
                </a> -->
            </div>
            <div class="mobile-menu__divider"></div>
            <ul class="mobile-menu__links">
                <li class="mobile-menu__link">
                    <router-link @click="showMobileMenu" :to="{ name: 'catalog' }" class="mobile-menu__link-title">Каталог</router-link>
                </li>
                <li @click="showMobileMenu" class="mobile-menu__link">
                    <a href="#" class="mobile-menu__link-title">Застройщикам</a>
                </li>
                <li @click="showMobileMenu" class="mobile-menu__link">
                    <a href="#" class="mobile-menu__link-title">Оптовикам</a>
                </li>
                <li @click="showMobileMenu" class="mobile-menu__link">
                    <a href="#" class="mobile-menu__link-title">Контакты</a>
                </li>
            </ul>
            <div class="mobile-menu__spring"></div>
            <div class="mobile-menu__divider"></div>
            <a class="mobile-menu__contacts" href="">
                <div class="mobile-menu__contacts-subtitle">Free call 24/7</div>
                <div class="mobile-menu__contacts-title">800 060-0730</div>
            </a>
        </div>
    </n-drawer>
</template>

<script>
export default {
  name: 'HeaderMobileMenuComponent',
  data () {
    return {
            searchInput: "",
            searchDrawerVisble: false,
            mobileMenuDrawerWidth: 400,
            mobileMenuDrawerVisble: false,
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