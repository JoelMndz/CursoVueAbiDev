<template>
  <div class="container">
    <button 
      @click="irAlFormulario"
      class="btn btn-success my-2">Agregar</button>
    <Tabla />
  </div>
</template>

<script setup lang="ts">
import Tabla from '@/components/Tabla.vue';
import {useRouter} from "vue-router";

const router = useRouter();
const irAlFormulario = ()=>{
  router.push('/tarea-formulario')
}
</script>

<style scoped>

</style>