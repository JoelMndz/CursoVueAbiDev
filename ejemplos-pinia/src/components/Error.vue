<template>
  <VAlert v-if="mensaje"  color="error">
    {{ mensaje }}
    <template #close>
      <VBtn @click="errorStore.resetearMensaje()">✖</VBtn>
    </template>
  </VAlert>
</template>

<script setup lang="ts">
import { useErroStore } from '@/stores/error';
import { storeToRefs } from 'pinia';

const errorStore = useErroStore()
const {mensaje} = storeToRefs(errorStore)
</script>

<style scoped>

</style>