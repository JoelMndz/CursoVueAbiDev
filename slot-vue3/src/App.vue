<template>
  <Layout>
    <template v-slot:navbar>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </template>

    <AForm @procesar="procesarFormulario">
      <input v-model="datos.email" type="text" placeholder="email">
      <button>Enviar</button>
    </AForm> 

    <template #footer>
      Abidev 2023
    </template>
  </Layout>
</template>

<script setup lang="ts">
import AForm from "./components/AForm.vue";
import Layout from "./components/Layout.vue";
import {reactive} from "vue";

const datos = {
  email: ''
}

const procesarFormulario = ()=>{
  console.log(datos.email);
}

</script>

<style scoped>

</style>
