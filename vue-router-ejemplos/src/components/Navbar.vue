<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Vue Router</a>
        <div class="d-flex">
          <RouterLink exact-active-class="activo" class="nav-link" to="/">Home</RouterLink>
          <RouterLink exact-active-class="activo" class="nav-link mx-3" :to="{path:'/about'}">About</RouterLink>
          <RouterLink exact-active-class="activo" class="nav-link" :to="{name:'usuarios'}">Usuarios</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.activo{
  color: #0D6EFD;
}
</style>