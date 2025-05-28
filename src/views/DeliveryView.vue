<template>
    <BreadcrumbComponent name="Доставка"  />
    <div class="container3 mb-4">
        <div class="post-view__body">
            <div class="post-view__item post-view__item-post">
                <div class="post-view__card post">
                    <div class="post__body typography">
                        <h2>По России и странам СНГ доставка осуществляется транспортными компаниями и Почтой России, согласно их тарифам:</h2>
                        <ul>
                            <li>«Деловые линии»</li>
                            <li>«ПЭК»</li>
                            <li>«СДЭК»</li>
                            <li>«Деловые линии»</li>
                        </ul>
                        <p>
                            Так же возможны другие ТК по согласованию.
                        </p>
                        <p>
                            Отправка товара осуществляется в течении 1-2 рабочих дней, после получения 100% оплаты за товар. Срок доставки зависит от выбранной транспортной компании и региона доставки.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PageSEOComponent />
</template>

<script>
import { defaultSEO } from '@/main'
import BreadcrumbComponent from '@/components/Basic/BreadcrumbComponent.vue'
import PageSEOComponent from '@/components/Widgets/PageSEOComponent.vue'
export default {
    name: 'DeliveryView',
    components: {
        BreadcrumbComponent,
        PageSEOComponent
    },
    watch: {
        '$route': {
            immediate: true,
            handler() {
                document.title = defaultSEO.title
                document.querySelector('meta[name="keywords"]').setAttribute('content', defaultSEO.keywords)
                document.querySelector('meta[name="description"]').setAttribute('content', defaultSEO.description)
            }
        }
    }
}
</script>

<style scoped>
.post__body h2 {
    text-align: center;
}
</style>