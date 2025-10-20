import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import store from './store'
import mLibs from './libs'
import { useREM } from './utils/flexible'
import useTheme from './utils/theme'
//注册 svg-icons
import 'virtual:svg-icons-register'

useREM()
useTheme()
createApp(App).use(router).use(store).use(mLibs).mount('#app')
