<template>
  <div>
    <h1>Formulario</h1>
    <input type="text" v-model="datos.nombre">
    <input type="date" v-model="datos.fecha">
  </div>
  <div>
    <input 
    v-model="datos.aceptar" 
    id="terminos" 
    type="checkbox">
    <label for="terminos">Acepta los temrinos y condiciones</label>
  </div>
  <div v-if="datos.aceptar">
    <div>
      <label for="A">Python</label>
      <input
        v-model="datos.lenguajes" 
        type="checkbox" id="A" value="Python">
    </div>
    <div>
      <label for="Java">Java</label>
      <input
        v-model="datos.lenguajes" 
        type="checkbox" id="Java" value="Java">
    </div>
  </div>
  <div>
    <select 
      v-model="datos.pais"
      name="pais" id="pais">
      <option disabled>Seleccione un país</option>
      <option :value="i" v-for="i in opciones" :key="i">
        {{ i }}
      </option>
    </select>
  </div>
  <pre>{{ datos }}</pre>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const datos = reactive({
  nombre: '',
  fecha:'',
  lenguajes:[],
  pais:'',
  aceptar: true
})
const opciones = ref(['Ecuador','Chile','Mexico','España','Costa Rica','Peru'])
</script>

<style scoped></style>