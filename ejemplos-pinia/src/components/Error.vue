<template>
  <div v-if="mensaje" class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{{ mensaje }}</strong>
    <button @click="errorStore.resetearMensaje()" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>

<script setup lang="ts">
import { useErroStore } from '@/stores/error';
import { storeToRefs } from 'pinia';

const errorStore = useErroStore()
const {mensaje} = storeToRefs(errorStore)
</script>

<style scoped>

</style>