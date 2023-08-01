<template>
  <Formulario/>
  <Boton :nombre="nombreBOton" disabled class="success"/>
  <Boton type="submit" nombre="Eliminar" clase="danger"/>
  <Boton type="submit" nombre="Cuidado!" clase="warning"/>
</template>

<script setup lang="ts">
import Boton from './components/Boton.vue';
import Formulario from './components/Formulario.vue';
const nombreBOton = "Enviar"
  //PascalCase vs kebab-case
  //import BotonContador from "./components/BotonContador.vue";
  
</script>

<style scoped>

</style>