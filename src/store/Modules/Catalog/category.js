import Axios from 'axios'
import {backendPath} from "@/main.js"

export default {
    state: {
        category: [],
		category_info_loading: false,
    },
    getters: {
        category: state => {
            return state.category
        },
        categoryName: state => {
            return state.category.name
        },
        category_info_loading: state => {
            return state.category_info_loading
        }
    },
    mutations: {
        loadCategoryInfo (state, payload) {
            state.category = payload
        },
        categoryLoadingSwitch (state, payload) {
            state.category_info_loading = payload
        }
    },
    actions: {
        loadCategoryInfo ({commit}, id) {
            if (id!=="") {
                Axios.defaults.xsrfCookieName = 'csrftoken'
                Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
                let url = `${backendPath}/api/v1/catalog/category/?id=${id}`
                commit('goodLoadingSwitch', true)
                Axios.get(url)
                    .then((response) => {
                        let categoryInfo = response.data.data[0]
                        commit('loadCategoryInfo', categoryInfo)
                    }).catch((error) => {
                        console.log(error);
                    }).finally(() => {
                        commit('categoryLoadingSwitch', false)
                    });
            } else {
                commit('loadCategoryInfo', "")
            }
        },
        cleanCategoryInfo ({commit}) {
            commit('loadCategoryInfo', "")
        }
    }
}