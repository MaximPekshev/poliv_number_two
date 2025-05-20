<template>
    <div class="block-header block-header--has-breadcrumb block-header--has-title">
      <div class="container">
          <div class="block-header__body">
              <nav class="breadcrumb block-header__breadcrumb" aria-label="breadcrumb">
                  <ol class="breadcrumb__list">
                      <li class="breadcrumb__spaceship-safe-area" role="presentation"></li>
                      <li class="breadcrumb__item breadcrumb__item--parent">
                          <router-link :to="{ name: 'catalog' }" class="breadcrumb__item-link">Каталог</router-link>
                      </li>
                      <li class="breadcrumb__item breadcrumb__item--current breadcrumb__item--last" aria-current="page">
                        <span
                            v-if="goodinfoLoading"
                            class="breadcrumb__item-link"
                        >
                            <n-skeleton :width="300" :height="20" />
                        </span>
                        <span
                            v-else
                            class="breadcrumb__item-link"
                        >
                            {{ good.name }}
                        </span>
                      </li>
                      <li class="breadcrumb__title-safe-area" role="presentation" style="--block-header-title-width: 219.375px;"></li>
                  </ol>
              </nav>
          </div>
      </div>
    </div>
    <div class="block-split">
        <div class="container">
            <div class="block-split__row row no-gutters">
                <div class="block-split__item block-split__item-content col-auto">
                    <div class="product product--layout--full">
                        <div v-if="goodinfoLoading" class="product__body">
                            <div class="product__card product__card--one"></div>
                            <div class="product__card product__card--two"></div>
                            <div class="product-gallery product-gallery--layout--product-full product__gallery" data-layout="product-full">
                                <n-image
                                    width="100%"
                                    :src="DefaultImage" 
                                    preview-disabled
                                />
                            </div>
                            <div class="product__header">
                                <h1 class="product__title"><n-skeleton style="min-width: 350px;" size="medium" width="100%" /></h1>
                                <div class="product__subtitle">
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__excerpt">
                                   <p><n-skeleton /></p>
                                   <p><n-skeleton /></p>
                                   <p><n-skeleton /></p>
                                </div>
                            </div>
                            <div class="product__info">
                                <div class="product__info-card" style="width: 100%;">
                                    <div class="product__info-body">
                                        <div class="product__prices-stock">
                                            <div class="product__prices">
                                                <div class="product__price product__price--current"><n-skeleton :width="150" /></div>
                                            </div>
                                        </div>
                                        <div class="product__meta">
                                            <table>
                                                <tbody><tr>
                                                    <th><n-skeleton /></th>
                                                    <td><n-skeleton /></td>
                                                </tr>
                                                <tr>
                                                    <th><n-skeleton /></th>
                                                    <td><n-skeleton /></td>
                                                </tr>
                                                <tr>
                                                    <th><n-skeleton /></th>
                                                    <td><n-skeleton /></td>
                                                </tr>
                                            </tbody></table>
                                        </div>
                                    </div>
                                    <div class="product__actions">
                                        <div class="product__actions-item product__actions-item--quantity">
                                            <div class="input-number">
                                                <n-skeleton size="medium" />
                                            </div>
                                        </div>
                                        <div class="product__actions-item product__actions-item--addtocart">
                                            <n-skeleton size="medium" />
                                        </div>
                                        <div class="product__actions-divider"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="product__body">
                            <div class="product__card product__card--one"></div>
                            <div class="product__card product__card--two"></div>
                            <div class="product-gallery product-gallery--layout--product-full product__gallery" data-layout="product-full">
                                <n-image
                                    width="100%"
                                    v-if="preview" 
                                    :src="preview" 
                                    :alt="good.name"
                                />
                                <n-image
                                    v-else
                                    width="100%"
                                    :src="DefaultImage" 
                                    preview-disabled
                                />
                            </div>
                            <div class="product__header">
                                <h1 class="product__title">{{ good.name }}</h1>
                                <div class="product__subtitle">
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__excerpt">
                                   <p v-html="good.description_html"></p>
                                </div>
                            </div>
                            <div class="product__info">
                                <div class="product__info-card" style="width: 100%;">
                                    <div class="product__info-body">
                                        <div class="product__prices-stock">
                                            <div class="product__prices">
                                                <div class="product__price product__price--current">{{ price }} &#8381;</div>
                                            </div>
                                        </div>
                                        <div class="product__meta">
                                            <table>
                                                <tbody><tr>
                                                    <th>Артикул</th>
                                                    <td>{{ good.art }}</td>
                                                </tr>
                                                <tr>
                                                    <th>Категория</th>
                                                    <td><a href="">{{ good.category.name }}</a></td>
                                                </tr>
                                                <tr>
                                                    <th>Остаток</th>
                                                    <td v-if="balance == 0 && phrase">{{ phrase.name }}</td>
                                                    <td v-else>{{ balance }} {{ good.okei }}</td>
                                                </tr>
                                            </tbody></table>
                                        </div>
                                    </div>
                                    <div class="product__actions">
                                        <div class="product__actions-item product__actions-item--quantity">
                                            <div class="input-number">
                                                <n-input-number 
                                                    v-model:value="qty"
                                                    :validator="validator"
                                                    :update-value-on-input="false"
                                                    :disabled="cartAddLoading"
                                                    size="large"
                                                    placeholder="Кол-во"
                                                />
                                            </div>
                                        </div>
                                        <div class="product__actions-item product__actions-item--addtocart">
                                            <n-spin :show="cartAddLoading">
                                                <button 
                                                    class="btn btn-primary btn-lg btn-block"
                                                    @click.prevent="addToCart"
                                                    :disabled="cartAddLoading"
                                                >
                                                    В корзину
                                                </button>
                                            </n-spin>
                                        </div>
                                        <div class="product__actions-divider"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="block-space block-space--layout--divider-nl"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { backendPath } from '@/main.js'
import DefaultImage from '@/assets/images/product-1-700x700.jpg'
export default {
  name: 'GoodContentComponent',
  setup() {
        return {
            validator: (x) => x > 0,
        }
    },  
    data () {
        return {
            DefaultImage,
            qty: 1,
            cartAddLoading: false,
        }
    },
    computed: {
        good () {
            return this.$store.getters.good
        },
        goodInfoRequestError () {
            return this.$store.getters.goodInfoRequestError
        },
        category () {
            return this.good.category
        },
        balance () {
            return Math.floor(this.good.balance)
        },
        goodinfoLoading () {
            return this.$store.getters.good_info_loading
        },
        preview () {
            if (this.good.preview) {
                return backendPath + this.good.preview.url
            }
            return ""
        },
        price () {
            return Number(this.good.price3).toFixed(0)
        },
        phrase () {
            return this.good.phrase
        },
    },
    methods: {
        loadGoodInfo(id) {
            this.$store.dispatch('loadGoodInfo', id)
        },
        addToCart() {
            this.cartAddLoading = true
            setTimeout(() => {
                this.$store.dispatch('addSetDelCartItem', {
                    good: this.good, 
                    quantity: this.qty,
                    action: 'add'
                }).then(() => {
                    this.cartAddLoading = false
                    this.qty = 1
                })
            }, 1000)
            
        },
    },
    watch: {
        '$route': {
            immediate: true,
            handler() {
                this.loadGoodInfo(this.$route.params.good_id)
            },
        },
        good: {
            deep: true,
            handler() {
                document.title = this.good.seo_cleaned_title
                document.querySelector('meta[name="keywords"]').setAttribute('content', this.good.seo_cleaned_keywords)
                document.querySelector('meta[name="description"]').setAttribute('content', this.good.seo_cleaned_description)
            }
        },
    },

}
</script>