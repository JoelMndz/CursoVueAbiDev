<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Pnediente</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(i, indice) in tareas">
      <td>{{ i.nombre }}</td>
      <td>{{ i.completado }}</td>
      <td>
        <span 
          style="cursor: pointer;" 
          title="Eliminar"
          @click="eliminarTarea(indice)">❌</span>
      </td>
    </tr>

  </tbody>
</table>
</template>

<script setup lang="ts">
import {useTareaStore} from "@/stores/tareas";
import {computed} from "vue";

const tareaStore = useTareaStore()
const {eliminarTarea} = tareaStore
const tareas = computed(()=> tareaStore.tareas) 

</script>

<style scoped>

</style>