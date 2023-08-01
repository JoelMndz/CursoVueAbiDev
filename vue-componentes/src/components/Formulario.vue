<template>
  <div>
    <h1>Formulario</h1>
    <input type="text" v-model="nombre">
    <input type="date" v-model="fecha">
  </div>
  <p>{{ nombre }} / {{ fecha }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
const nombre = ref('')
const fecha = ref('')
</script>

<style scoped></style>