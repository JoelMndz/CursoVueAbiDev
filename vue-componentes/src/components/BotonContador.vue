<template>
  <button
    @click="contador++"
    class="btn btn-primary"
  >Contador: {{ contador }}</button>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  const contador = ref(0);
</script>

<style scoped>
button{
  margin-right: 10px;
}
</style>