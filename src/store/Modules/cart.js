export default {
    state: {
        cart: [],
        cart_loading: false,
        addCartItemMessage: "",
        delCartItemMessage: "",
    },
    getters: {
        cart: state => {
            return state.cart
        },
        cartQty: state => {
            return state.cart.length
        },
        cartAmount: state => {
            if (state.cart.length > 0) {
                return state.cart.reduce((acc,item) => acc += (item.quantity*item.good.price3), 0)
            } else {
                return 0
            }
        },
        cart_loading: state => {
            return state.cart_loading
        },
        sendCartResultMessage: state => {
            return state.sendCartResultMessage
        },
        addCartItemMessage: state => {
            return state.addCartItemMessage
        },
        delCartItemMessage: state => {
            return state.delCartItemMessage
        }
    },
    mutations: {
        addCartItem (state, payload) {
            let cartItem = state.cart.find(cartItem => cartItem.good.id === payload.good.id)
            if (cartItem) {
                cartItem.quantity += payload.quantity
            } else {
                state.cart.push(payload)
            }
        },
        delCartItem (state, payload) {
            let cartItem = state.cart.find(cartItem => cartItem.good.id === payload.good.id)
            if (cartItem) {
                if (cartItem.quantity <= payload.quantity) {
                    state.cart = state.cart.filter(cartItem => cartItem.good.id !== payload.good.id)
                }
                if (cartItem.quantity > payload.quantity) {
                    cartItem.quantity -= payload.quantity
                }
            }
        },
        setCartItem (state, payload) {
            let cartItem = state.cart.find(cartItem => cartItem.good.id === payload.good.id)
            if (cartItem) {
                cartItem.quantity = payload.quantity
            }
        },
        loadCartData (state, payload) {
            state.cart = payload
        },
        loadSendCartResultMessage (state, payload) {
            state.sendCartResultMessage = payload
        },
        loadAddCartItemMessage (state, payload) {
            state.addCartItemMessage = payload
        },
        loadDelCartItemMessage (state, payload) {
            state.delCartItemMessage = payload
        },
        cartLoadingSwitch (state, payload) {
            state.cart_loading = payload
        },
    },
    actions: {
        setCartLoadingStatus ({commit}, payload) {
            commit('cartLoadingSwitch', payload)
        },
        setAddCartItemMessage({commit}, payload) {
            commit('loadAddCartItemMessage', payload)
        },
        setDelCartItemMessage({commit}, payload) {
            commit('loadDelCartItemMessage', payload)
        },
        async addSetDelCartItem({commit}, params) {
            let action = params.action
            this.dispatch('setCartLoadingStatus', true)
            this.dispatch('setAddCartItemMessage', "")
            this.dispatch('setDelCartItemMessage', "")
            const promise =  new Promise((resolve) => {
                if (action === 'add') {
                    commit('addCartItem', {
                        good: params.good,
                        quantity: params.quantity
                    })
                } else if (action === 'del') {
                    commit('delCartItem', {
                        good: params.good,
                        quantity: params.quantity
                    })
                } else if (action === 'set') {
                    commit('setCartItem', {
                        good: params.good,
                        quantity: params.quantity
                    })
                }
                resolve()
            })
            promise.then(() => {
                this.dispatch('setCartLoadingStatus', false)
                if (action === 'add') {
                    this.dispatch('setAddCartItemMessage', "Товар(ы) добавлен(ы) в корзину")
                } else if (action === 'del') {
                    this.dispatch('setDelCartItemMessage', "Товар(ы) удален(ы) из корзины")
                }
            })
        },
        clearCart({commit}) {
            commit('loadCartData', [])
        }
    }
}