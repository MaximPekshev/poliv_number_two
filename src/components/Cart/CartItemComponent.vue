<template>
    <td class="cart-table__column cart-table__column--image">
        <div class="image image--type--product">
            <router-link :to="{ name: 'good', params: { good_id: good.id}}" class="image__body">
                <img v-if="preview" class="image__tag" :src="preview" :alt="good.name" width="50">
                <img v-else class="image__tag" :src="DefaultImage" alt="" width="50">
            </router-link>
        </div>
    </td>
    <td class="cart-table__column cart-table__column--product">
        <router-link 
            :to="{ name: 'good', params: { good_id: good.id} }" 
            class="cart-table__product-name"
        >   
            {{ good.name }}
        </router-link>
        <ul class="cart-table__options">
            <li>Арт: {{ cartItem.good.art }}</li>
            <!-- <li>Material: Aluminium</li> -->
        </ul>
    </td>
    <td class="cart-table__column cart-table__column--price" data-title="Price">{{ price }}</td>
    <td class="cart-table__column cart-table__column--quantity" data-title="Quantity">
        <div class="cart-table__quantity input-number">
            <n-input-number 
            v-model:value="qty" 
            size="large" 
            @update:value="setGoodValue"
            :validator="validator"
            :update-value-on-input="false"
            />
        </div>
    </td>
    <td class="cart-table__column cart-table__column--total" data-title="Total">{{ amount }}</td>
    <td class="cart-table__column cart-table__column--remove">
        <button 
            @click.prevent="deleteGoodValue"
            type="button" 
            class="cart-table__remove btn btn-sm btn-icon btn-muted"
        >
            <svg width="12" height="12">
                <path d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
C11.2,9.8,11.2,10.4,10.8,10.8z"></path>
            </svg>
        </button>
    </td>
</template>

<script>
import DefaultImage from '@/assets/images/product-1-245x245.jpg'
import {backendPath} from "@/main.js"
export default {
    name: 'CartItemComponent',
    props: ["cartItem"],
    setup() {
        return {
            validator: (x) => x > 0,
        }
    }, 
    data () {
        return {
            DefaultImage,
            qty: Number(this.cartItem.quantity)
        }
    },
    computed: {
        good () {
            return this.cartItem.good
        },
        preview () {
            if (this.good.preview) {
                return backendPath + this.good.preview.url
            }
            return ""
        },
        price () {
            return Number(this.cartItem.good.price3).toFixed(0)
        },
        amount () {
            return (this.qty * Number(this.price)).toFixed(0)
        }
    },
    methods: {
        setGoodValue () {
            this.$store.dispatch('addSetDelCartItem',
            { 
                good: this.cartItem.good, 
                quantity: this.qty, 
                action: 'set' 
            })
        },
        deleteGoodValue () {
            this.$store.dispatch('addSetDelCartItem',
            { 
                good: this.cartItem.good, 
                quantity: this.qty, 
                action: 'del' 
            })
        }
    }
}
</script>