import Axios  from "axios"
import {backendPath} from "@/main.js"

export default {
    state: {
        regions: [],
        regionsLoading: false,
    },
    getters: {
        regions: state => {
            return state.regions
        },
        regionsLoading: state => {
            return state.regionsLoading
        }
    },
    mutations: {
        loadRegionsList (state, payload) {
            state.regions = payload
        },
        regionsLoadingSwitch (state, payload) {
            state.regionsLoading = payload
        }
    },
    actions: {
        fetchRegionsData ({commit}) {
            Axios.defaults.xsrfCookieName = 'csrftoken'
            Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
            let url = `${backendPath}/api/v1/cdek/location/regions/`
            commit('regionsLoadingSwitch', true)
            Axios.get(url)
                .then((response) => {
                    let regionsList = response.data.data
                    commit('loadRegionsList', regionsList)
                }).catch((error) => {
                    console.log(error)
                }).finally (() => {
                    commit('regionsLoadingSwitch', false)
                })
        }
    }
}