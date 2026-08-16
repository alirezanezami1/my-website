import './assets/main.css'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//// components
import BaseButton from './components/UI/BaseButton.vue'
import PlusIcon from './components/Icons/PlusIcon.vue'
import TitleButton from './components/UI/TitleButton.vue'
import FrameIconPlus from './components/UI/FrameIconPlus.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('PlusIcon', PlusIcon)
app.component('TitleButton', TitleButton)
app.component('FrameIconPlus', FrameIconPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
