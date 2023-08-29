import {defineStore} from "pinia";

interface ITarea{
  nombre: string,
  completado: boolean
}

interface IState{
  tareas: ITarea[],
  mostrarFormulario: boolean,
  tareasActual: null | ITarea
}

export const useTareaStore = defineStore('tarea',{
  state:():IState=>(
    {
      tareas: [{nombre:'Suscribirse', completado: false}],
      tareasActual: null,
      mostrarFormulario: false
    }
  ),
  actions:{
    crearTarea(){

    },
    obtenerTareas(){

    },
    eliminarTarea(indice: number){
      this.tareas = this.tareas.filter((x, i) => i !== indice)
      console.log(this.tareas);
      
    }
  },
  getters:{
    tareasRealizadas: (state)=>{
      return state.tareas.filter(x => x.completado)
    }
  }
})