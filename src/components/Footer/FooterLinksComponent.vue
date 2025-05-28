<template>
    <div class="site-footer__widget footer-links">
        <h5 class="footer-links__title">Информация</h5>
        <div class="footer-links_content">
            <ul class="footer-links__list">
                <li class="footer-links__item">
                    <router-link :to="{ name: 'catalog' }" class="footer-links__link">Каталог</router-link>
                </li>
                <li class="footer-links__item">
                    <router-link :to="{ name: 'dealers' }" class="footer-links__link">Дилерам</router-link>
                </li>
                <li class="footer-links__item">
                    <router-link :to="{ name: 'payment' }" class="footer-links__link">Оплата</router-link>
                </li>
                
            </ul>
            <ul class="footer-links__list">
                <li class="footer-links__item">
                    <router-link :to="{ name: 'delivery' }" class="footer-links__link">Доставка</router-link>
                </li>
                <li class="footer-links__item">
                    <router-link :to="{ name: 'warranty' }" class="footer-links__link">Гарантия/Возврат</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterLinksComponent',
  components: {
  }
}
</script>