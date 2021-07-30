import { createApp } from 'vue'
import App from './App.vue'
//@ts-ignore
import store from "./store"
//@ts-ignore
import  router from "./router"
createApp(App).use(store).use(router).mount('#app')
