<template>
    <div class="site-footer__widget footer-links">
        <h5 class="footer-links__title">Информация</h5>
        <div class="footer-links_content">
            <ul class="footer-links__list">
                <li class="footer-links__item"><a href="#" class="footer-links__link">Калькулятор</a></li>
                <li class="footer-links__item"><a href="#" class="footer-links__link">Оплата</a></li>
                <li class="footer-links__item"><a href="#" class="footer-links__link">Гарантия и возврат</a></li>
                <li class="footer-links__item"><a href="#" class="footer-links__link">Доставка</a></li>
                <li class="footer-links__item"><a href="#" class="footer-links__link">Контакты</a></li>
            </ul>
            <ul class="footer-links__list">
                <li class="footer-links__item"><router-link :to="{ name: 'catalog' }" class="footer-links__link">Каталог</router-link></li>
                <li class="footer-links__item"><a href="#" class="footer-links__link">Заказать проект</a></li>
                <li class="footer-links__item"><a href="#" class="footer-links__link">Заказать монтаж</a></li>
                <li class="footer-links__item"><a href="#" class="footer-links__link">Запросить опт. Цены</a></li>
                <li class="footer-links__item"><a href="#" class="footer-links__link">Застройщикам ИЖС</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterLinksComponent',
  components: {
    // Add any child components here if needed
  }
}
</script>