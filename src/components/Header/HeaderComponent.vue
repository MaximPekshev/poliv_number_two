<template>
    <header class="site__header">
        <div class="header">
            <div class="header__megamenu-area megamenu-area"></div>
            <div class="header__topbar-classic-bg"></div>
            <TopbarComponent />
            <NavbarComponent />
            <LogoComponent />
            <SearchComponent />
            <IndicatorsComponent />
        </div>
    </header>
</template>

<script>
import TopbarComponent from '@/components/Header/HeaderTopbarComponent.vue'
import NavbarComponent from '@/components/Header/HeaderNavbarComponent.vue'
import LogoComponent from '@/components/Header/HeaderLogoComponent.vue'
import SearchComponent from '@/components/Header/HeaderSearchComponent.vue'
import IndicatorsComponent from '@/components/Header/HeaderIndicatorsComponent.vue'


export default {
  name: 'HeaderComponent',
  components: {
    TopbarComponent,
    NavbarComponent,
    LogoComponent,
    SearchComponent,
    IndicatorsComponent,
  }
}
</script>