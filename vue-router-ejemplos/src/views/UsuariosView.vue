<template>
  <div class="container">
    <h1>Usuarios</h1>
    <ul class="list-group">
      <li 
        class="list-group-item" 
        v-for="usuario in usuarios" 
        :key="usuario.id">
        <RouterLink :to="`/usuario-detalle/${usuario.id}`">
          {{ usuario.last_name }} {{ usuario.first_name }}
        </RouterLink>
      </li>
    </ul>
  </div>

</template>

<script setup lang="ts">
import {onBeforeMount, ref, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";
import type {IUsuario} from "@/types";
import {RouterLink} from "vue-router";


const contador = ref(0);
const usuarios = ref<IUsuario[]>([])
console.log('Created');

onBeforeMount(()=>{
  console.log('onBeforeMount');
})

onMounted(async()=>{
  const respuesta = await fetch('https://reqres.in/api/users/')
  const data = await respuesta.json()
  usuarios.value = data.data  
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