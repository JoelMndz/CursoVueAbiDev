<template>
  <Navbar />
  <RouterView />
  <footer>
    2023
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';

</script>


<style scoped>

</style>
