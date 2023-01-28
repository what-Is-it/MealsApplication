import { createApp } from 'vue'
import './style.css'
import router from './router'
import store from './store/index'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
