<template>
  <VForm 
    ref="formRef"
    @submit.prevent="procesarFormulario"
    style="width: 350px;" 
    class="mx-auto my-3">
    <Error/>
    <VTextField 
      v-model="nombre"
      variant="outlined"
      placeholder="Ingresar tarea"
      required
      :rules="rules"
      type="text"/>
  </VForm>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useTareaStore} from "@/stores/tareas";
import Error from "./Error.vue";
import type { VForm } from "vuetify/components";

const nombre = ref('')
const rules = [
  (valor:string) => !!valor || "El campo es requerido",
  (valor:string) => !!valor && valor.length >= 2 || "Debe tener al menos 2 caracteres"
]
const formRef = ref<null | VForm>(null)
const {crearTarea} = useTareaStore()

const procesarFormulario = async()=>{
  const {valid} = await formRef.value!.validate();
  if(valid){
    //Gardamos
    crearTarea(nombre.value)
    nombre.value = ''
  }
}   
</script>

<style scoped>

</style>