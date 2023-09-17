
<template>
  <VApp>
    <Navbar/>
    <VMain>
      <p class="text-center text-h3">Tareas</p>
      <Formulario/>
    <div class="container-fluid">
      <TablaTareas/>
    </div>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import {onMounted} from "vue";

import {useContadorStore} from "@/stores/contador";
import TablaTareas from "@/components/TablaTareas.vue";
import Navbar from "./components/Navbar.vue";
import Formulario from "./components/Formulario.vue";
import { useTareaStore } from "./stores/tareas";

const contadorStore = useContadorStore();
const tareaStore = useTareaStore()
// onMounted(()=>{
//   tareaStore.obtenerTareas()
// })
</script>

