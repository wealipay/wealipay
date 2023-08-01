import { createApp } from "vue";
import { createPinia } from "pinia";
import App from './App.vue';
import router from './router/index';
import 'vant/lib/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

const rootValue = 16
const rootWidth = 375
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = (rootValue * deviceWidth) / rootWidth + 'px'

app.mount('#app')