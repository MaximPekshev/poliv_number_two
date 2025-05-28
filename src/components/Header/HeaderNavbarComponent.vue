<template>
    <div class="header__navbar">
        <div class="header__navbar-menu">
            <div class="main-menu">
                <ul class="main-menu__list">
                    <li class="main-menu__item">
                        <router-link :to="{ name: 'catalog' }" class="main-menu__link">
                            Каталог
                        </router-link>
                    </li>
                    <li class="main-menu__item">
                        <router-link :to="{ name: 'dealers' }" class="main-menu__link">
                            Дилерам
                        </router-link>
                    </li>
                    <li class="main-menu__item">
                        <router-link :to="{ name: 'payment' }" class="main-menu__link">
                            Оплата
                        </router-link>
                    </li>
                    <li class="main-menu__item">
                        <router-link :to="{ name: 'delivery' }" class="main-menu__link">
                            Доставка
                        </router-link>
                    </li>
                    <li class="main-menu__item">
                        <router-link :to="{ name: 'warranty' }" class="main-menu__link">
                            Гарантия/Возврат
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header__navbar-phone phone">
            <a href="tel:+79205772244" class="phone__body">
                <n-flex align="center" justify="center">
                    <div class="phone__title"><i class="fa fa-phone-square" aria-hidden="true"></i></div>
                    <div class="phone__number">89205772244</div>
                </n-flex>
            </a>
        </div>
        <div class="header__navbar-phone phone">
            <a href="mailto:89205772244@mail.ru" class="phone__body">
                <n-flex align="center" justify="center">
                    <div class="phone__title"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                    <div class="phone__number">89205772244@mail.ru</div>
                </n-flex>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderNavbarComponent',
}
</script>

<style scoped>
.phone__title {
    font-size: 20px;
}
.phone__body .n-flex {
    gap: 0px 0px !important; 
}
</style>