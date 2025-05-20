<template>
    <div class="product-card">
        <div class="product-card__image">
            <div class="image image--type--product">
                <router-link
                    :to="{ name: 'good', params: { good_id: id}}"
                    class="image__body"
                >
                    <img v-if="imageURL" class="image__tag" :src="imageURL" alt="">
                    <img v-else class="image__tag" :src="DefaultImage" alt="">
                </router-link>
            </div>
        </div>
        <div class="product-card__info">
            <div class="product-card__meta"><span class="product-card__meta-title">арт:</span> {{ good.art }}</div>
            <div class="product-card__name">
                <div>
                    <router-link
                        :to="{ name: 'good', params: { good_id: id}}"
                    >
                        {{ name }}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="product-card__footer">
            <div class="product-card__prices">
                <div class="product-card__price product-card__price--current"><span>Цена: </span>{{ price }} &#8381;</div>
            </div>
            <n-spin :show="cartAddLoading">
                <button 
                    class="product-card__addtocart-icon" 
                    type="button" 
                    aria-label="Add to cart"
                    @click.prevent="addToCart"
                    :disabled="cartAddLoading"
                >
                    <!-- <svg width="20" height="20">
                        <circle cx="7" cy="17" r="2"></circle>
                        <circle cx="15" cy="17" r="2"></circle>
                        <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                    </svg> -->
                    <i class="fa fa-cart-plus"></i>
                </button>
            </n-spin>
        </div>
    </div>
</template>

<script>
import DefaultImage from '@/assets/images/product-1-245x245.jpg'
import {backendPath} from "@/main.js"
export default {
  name: 'CatalogGoodComponent',
  props: ["goodInfo", "manufacturer", "images"],
  setup() {
    return {
        validator: (x) => x > 0,
    }
    },
    data () {
        return {
            DefaultImage,
            id: this.goodInfo.id,
            name: this.goodInfo.name,
            okei: this.goodInfo.okei,
            phrase: this.goodInfo.phrase,
            balance: Math.floor(this.goodInfo.balance),
            image: this.goodInfo.preview,
            manufacturerName: this.manufacturer ? this.manufacturer.name : "",
            wishlistAddDelLoading: false,
            good: this.goodInfo,
            qty: 1,
            cartAddLoading: false,
        }
    },
    computed: {
        oldPrice () {
            return Number(this.goodInfo.price3).toFixed(0)
        },
        price () {
            return Number(this.goodInfo.price3).toFixed(0)
        },
        imageURL () {
            if (this.image) {
                return (backendPath + this.image.url)
            }
            return ""
        }
    },
    methods: {
        addToCart() {
            this.cartAddLoading = true
            setTimeout(() => {
                this.$store.dispatch('addSetDelCartItem', {
                    good: this.good, 
                    quantity: this.qty,
                    action: 'add'
                }).then(() => {
                    this.cartAddLoading = false
                })
            }, 1000)
            
        },
    }
}
</script>