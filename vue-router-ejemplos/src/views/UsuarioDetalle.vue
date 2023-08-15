<template>
  <div class="card mx-auto mt-5" style="width: 350px;">
    <div class="card-body">
      <h3>{{ usuario?.first_name }} {{ usuario?.last_name }}</h3>
      <p>{{ usuario?.email }}</p>
      <img 
        :src="usuario?.avatar" alt="avatar">
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import type { IUsuario } from "@/types";

const route = useRoute()
const usuario = ref<IUsuario | null>(null)

onMounted(async()=>{
  const id = route.params.usuarioId
  const respuesta = await fetch(`https://reqres.in/api/users/${id}`)
  const {data} = await respuesta.json()
  console.log(data);
  usuario.value = data
})

</script>

<style scoped>

</style>