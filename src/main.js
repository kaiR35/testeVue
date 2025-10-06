import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './index.css'

const app = createApp(App)
app.use(PrimeVue)
app.component('Dropdown', Dropdown)
app.component('Calendar', Calendar)
app.component('InputNumber', InputNumber)
app.component('Button', Button)
app.mount('#app')
