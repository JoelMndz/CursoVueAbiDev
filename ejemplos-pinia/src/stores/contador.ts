import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useContadorStore = defineStore('contador',()=>{
  const contador = ref(0)

  const increcrementar = ()=>{
    contador.value++
  }
  return {contador, increcrementar}
})