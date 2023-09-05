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
    crearTarea(nombre:string){
      this.tareas.push({nombre, completado:false})
      localStorage.setItem('tareas',JSON.stringify(this.tareas))
    },
    obtenerTareas(){
      const data = localStorage.getItem('tareas')
      if(data){
        this.tareas = JSON.parse(data)
      }     
    },
    eliminarTarea(indice: number){
      this.tareas = this.tareas.filter((x, i) => i !== indice)
      localStorage.setItem('tareas',JSON.stringify(this.tareas))      
    }
  },
  getters:{
    tareasRealizadas: (state)=>{
      return state.tareas.filter(x => x.completado)
    }
  }
})