<template>
  <h1>Ahorros -> $ {{ ahorros }}</h1>
  <button
    @click="depositar(100)">Depositar $100</button> <br> <br>
  <button
    @click="retirar(100)"
    :disabled="desahbilitarBoton">Retirar $100</button>

  <div>
    <h4>Movimientos:</h4>
    <ul>
      <li v-for="(movimiento, index) in invertirArray" :key="index">
        <span v-if="movimiento.monto > 0">
          Deposito 
        </span>
        <span v-else>
          Retiro
        </span>
       | Monto: {{ movimiento.monto }} | Saldo: {{ movimiento.saldoActual }}
      </li>
    </ul>
    
  </div>
</template>

<script setup lang="ts">
  /*
    Mostrar nuestro ahorros *
    Boton para depositar *
    Boton para retirar *
    Listado de movimientos en un array
    Diferencíar si es un deposito o retiro
    El boton retirar se debe bloquear si no tenemos dinero *
    
    v-if, v-else, v-for, v-on, v-bind, computed, ref
    
  */
  import {computed, ref} from "vue";
  interface IMovimiento{
    monto: number;
    saldoActual: number;
  }
  
  const ahorros = ref(0);
  const movimientos = ref<IMovimiento[]>([]);
  
  const depositar = (cantidad:number)=>{
    ahorros.value += cantidad;
    movimientos.value.push({
      monto: cantidad,
      saldoActual: ahorros.value
    })
  }

  const retirar = (cantidad:number)=>{
    ahorros.value -= cantidad;
    movimientos.value.push({
      monto: -cantidad,
      saldoActual: ahorros.value
    })
  }

  const desahbilitarBoton = computed(()=>{
    if(ahorros.value == 0){
      return true;
    }
    return false;
  })

  const invertirArray = computed(()=>{
    return movimientos.value.reverse();
  })

</script>

<style scoped>

</style>
