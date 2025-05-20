<template>
    <div></div>
</template>

<script>
import Axios from 'axios'
import {backendPath} from "@/main.js"

export default {
    name: "PageSEOComponent",
    methods: {
        /**
         * Метод для обновления SEO-данных страницы.
         * Выполняет запрос к API для получения списка SEO-данных,
         * находит данные для текущего пути страницы и обновляет
         * заголовок страницы, мета-описание и ключевые слова.
         */
        async updateSEO() {
            await Axios.get(backendPath + '/api/v1/page/')
                .then(response => {
                    // Получаем текущий абсолютный путь страницы
                    let path = window.location.origin + this.$route.fullPath
                    // Преобразуем данные из ответа API в список объектов SEO
                    let SEOList = response.data.data.map(item => {
                    return {
                        name: item.name,
                        seo_title: item.seo_title,
                        seo_description: item.seo_description,
                        seo_keywords: item.seo_keywords
                    }
                    })
                    // Находим SEO-данные для текущей страницы
                    let pageSEO = SEOList.find(page => page.name === path)
                    if (pageSEO) {
                        // Обновляем заголовок страницы
                        document.title = pageSEO.seo_title
                        // Обновляем мета-описание
                        document.querySelector('meta[name="description"]').setAttribute('content', pageSEO.seo_description)
                        // Обновляем ключевые слова
                        document.querySelector('meta[name="keywords"]').setAttribute('content', pageSEO.seo_keywords)
                    }
                })
                .catch(error => {
                    // Логируем ошибку в случае неудачного запроса
                    console.error("Error fetching SEO data:", error)
                })
        }
    },
    /**
     * Наблюдатель за изменением маршрута ($route).
     * Метод updateSEO() вызывается для обновления SEO-данных при каждом изменении маршрута.
    */
    watch: {
        '$route': {
            immediate: true,
            handler() {
                this.updateSEO()
            }
        }
    }
}
</script>