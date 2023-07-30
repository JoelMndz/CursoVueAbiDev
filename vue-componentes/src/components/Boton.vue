<template>
  <button 
    :type="type"
    :class="asignarClase"
    :disabled="disabled">
    {{ nombre }}

  </button>
</template>

<script setup lang="ts">
import {computed} from "vue";

type TIPO_BOTON = 'button' | 'submit' | 'reset';
type TIPO_CLASE = "success" | "danger" | "warning";
const props = defineProps({
  nombre: {
    type:String,
    required: true,
  },
  disabled:{
    type: Boolean,
    default: false
  },
  type: {
    type: String as ()=> TIPO_BOTON,
    validator(value:string) {
      // The value must match one of these strings
      return ['button', 'submit', 'reset'].includes(value)
    },
    default: 'button'
  },
  clase:{
    type: String as ()=> TIPO_CLASE,
    default: 'primary'
  }
})

const asignarClase = computed(()=>{
  return `btn btn-${props.clase}`
})
</script>

<style scoped>

</style>