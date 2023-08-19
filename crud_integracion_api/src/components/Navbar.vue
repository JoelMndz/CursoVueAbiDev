<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <h3 class="navbar-brand">App Tareas</h3>
      <div>
        <RouterLink exact-active-class="activo" class="me-2" to="/">Home</RouterLink>
        <RouterLink exact-active-class="activo" to="/tareas">Tareas</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";

</script>

<style scoped>
.activo{
  color: black;
}
</style>