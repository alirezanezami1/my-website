import './assets/main.css'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//// components
import BaseButton from './components/UI/BaseButton.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.use(createPinia())
app.use(router)

app.mount('#app')
