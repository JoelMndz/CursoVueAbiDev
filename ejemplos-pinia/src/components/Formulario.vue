<template>
  <form 
    @submit.prevent="procesarFormulario"
    style="width: 350px;" 
    class="mx-auto my-3">
    <Error/>
    <input 
      v-model="nombre"
      placeholder="Ingresar tarea"
      class="form-control"
      required
      type="text">
  </form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useTareaStore} from "@/stores/tareas";
import Error from "./Error.vue";

const nombre = ref('')

const {crearTarea} = useTareaStore()

const procesarFormulario = ()=>{
  //Gardamos
  crearTarea(nombre.value)
  nombre.value = ''
}   
</script>

<style scoped>

</style>