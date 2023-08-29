
<template>
  <Navbar/>
  <h1 class="text-center">Tareas</h1>
  <div class="container-fluid">
    <TablaTareas/>
  </div>
</template>

<script setup lang="ts">
import {useContadorStore} from "@/stores/contador";
import TablaTareas from "@/components/TablaTareas.vue";
import Navbar from "./components/Navbar.vue";

const contadorStore = useContadorStore();


</script>

