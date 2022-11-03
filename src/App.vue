<template>
  <Menu/>
  <hr/>
  <router-view></router-view>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style scoped>

</style>
