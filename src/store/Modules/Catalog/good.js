import Axios from 'axios'
import {backendPath} from "@/main.js"

export default {
    state: {
        good: {},
        goodInfoRequestError: false,
		good_info_loading: false,
    },
    getters: {
        good: state => {
            return state.good
        },
        goodsName: state => {
            return state.good.name
        },
        good_info_loading: state => {
            return state.good_info_loading
        },
        goodInfoRequestError: state => {
            return state.goodInfoRequestError
        }
    },
    mutations: {
        loadGoodInfo (state, payload) {
            state.good = payload
        },
        goodLoadingSwitch (state, payload) {
            state.good_info_loading = payload
        },
        setGoodinfoRequestError (state, payload) {
            state.goodInfoRequestError = payload
        }
    },
    actions: {
        loadGoodInfo ({commit}, id) {
            Axios.defaults.xsrfCookieName = 'csrftoken'
            Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
            let url = `${backendPath}/api/v1/catalog/good/?id=${id}`
            commit('goodLoadingSwitch', true)
            commit('setGoodinfoRequestError', false)
            Axios.get(url)
                .then((response) => {
                    let goodInfo = response.data.data[0]
                    commit('loadGoodInfo', goodInfo)
                }).catch((error) => {
                    console.log(error)
                    commit('setGoodinfoRequestError', true)
                }).finally(() => {
                    commit('goodLoadingSwitch', false)
                })
        },
    }
}