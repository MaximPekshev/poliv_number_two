<template>
     <td class="cart-table__column cart-table__column--image">
        <div class="image image--type--product">
            <n-skeleton />
        </div>
    </td>
    <td class="cart-table__column cart-table__column--product">
        <n-skeleton />
    </td>
    <td class="cart-table__column cart-table__column--price"><n-skeleton /></td>
    <td class="cart-table__column cart-table__column--quantity">
        <div class="cart-table__quantity input-number">
            <n-skeleton />
        </div>
    </td>
    <td class="cart-table__column cart-table__column--total"><n-skeleton /></td>
    <td class="cart-table__column cart-table__column--remove">
        <n-skeleton />
    </td>
</template>

<script>
export default {
    name: 'CartLoadingItemComponent',
}
</script>

<style scoped>
.cart-table__column--price:before, .cart-table__column--quantity:before, .cart-table__column--total:before {
    content: " ";
}
</style>