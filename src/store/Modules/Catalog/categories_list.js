import Axios from 'axios'
import {backendPath} from "@/main.js"

export default {
    state: {
        categories_list: [],
		categories_list_loading: false,
    },
    getters: {
        categories_list: state => {
            return state.categories_list
        },
        getCategoryById: state => id => {
            return state.categories_list.find(category => category.id === id)
        },
        categories_list_loading: state => {
            return state.categories_list_loading
        }
    },
    mutations: {
        loadCategoriesList (state, payload) {
            state.categories_list = payload
        },
        categoriesListLoadingSwitch (state, payload) {
            state.categories_list_loading = payload
        }
    },
    actions: {
        loadCategoriesList ({commit}) {
            Axios.defaults.xsrfCookieName = 'csrftoken';
            Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
            let url = `${backendPath}/api/v1/catalog/data/`
            commit('categoriesListLoadingSwitch', true)
            Axios.get(url)
                .then((response) => {
                    commit('loadCategoriesList', response.data.data.menu)
                })
                .catch(function(error){
                    console.log(error);
                }).finally(() => {
                    commit('categoriesListLoadingSwitch', false)
                });
        },
    }
}