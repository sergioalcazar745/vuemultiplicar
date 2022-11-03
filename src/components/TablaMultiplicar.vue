<template>
    <div>
        <h1>TablaMultiplicar</h1>
        <label>Introduce un número:</label>
        <input type="text" v-model="numero"/>
        <button @click="mostrarTabla()">Mostrar</button>
        <hr/>
        <table v-if="tabla.length > 0">
            <thead>
                <th>Resultado</th>
            </thead>
            <tbody>
                <div v-for="num in tabla" :key="num" v-html="num"></div>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",

    methods: {
        mostrarTabla(){
            this.tabla.splice(0, this.tabla.length)
            for (var i = 1; i <= 10; i++) {
                this.tabla.push("<tr><td>" + this.numero + " x " + i + " = " + this.numero * i + "</td></tr>")                   
            }
        }
    },

    data() {
        return {
            numero: 0,
            tabla: []
        }
    },
}
</script>

<style>

</style>