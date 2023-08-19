<template>
  <div class="card mx-auto mt-5" style="width: 350px;">
    <form 
      @submit.prevent="procesarFormulario"
      class="card-body">
      <h1>{{ tarea ? 'Editar':'Agregar' }} Tarea</h1>
      <input 
        class="form-control mb-2"
        type="text" 
        v-model="formData.nombre"
        placeholder="Nombre"
        required>
      <input 
        type="text"
        placeholder="Descripción"
        v-model="formData.descripcion"
        class="form-control mb-3"
        required
        >
      <button :disabled="cargando" class="btn btn-primary w-100">Guardar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, reactive, ref, watch} from "vue";
import {API, ITarea} from "@/contantes";
import {useRouter} from "vue-router";

const props = defineProps({
  tarea:{
    type: Object as ()=> ITarea | null,
    default: null
  }
})
const formData = reactive({
  nombre: '',
  descripcion: ''
})
const cargando = ref(false)
const router = useRouter()
const tarea = computed(()=> props.tarea)

watch(tarea, ()=>{
  formData.nombre = tarea.value.name
  formData.descripcion = tarea.value.description
})

const procesarFormulario = async()=>{
  cargando.value = true;
  if(tarea.value){
    await fetch(`${API}/api/task/${tarea.value._id}`,{
      method: 'PATCH',
      body: JSON.stringify({name:formData.nombre, description: formData.descripcion}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }else{
    await fetch(`${API}/api/task`,{
      method: 'POST',
      body: JSON.stringify({name:formData.nombre, description: formData.descripcion}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }
  cargando.value = false;
  router.back()
}
</script>

<style scoped>

</style>