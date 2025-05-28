<template>
    <div class="header__logo">
        <a href="#" class="logo">
            <div class="logo__slogan">
                Auto parts for Cars, trucks and motorcycles
            </div>
            <div class="logo__image">
                <!-- logo -->
                <router-link :to="{ name: 'catalog' }">
                    <img :src="logo" width="168" />
                </router-link>
                <!-- logo / end -->
            </div>
        </a>
    </div>
</template>

<script>
import logo from '@/assets/images/logo/logo_black.png'
export default {
  name: 'HeaderLogoComponent',
  data() {
    return {
      logo
    }
  },
}
</script>