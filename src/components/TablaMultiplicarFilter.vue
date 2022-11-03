<template>
    <div>
        <h1>TablaMultiplicarFilter</h1>
        <label>Introduce un número:</label>
        <input type="text" v-model="numero"/>
        <hr/>
        <table v-if="!isNaN(this.numero) && this.numero > 0">
            <thead>
                <th>Resultado</th>
            </thead>
            <tbody>
                <tr v-for="num in 10" :key="num">
                    <td>{{$filters.getOperacion(this.numero, num)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicarFilter",
    data() {
        return {
            numero: 0,
        }
    },
}
</script>

<style>

</style>