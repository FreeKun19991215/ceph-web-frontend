import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Table from './components/Table.vue'
import Title from './components/Title.vue'
import Multifunction from './components/Multifunction.vue'
import OperateDialog from './components/OperateDialog.vue'


const app = createApp(App)
app.use(router)
app.component('Table', Table)
app.component('Title', Title)
app.component('Multifunction', Multifunction)
app.component('OperateDialog', OperateDialog)
app.mount('#app')
