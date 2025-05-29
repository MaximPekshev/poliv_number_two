<template>
    <div class="block">
        <div class="container">
            <div v-if="cartQty == 0" class="cart">
                <div class="not-found__content" style="text-align: center; width: 100%;">
                    <h3 class="not-found__title">Ваша корзина пуста</h3>
                    <router-link class="btn btn-primary" :to="{ name: 'catalog' }">На главную</router-link>
                </div>
            </div>
            <div v-else class="cart">
                <div class="cart__table cart-table">
                    <table class="cart-table__table">
                        <thead class="cart-table__head">
                            <tr class="cart-table__row">
                                <th class="cart-table__column cart-table__column--image"></th>
                                <th class="cart-table__column cart-table__column--product">Товар</th>
                                <th class="cart-table__column cart-table__column--price">Цена</th>
                                <th class="cart-table__column cart-table__column--quantity">Кол-во</th>
                                <th class="cart-table__column cart-table__column--total">Сумма</th>
                                <th class="cart-table__column cart-table__column--remove"></th>
                            </tr>
                        </thead>
                        <tbody v-if="cart_loading" class="cart-table__body">
                            <tr 
                                class="cart-table__row"
                                v-for="item in 4"
                                :key="item.id"
                            >
                                <CartLoadingItemComponent />
                            </tr>
                        </tbody>
                        <tbody v-else class="cart-table__body">
                            <tr 
                                class="cart-table__row"
                                v-for="item in cartItems"
                                :key="item.id"
                            >
                                <CartItemComponent 
                                    :cartItem="item"
                                />
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="cart__totals">
                    <div class="card">
                        <div class="card-body card-body--padding--2">
                            <h3 class="card-title">Итог</h3>
                            <table class="cart__totals-table">
                                <thead>
                                    <tr>
                                        <th>Сумма</th>
                                        <td>{{ cartAmount }}</td>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Итого</th>
                                        <td>{{ cartAmount }}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <button 
                                @click.prevent="createOrderFormVisible=true" 
                                class="btn btn-primary btn-xl btn-block"
                            >
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="block-space block-space--layout--before-footer"></div>

    <!-- Модальное окно для отображения статуса оформления заказа (успех или ошибка) -->
    <n-modal 
        :show="orderCreationShowModal"
        :close-on-esc="false"
        :mask-closable="false"
    >
        <n-card
            style="width: 600px"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
        >
        <div>
            <n-result :status="orderCreationStatus.status" :title="orderCreationStatus.message">
                <template #footer>
                    {{ orderCreationStatus.comment }}
                </template>
            </n-result>
        </div>
        <template #footer>
            <div class="order_button modal-footer">
                <button 
                    class="btn btn-primary btn-lg message-btn-block btn-block"
                    @click="okButtonHandler"
                >
                    OK
                </button>
            </div>
        </template>
        </n-card>
    </n-modal>

    <!--
        Модальное окно для оформления заказа.

        Компонент CreateOrderFormComponent отображается как модальное окно, если значение createOrderFormVisible истинно.
        - :showModal="createOrderFormVisible" — управляет видимостью модального окна.
        - :formLoading="orderCreationLoading" — отображает индикатор загрузки во время создания заказа.
        - @close-no-auth-form-event — событие закрытия формы без авторизации, устанавливает createOrderFormVisible в false.
        - @place-an-order — событие оформления заказа, вызывает функцию placeAnOrder.
    -->
    <CreateOrderFormComponent 
        :showModal="createOrderFormVisible" 
        :formLoading="orderCreationLoading"
        @close-no-auth-form-event="createOrderFormVisible=false"
        @place-an-order="placeAnOrder"
    />
</template>

<script>
import CartItemComponent from '@/components/Cart/CartItemComponent.vue'
import CartLoadingItemComponent from '@/components/Cart/CartLoadingItemComponent.vue'
import CreateOrderFormComponent from '@/components/Widgets/CreateOrderFormComponent.vue'
export default {
    name: 'CartContentComponent',
    data() {
        return {
            createOrderFormVisible: false,
        }
    },
    components: {
        CartItemComponent,
        CartLoadingItemComponent,
        CreateOrderFormComponent
    },
    computed: {
        // Получаем список товаров в корзине из геттеров Vuex
        cartItems() {
            return this.$store.getters.cart
        },
        // Получаем количество товаров в корзине из геттеров Vuex
        cartQty() {
            return this.$store.getters.cartQty
        },
        // Получаем общую сумму корзины из геттеров Vuex
        cartAmount() {
            return this.$store.getters.cartAmount
        },
        // Получаем состояние загрузки корзины из геттеров Vuex
        cart_loading() {
            return this.$store.getters.cart_loading
        },
        // Получаем состояние загрузки оформления заказа из геттеров Vuex
        orderCreationLoading () {
            return this.$store.getters.orderCreationLoading
        },
        // Получаем статус оформления заказа из геттеров Vuex
        orderCreationStatus () {
            return this.$store.getters.orderCreationStatus
        },
        // Определяем, показывать ли модальное окно статуса заказа
        orderCreationShowModal () {
            if (this.orderCreationStatus.status) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        // Метод для удаления одного товара из корзины
        removeItem(item) {
            // Диспатчим экшен Vuex для удаления товара
            this.$store.dispatch('removeFromCart', item)
        },
        // Метод для полной очистки корзины
        clearCart() {
            // Диспатчим экшен Vuex для очистки корзины
            this.$store.dispatch('clearCart')
        },
        // Обработчик кнопки OK в модальном окне после оформления заказа
        okButtonHandler () {
            // Если заказ успешно оформлен
            if (this.orderCreationStatus.status == 'success') {
                // Перенаправляем пользователя на главную страницу каталога
                this.$router.push({ name: 'catalog', query: { page: 1}})
                // Очищаем корзину
                this.$store.dispatch('clearCart')
                // Если произошла ошибка при оформлении заказа
            } else if (this.orderCreationStatus.status == 'error') {
                // Перенаправляем пользователя обратно в корзину
                this.$router.push({ name: 'cart'})
            }
            // Очищаем статус оформления заказа в хранилище
            this.$store.dispatch('clearOrderCreationStatus')
        },
        // Метод для оформления заказа, принимает данные пользователя
        placeAnOrder (userData) {
            // Формируем список товаров из корзины с нужными полями
            let itemsList = this.cartItems.map((item) => {
            return {
                good_id: item.good.id, // ID товара
                quantity: Number(item.quantity).toFixed(2), // Количество товара (2 знака после запятой)
                price: Number(item.good.price3).toFixed(2), // Цена за единицу (2 знака после запятой)
                summ: (item.quantity * item.good.price3).toFixed(2) // Сумма по позиции (2 знака после запятой)
            }
            })
            // Объединяем товары и данные пользователя в один объект
            let data = {
                cartItems: itemsList,
                userInfo: userData
            }
            // Отправляем действие Vuex для оформления заказа
            this.$store.dispatch('placeAnOrder', data)
                .then(() => {
                    // После успешного оформления скрываем форму и очищаем корзину
                    this.createOrderFormVisible = false
                    this.$store.dispatch('clearCart')
                })
                .catch((error) => {
                    // В случае ошибки выводим её в консоль
                    console.error('Ошибка при оформлении заказа:', error)
                })
        }
    }
}
</script>

<style scoped>
.order_button.modal-footer {
    justify-content: center;
}
.message-btn-block {
    max-width: 150px;
}
</style>