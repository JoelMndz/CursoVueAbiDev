<template>
  <div>
    <h1>Formulario</h1>
    <input type="text" v-model="nombre">
    <input type="date" v-model="fecha">
  </div>
  <p>{{ nombre }} / {{ fecha }}</p>
  <div>
    <input 
    v-model="aceptar" 
    id="terminos" 
    type="checkbox">
    <label for="terminos">Acepta los temrinos y condiciones</label>
  </div>
  <pre>{{ aceptar }}</pre>
  <div v-if="aceptar">
    <div>
      <label for="A">Python</label>
      <input
        v-model="lenguajes" 
        type="checkbox" id="A" value="Python">
    </div>
    <div>
      <label for="Java">Java</label>
      <input
        v-model="lenguajes" 
        type="checkbox" id="Java" value="Java">
    </div>
    {{ lenguajes }}
  </div>
  <div>
    <select 
      v-model="pais"
      name="pais" id="pais">
      <option disabled>Seleccione un país</option>
      <option :value="i" v-for="i in opciones" :key="i">
        {{ i }}
      </option>
    </select>
    {{ pais }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const nombre = ref('')
const fecha = ref('')
const aceptar = ref(true)

const lenguajes = ref(['Java'])
const pais = ref('Peru')
const opciones = ref(['Ecuador','Chile','Mexico','España','Costa Rica','Peru'])
</script>

<style scoped></style>