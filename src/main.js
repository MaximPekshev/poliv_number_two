import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalCookiesConfig } from "vue3-cookies"
import naive from "naive-ui"

export const backendPath = 'https://backend.magazin-poliva1.ru'
// export const backendPath = 'http://localhost:2345'
export const defaultSEO = { 
    title: 'Rain-block профессиональные системы автополива',
    description: 'Rain-block профессиональные системы автополива',
    keywords: 'автополив, полив, системы автополива, дождевание, капельный полив, полив газона, полив растений, полив сада',
}

export const cookiesToken = '8b82bc04d9ad3c6735960717400faeaa0dd863c77649d361d41e8b0053f32620'

globalCookiesConfig({
    expireTimes: "7d",
})

createApp(App)
    .use(naive)
    .use(store)
    .use(router)
    .mount('#app')
