import './assets/main.css'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//// components
import BaseButton from './components/UI/BaseButton.vue'
import PlusIcon from './components/Icons/PlusIcon.vue'
import FrameIconPlus from './components/Icons/FrameIconPlus.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('PlusIcon', PlusIcon)
app.component('FrameIconPlus', FrameIconPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
