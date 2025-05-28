<template>
    <BreadcrumbComponent name="Гарантия/Возврат"  />
    <div class="container3 mb-4">
        <div class="post-view__body">
            <div class="post-view__item post-view__item-post">
                <div class="post-view__card post">
                    <div class="post__body typography">
                        <h2>Правила и условия возврата товара:</h2>
                        <p>
                            Потребитель вправе отказаться от товара в любое время до его передачи, а после передачи товара - в течение 14 дней.
                        </p>
                        <p>
                            Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские свойства, а также документ, подтверждающий факт и условия покупки указанного товара
                        </p>
                        <p>
                            Потребитель не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его человеком
                        </p>
                        <p>
                            При отказе потребителя от товара продавец должен возвратить ему денежную сумму, уплаченную потребителем по договору, за исключением расходов продавца на доставку от потребителя возвращенного товара, не позднее чем через десять дней со дня предъявления потребителем соответствующего требования
                        </p>
                        <h2>Правила и условия возврата товара:</h2>
                        <p>
                            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> связаться с нами по телефону 8 (920) 558-1808
                        </p>
                        <p>
                            Заполнить «Заявление о возврате денежных средств», которое высылается по запросу Компанией на электронный адрес, и оправить его вместе с приложением копии паспорта по адресу 89205581808@mail.ru
                        </p>
                        <p>
                            Возврат денежных средств будет осуществлен на банковскую карту в течение 21 (двадцати одного) рабочего дня со дня получения «Заявления о возврате денежных средств» Компанией, за исключением расходов продавца на доставку от потребителя возвращенного товара.
                        </p>
                        <p>
                            Сумма возврата будет равняться сумме покупки. Срок рассмотрения Заявления и возврата денежных средств начинает исчисляться с момента получения Компанией Заявления и товара, рассчитывается в рабочих днях без учета праздников/выходных дней.
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
    name: 'WarrantyView',
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