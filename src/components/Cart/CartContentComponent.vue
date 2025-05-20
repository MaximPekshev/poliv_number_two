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
                                <tbody>
                                    <tr>
                                        <th>Доставка</th>
                                        <td>
                                            00.00
                                            <div>
                                                <a href="#" disabled >Рассчитать доставку</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Итого</th>
                                        <td>{{ cartAmount }}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <button disabled class="btn btn-primary btn-xl btn-block" href="#">
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="block-space block-space--layout--before-footer"></div>
</template>

<script>
import CartItemComponent from '@/components/Cart/CartItemComponent.vue'
import CartLoadingItemComponent from '@/components/Cart/CartLoadingItemComponent.vue'
export default {
    name: 'CartContentComponent',
    components: {
        CartItemComponent,
        CartLoadingItemComponent
    },
    computed: {
        cartItems() {
            return this.$store.getters.cart
        },
        cartQty() {
            return this.$store.getters.cartQty
        },
        cartAmount() {
            return this.$store.getters.cartAmount
        },
        cart_loading() {
            return this.$store.getters.cart_loading
        }
    },
    methods: {
        removeItem(item) {
            this.$store.dispatch('removeFromCart', item)
        },
        clearCart() {
            this.$store.dispatch('clearCart')
        }
    }
}
</script>