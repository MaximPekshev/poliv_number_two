<template>
    <div class="site-footer__widget footer-contacts">
        <img :src="logo" alt="" width="300" class="footer-contacts__logo" />
        <div class="footer-contacts__text">
            Rain-block профессиональные системы автополива
        </div>
        <address class="footer-contacts__contacts">
            <dl>
                <dt>Телефон</dt>
                <dd>8 (920) 577-2244</dd>
            </dl>
            <dl>
                <dt>Email</dt>
                <dd>89205772244@mail.ru</dd>
            </dl>
            <dl>
                <dt>Адрес</dt>
                <dd></dd>
            </dl>
            <dl>
                <dt>Режим работы</dt>
                <dd></dd>
            </dl>
        </address>
    </div>
</template>

<script>
import logo from '@/assets/images/logo/logo_white.png'
export default {
  name: 'FooterContactComponent',
  data () {
    return {
      logo
    }
  },
  components: {
    // Add any child components here if needed
  }
}
</script>

<style scoped>
.footer-contacts__logo {
    padding-bottom: 30px;
}
</style>