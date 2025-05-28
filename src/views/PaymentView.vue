<template>
    <BreadcrumbComponent name="Оплата"  />
    <div class="container3 mb-4">
        <div class="post-view__body">
            <div class="post-view__item post-view__item-post">
                <div class="post-view__card post">
                    <div class="post__body typography">
                        <p>
                            После оформления заказа с Вами свяжется менеджер и подберёт для Вас удобный способ оплаты и доставки товара.
                        </p>
                        <p>
                            Для удобства оплаты покупки в сети «Магазин полива 1» мы предлагаем нашим клиентам различные способы оплаты заказов:
                        </p>
                        <p>
                            Оплата банковской картой по ссылке . При списывании денежных средств с карты вам на e-mail поступит кассовый онлайн чек о совершении покупки в нашей организации.
                        </p>
                        <p>
                            По безналичному расчету с зачислением денежных средств на расчетный счет организации. При формировании заказа укажите в комментарии необходимость в выставлении счета, и наши сотрудники вышлют все необходимые документы вам на e-mail.
                        </p>
                        <p>
                            Мобильные терминалы банка установлены во всех филиалах сети «Магазин полива 1», и при необходимости вы сможете оплатить заказ во время посещения торговой точки с карты любого банка, получив распечатанный чек.
                        </p>
                        <p>
                            Оплата наличными средствами – при посещении одного из филиалов сети вы сможете оплатить покупку наличными средствами через кассовый аппарат.
                        </p>
                        <p>
                            Оплата по QR-коду. Моментальное зачисление денег. Возможность оплаты в любое время суток без комиссии.
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
    name: 'PaymentView',
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