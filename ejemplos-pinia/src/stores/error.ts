import {defineStore} from "pinia";

interface IState{
  mensaje: string | null
}

export const useErroStore = defineStore('error', {
  state:():IState=>({
    mensaje: null
  }),
  actions:{
    resetearMensaje(){
      this.mensaje = null;
    },
    setMensaje(mensaje:string){
      this.mensaje = mensaje
    }
  }
})