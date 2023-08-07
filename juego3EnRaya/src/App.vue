<template>
  <div class="contenedor">
    <h1>Juego 3 en Raya</h1>
    <h3 
      v-show="resultado"
      style="color: #fff;">Resultado: {{ resultado }}</h3>
    <div class="fila" v-for="(fila, i) in tablero">
      <Casilla 
        v-for="(columna, j) in fila"
        :figura="columna"
        @click="cambiarEstadoCasilla(i, j)"
        />
    </div>
    <div class="fila" style="margin-top: 20px;">
      <button 
        class="btn"
        @click="resetar()">Resetear</button>
      <button 
        class="btn"
        :class="activarBoton(FIGURA.X)"
        @click="cambiarTurno(FIGURA.X)">{{ FIGURA.X }}</button>
      <button  
        class="btn"
        :class="activarBoton(FIGURA.O)"
        @click="cambiarTurno(FIGURA.O)">{{ FIGURA.O }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import Casilla from "./components/Casilla.vue";

enum FIGURA{
  X= '❌',
  O= '⚪'
}
const resultado = ref<string | null>(null)
const turno = ref(FIGURA.X);
const tablero = ref([
    ['','',''],
    ['','',''],
    ['','','']
])

const resetar = ()=>{
  tablero.value = [
    ['','',''],
    ['','',''],
    ['','','']
  ]
  resultado.value = null;
}

const verificarVertical = (columna: number, figura:string)=>{
  for (let i = 0; i < tablero.value.length; i++) {
    if(tablero.value[i][columna] !== figura){
      return false
    }    
  }
  return true;
}

const verificarHorizontalmente = (fila: number, figura:string)=>{
  for (let i = 0; i < tablero.value.length; i++) {
    if(tablero.value[fila][i] !== figura){
      return false
    }    
  }
  return true;
}

const verificarDiagonalmente = (figura:string)=>{
  if(tablero.value[0][0] === figura && tablero.value[2][2] === figura && tablero.value[1][1] === figura){
    return true
  }
  if(tablero.value[2][0] === figura && tablero.value[0][2] === figura && tablero.value[1][1] === figura){
    return true;
  }
  return false;
}

const tableroVacio = computed(()=>{
  for(let fila of tablero.value){
    for(let columna of fila){
      if(columna !== ''){
        return false
      }
    } 
  }
  return true;
})

const tableroLleno = computed(()=>{
  for(let fila of tablero.value){
    for(let columna of fila){
      if(columna === ''){
        return false
      }
    } 
  }
  return true;
})

const cambiarEstadoCasilla = (fila:number, columna:number)=>{
  if(!tablero.value[fila][columna] && !resultado.value){
    tablero.value[fila][columna] = turno.value;
    turno.value = FIGURA.X === turno.value ? FIGURA.O : FIGURA.X;
    
    //Si Gano
    if(
        verificarVertical(columna, tablero.value[fila][columna]) || 
        verificarHorizontalmente(fila, tablero.value[fila][columna]) ||
        verificarDiagonalmente(tablero.value[fila][columna])){
      resultado.value = `GANO ${tablero.value[fila][columna]}`
    }else if(tableroLleno.value){
      resultado.value = 'EMPATE'
    }
  }  
}

const cambiarTurno = (figura:FIGURA)=>{
  if(tableroVacio.value){
    turno.value = figura;
  }
}

const activarBoton = (figura:string)=>{
  return figura === turno.value ? 'btn-activo':'';
} 

</script>

<style scoped>
h1{
  color: #fff;
}
.contenedor{
  display: flex;
  width: 100%;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fila{
  width: 350px;
  display: flex;
}
.btn{
  width: auto;
  font-size: 20px;
  background-color: transparent;
  border-color: #42B883;
  margin: 5px;
  color: #fff;
  padding: 10px;
}

.btn-activo{
  background-color:  #42B883;
}
</style>
