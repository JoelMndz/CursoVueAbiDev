<template>
  <div class="card">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Estado</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tarea in tareas" :key="tarea._id">
        <td>{{ tarea.name }}</td>
        <td>{{ tarea.description }}</td>
        <td>
          {{ tarea.status ? 'pendiente':'realizada' }}
        </td>
        <td>
          <span @click="editar(tarea._id)" class="icono">
            👁
          </span>
          <span 
            @click="eliminar(tarea)"
            class="icono">
            ❌
          </span>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {API,ITarea} from "@/contantes";
import {useRouter} from "vue-router";

const tareas = ref<ITarea[]>([])
const router = useRouter();

const editar = (id:string)=>{
  router.push(`/tarea-formulario/${id}`)
}

const eliminar = async({name, _id}:ITarea)=>{
  const respuesta = confirm(`¿Estas segudo de eliminar a ${name}?`)
  if(respuesta){
    const data = await fetch(`${API}/api/task/${_id}`,{
      method:'DELETE'
    })
    const tarea = await data.json()
    if(tarea){
      tareas.value = tareas.value.filter(x => x._id !== _id)
    }
  }
}
onMounted(async()=>{
  const data = await fetch(`${API}/api/task`)
  tareas.value = await data.json()
})
</script>

<style scoped>
.icono{
  cursor: pointer;
}
</style>