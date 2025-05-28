<template>
    <div class="block">
        <div class="container">
            <div class="not-found">
                <div class="not-found__404">
                    Упсс! Ошибка 404
                </div>
                <div class="not-found__content">
                    <h1 class="not-found__title">Страница не найдена</h1>
                    <p class="not-found__text">
                        Похоже, мы не можем найти страницу, которую вы ищете...<br>
                        Попробуйте воспользоваться поиском.
                    </p>
                    <div class="not-found__search">
                        <HeaderSearchComponent />
                    </div>
                    <p class="not-found__text">
                        Или перейдите на Главную страницу.
                    </p>
                    <router-link :to="{ name: 'catalog' }" class="btn btn-secondary btn-sm" >Каталог</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderSearchComponent from '../Header/HeaderSearchComponent.vue'
export default {
    name: 'PageNotFoundComponent',
    components: {
        HeaderSearchComponent
    },
}
</script>

<style scoped>
.header__search {
    width: 100%;
}
</style>