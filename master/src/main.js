import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import mLibs from './libs'
import { useREM } from './utils/flexible'

useREM()
createApp(App).use(router).use(mLibs).mount('#app')
