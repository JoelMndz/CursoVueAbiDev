<template>
  <button 
    :type="type"
    class="btn btn-primary"
    :disabled="disabled">
    {{ nombre }}

  </button>
</template>

<script setup lang="ts">

defineProps(['nombre','disabled', 'type'])

</script>

<style scoped>

</style>