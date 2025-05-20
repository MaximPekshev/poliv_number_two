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
                        <a href="#" class="main-menu__link">
                            Застройщикам
                        </a>
                    </li>
                    <li class="main-menu__item">
                        <a href="#" class="main-menu__link">
                            Оптовикам
                        </a>
                    </li>
                    <li class="main-menu__item">
                        <a href="#" class="main-menu__link">
                            Контакты
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header__navbar-phone phone">
            <a href="" class="phone__body">
                <div class="phone__title">Поддержка:</div>
                <div class="phone__number">800 060-0730</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderNavbarComponent',
}
</script>