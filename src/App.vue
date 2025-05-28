<template>
  <n-config-provider :themeOverrides="themeOverrides">
    <n-modal-provider>
      <n-message-provider>
        <div class="site">
            <HeaderMobileMenuComponent />
            <HeaderComponent/>
            <div class="site__body">
                <router-view/>
                <MessageComponent />
            </div>
            <FooterComponent/>
        </div>
      </n-message-provider>
    </n-modal-provider>
  </n-config-provider>
</template>

<script>
import { NConfigProvider } from 'naive-ui'
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import HeaderMobileMenuComponent from '@/components/Header/HeaderMobileMenuComponent.vue'
import MessageComponent from '@/components/Widgets/MessageComponent.vue'
export default {
  setup() {
    const themeOverrides = {
      common: {
        primaryColorHover: '#262626',
        primaryColorPressed: '#262626',
      },
      Input: {
        caretColor: '#262626',
        boxShadowFocus: '0 0 0 2px rgba(38, 38, 38, 0.2)',
      },
      Spin: {
        color: '#262626',
      }
    }
    return {
      themeOverrides
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    HeaderMobileMenuComponent,
    NConfigProvider,
    MessageComponent
  },
  watch: {
      '$route': {
          immediate: true,
          handler() {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              })
          }
      }
  }
}
</script>