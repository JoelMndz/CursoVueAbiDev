<template>
  <Boton :nombre="nombreBOton" :disabled="true"/>
  <Boton type="" nombre="Eliminar"/>
</template>

<script setup lang="ts">
import Boton from './components/Boton.vue';
const nombreBOton = "Enviar"
  //PascalCase vs kebab-case
  //import BotonContador from "./components/BotonContador.vue";
  
</script>

<style scoped>

</style>