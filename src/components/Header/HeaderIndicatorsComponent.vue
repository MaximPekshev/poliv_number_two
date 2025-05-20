<template>
    <div class="header__indicators">
        <!-- <div class="indicator">
            <a href="wishlist.html" class="indicator__button">
                <span class="indicator__icon">
                    <svg width="32" height="32">
                        <path d="M23,4c3.9,0,7,3.1,7,7c0,6.3-11.4,15.9-14,16.9C13.4,26.9,2,17.3,2,11c0-3.9,3.1-7,7-7c2.1,0,4.1,1,5.4,2.6l1.6,2l1.6-2
    C18.9,5,20.9,4,23,4 M23,2c-2.8,0-5.4,1.3-7,3.4C14.4,3.3,11.8,2,9,2c-5,0-9,4-9,9c0,8,14,19,16,19s16-11,16-19C32,6,28,2,23,2L23,2
    z" />
                    </svg>
                </span>
            </a>
        </div> -->
        <!-- <div class="indicator">
            <a href="account-login.html" class="indicator__button">
                <span class="indicator__icon">
                    <svg width="32" height="32">
                        <path d="M16,18C9.4,18,4,23.4,4,30H2c0-6.2,4-11.5,9.6-13.3C9.4,15.3,8,12.8,8,10c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.8-1.5,5.3-3.6,6.7
    C26,18.5,30,23.8,30,30h-2C28,23.4,22.6,18,16,18z M22,10c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S22,13.3,22,10z" />
                    </svg>
                </span>
                <span class="indicator__title">Hello, Log In</span>
                <span class="indicator__value">My Account</span>
            </a>
        </div> -->
        <div class="indicator">
            <router-link :to="{ name: 'cart' }" class="indicator__button">
                <span class="indicator__icon">
                    <svg width="32" height="32">
                        <circle cx="10.5" cy="27.5" r="2.5" />
                        <circle cx="23.5" cy="27.5" r="2.5" />
                        <path d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3
    l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14
    c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z" />
                    </svg>
                    <span class="indicator__counter">{{ cartQty }}</span>
                </span>
                <span class="indicator__title">Корзина</span>
                <span class="indicator__value">{{ cartAmount }}</span>
            </router-link>    
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderIndicatorsComponent',
  computed: {
        cartQty () {
            return this.$store.getters.cartQty
        },
        cartAmount () {
            return Number(this.$store.getters.cartAmount).toFixed(0)
        },
    }
}
</script>
