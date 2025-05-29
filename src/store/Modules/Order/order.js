import Axios from 'axios'
import {backendPath} from "@/main.js"

export default {
    state: {
        orderCreationLoading: false,
        orderCreationStatus: {}
    },
    getters: {
        orderCreationLoading: state => {
            return state.orderCreationLoading
        },
        orderCreationStatus: state => {
            return state.orderCreationStatus
        }
    },
    mutations: {
        orderCreationLoadingSwitch (state, payload) {
            state.orderCreationLoading = payload
        },
        setOrderCreationStatus (state, payload) {
            state.orderCreationStatus = payload
        }
    },
    actions: {
        clearOrderCreationStatus ({commit}) {
            commit('setOrderCreationStatus', {})
        },
        // Асинхронное действие для оформления заказа
        async placeAnOrder({commit}, params) {
            // Включаем индикатор загрузки
            commit('orderCreationLoadingSwitch', true)
            // Очищаем статус создания заказа
            commit('setOrderCreationStatus', {})
            // Формируем объект данных для отправки на сервер
            let data = {
            "data": [{
                "items": params.cartItems, // Товары из корзины
            }]
            }
            // Формируем URL для запроса
            let url = `${backendPath}/api/v1/order/rain-block-ru/`
            // Добавляем имя пользователя
            data.data[0].name = params.userInfo.name
            // Добавляем телефон пользователя
            data.data[0].phone = params.userInfo.phone
            // Добавляем email пользователя
            data.data[0].email = params.userInfo.email
            // Отправляем POST-запрос на сервер для создания заказа
            await Axios({
                method: 'post',
                url: url,
                data: data,
            }).then(() => {
            // В случае успеха устанавливаем статус "успешно"
            commit('setOrderCreationStatus', { 
                status: 'success', 
                message: 'Заказ успешно создан', 
                comment: 'В ближайшее время с Вами свяжется наш менеджер для уточнения деталей заказа.'
            })
            }).catch(error => {
                // В случае ошибки выводим её в консоль
                console.log(error)
                // Устанавливаем статус "ошибка"
                commit('setOrderCreationStatus', { status: 'error', message: 'Не удалось создать заказ'})
            }).finally(() => {
                // Выключаем индикатор загрузки
                commit('orderCreationLoadingSwitch', false)
            })
        }
    }
}