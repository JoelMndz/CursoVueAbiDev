
<template>
  <Contador/>
  <p>Contador: {{ contadorStore.contador }}</p>
  <button @click="contadorStore.increcrementar">Incrementar</button>
</template>

<script setup lang="ts">
import {useContadorStore} from "@/stores/contador";
import Contador from "@/components/Contador.vue";

const contadorStore = useContadorStore();


</script>

