<template>
  <h1>Usuarios</h1>
  <button @click="contador++">{{ contador }}</button>
</template>

<script setup lang="ts">
import {onBeforeMount, ref, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";
const contador = ref(0);
console.log('Created');

onBeforeMount(()=>{
  console.log('onBeforeMount');
})

onMounted(()=>{
  console.log('onMounted');
})

onBeforeUpdate(()=>{
  console.log('onBeforeUpdate');
})

onUpdated(()=>{
  console.log('onUpdated');
})

onBeforeUnmount(()=>{
  console.log('onBeforeUnmount');
})

onUnmounted(()=>{
  console.log('onUnmounted');
  
})


//https://reqres.in/api/users/

</script>

<style scoped>

</style>