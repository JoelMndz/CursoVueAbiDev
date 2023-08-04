<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        {{ titulo }}
      </h5>
      <p class="card-text">
        {{ cuerpo }}
      </p>
    </div>
    <div class="card-footer">
      <Boton 
        nombre="Eliminar"
        clase="danger"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Boton from './Boton.vue';


defineProps({
  titulo:{
    type: String,
    required: true
  },
  cuerpo:{
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card{
  margin: 10px;
}
</style>