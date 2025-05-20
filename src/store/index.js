import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import goods_list from './Modules/Catalog/goods_list'
import good from './Modules/Catalog/good'
import categories_list from './Modules/Catalog/categories_list'
import cart from './Modules/cart'

export default createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        goods_list,
        good,
        categories_list,
        cart
    },
    plugins: [createPersistedState()]
})