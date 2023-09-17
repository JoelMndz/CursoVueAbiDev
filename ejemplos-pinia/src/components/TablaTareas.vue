<template>
  <VCard class="ma-5" elevation="5">
    <v-table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Pendiente</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, indice) in tareas">
          <td>{{ i.nombre }}</td>
          <td>
            {{ i.completado ? '✅':'🍍' }}
          </td>
          <td>
            <VBtn 
              @click="eliminarTarea(indice)"
              variant="text">
              ❌
            </VBtn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </VCard>
</template>

<script setup lang="ts">
import {useTareaStore} from "@/stores/tareas";
import { storeToRefs } from "pinia";
import {computed} from "vue";

const tareaStore = useTareaStore()
const {eliminarTarea} = tareaStore
// const tareas = computed(()=> tareaStore.tareas) 
const {tareas} = storeToRefs(tareaStore)


</script>

<style scoped>

</style>