import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
createApp(App).use(PrimeVue).mount('#app')
