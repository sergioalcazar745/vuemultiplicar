import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';
import TablaMultiplicarFilter from './components/TablaMultiplicarFilter.vue';

const misRutas = [
    {
        path: "/", component: Home
    },

    {
        path: "/tabla-multiplicar", component: TablaMultiplicar
    },

    {
        path: "/tabla-multiplicar-filter", component: TablaMultiplicarFilter
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: misRutas
})

export default router;