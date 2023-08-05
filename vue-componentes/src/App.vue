<template>
  <!-- <Formulario/>
  <Boton :nombre="nombreBOton" disabled class="success"/>
  <Boton type="submit" nombre="Eliminar" clase="danger"/>
  <Boton type="submit" nombre="Cuidado!" clase="warning"/> -->
  <CardNoticia
    v-for="noticia in listaNoticias"
    :key="noticia.id"
    :id="noticia.id"
    :titulo="noticia.titulo"
    :cuerpo="noticia.cuerpo"
    @accionEliminar="eliminarNoticia"/>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Boton from './components/Boton.vue';
import Formulario from './components/Formulario.vue';
import CardNoticia from './components/CardNoticia.vue';
const nombreBOton = "Enviar"

const listaNoticias = ref([
  {
    id: 1,
    titulo: 'Nueva especie de mariposa descubierta en selva',
    cuerpo: 'Científicos han anunciado el descubrimiento de una nueva especie de mariposa en la selva tropical. La mariposa tiene colores vibrantes y un patrón de alas único que ha intrigado a los expertos.',
  },
  {
    id: 2,
    titulo: 'Chocolate negro podría mejorar salud del corazón',
    cuerpo: 'Un estudio reciente sugiere que el consumo moderado de chocolate negro podría tener efectos positivos en la salud del corazón. Los antioxidantes presentes en el chocolate negro podrían ayudar a reducir el riesgo de enfermedades cardíacas.',
  },
  {
    id: 3,
    titulo: 'Ruinas antiguas encontradas en el fondo del océano',
    cuerpo: 'Mediante el uso de tecnología avanzada de exploración submarina, un equipo de científicos ha descubierto ruinas antiguas en el lecho marino. Estas ruinas podrían arrojar luz sobre civilizaciones perdidas de la historia.',
  }
]);

const eliminarNoticia = (id:number)=>{
  listaNoticias.value = listaNoticias.value.filter(x => x.id !== id);
}
</script>

<style scoped>

</style>