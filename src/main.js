import { createApp } from 'vue'
import VueApexCharts from "vue3-apexcharts";
import router from './router';
import App from './App.vue'
import store from './store';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vClickOutside from "click-outside-vue3"


const app=createApp(App)
app.use(VueApexCharts);
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(vClickOutside)

app.mount('#app')
