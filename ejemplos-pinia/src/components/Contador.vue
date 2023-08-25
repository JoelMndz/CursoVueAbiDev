<template>
  <h1>Contador: {{ contadorStore.contador }}</h1>
</template>

<script setup lang="ts">
import {useContadorStore} from "@/stores/contador";

const contadorStore = useContadorStore()

</script>

<style scoped>

</style>