<template>
  <form @submit.prevent="$emit('procesar')">
    <slot></slot> 
  </form>
</template>

<script setup lang="ts">

defineEmits(['procesar'])
</script>

<style scoped>

</style>