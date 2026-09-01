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

//// toastification
import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('PlusIcon', PlusIcon)
app.component('TitleButton', TitleButton)
app.component('FrameIconPlus', FrameIconPlus)

app.use(createPinia())
app.use(router)
app.use(Toast, {
  position: 'top-center',
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: false,
  icon: true,
  rtl: true,
  bodyClassName: 'custom-toast',
})

app.mount('#app')
