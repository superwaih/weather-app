import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag,  BiInfoCircle,IoSunny, HiPlusSm  } from "oh-vue-icons/icons";

import './assets/main.css'
addIcons(FaFlag,  BiInfoCircle, IoSunny, HiPlusSm);
const app = createApp(App).component("v-icon", OhVueIcon)

app.use(router)

app.mount('#app')
