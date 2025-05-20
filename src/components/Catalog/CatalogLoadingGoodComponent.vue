<template>
    <div class="product-card">
        <div class="product-card__image">
            <div class="image image--type--product">
                <a class="image__body">
                    <img class="image__tag" :src="DefaultImage" alt="">
                </a>
            </div>
        </div>
        <div class="product-card__info">
            <div class="product-card__meta">
                <span class="product-card__meta-title">
                    <n-skeleton />
                </span> <n-skeleton />
            </div>
            <div class="product-card__name">
                <div>
                    <a>
                        <n-skeleton />
                    </a>
                </div>
            </div>
        </div>
        <div class="product-card__footer">
            <div class="product-card__prices">
                <n-skeleton />
            </div>
        </div>
    </div>
</template>

<script>
import DefaultImage from '@/assets/images/product-1-245x245.jpg'
export default {
  name: 'CatalogLoadingGoodComponent',
  data () {
    return {
        DefaultImage,
    }
  },
}
</script>