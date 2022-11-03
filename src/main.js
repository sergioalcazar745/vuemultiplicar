import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

const app = createApp(App)
app.config.globalProperties.$filters = {
    getOperacion(tabla, numero){
        return tabla + "x" + numero + "=" + tabla * numero;
    },
}
app.use(router).mount('#app')
