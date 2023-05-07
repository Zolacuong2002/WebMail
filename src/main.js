import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import vue3GoogleLogin from 'vue3-google-login'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {
  clientId: '52690711772-gmisnpjiiq3hdt40hmv2hfb6fq8msp6i.apps.googleusercontent.com'
})

app.mount('#app')
