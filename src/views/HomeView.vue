<template>
  <div class="paddingTopHeightHeader">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="El camino de la basura"/>

      <div>
        Uno de los mayores problemas que encontramos en los océanos son las islas de basura, las cuales se generan por los desechos que las empresas, embarcaciones, plataformas o turistas y personas que viven cerca de cuerpos de agua y solo tiran la basura ahí, lo que hace que sea llevada por las corrientes marinas hasta cierto punto de los océanos donde se concentra una gran cantidad de desechos creando lo que se llama "Islas de basura". 
      </div>
      
      <div id="contenedor">
        <div>
          <img src="../assets/imagenes/TirarBasura.jpg">
        </div>
        <div>
          <p id="contenido">El viaje comienza cuando alguíen tira su basura en la vía publica</p>
        </div>
      </div>
      
      <div id="contenedor">
        <div>
          <p id="contenido">Con las lluvias o por el viento, la basura es arrastrada hasta que termina atrapada dentro de una alcantarilla</p>
        </div>
        <div>
          <img src="../assets/imagenes/BasuraAlcantarilla.jpg">
        </div>
      </div>
      
      <div id="contenedor">
        <div>
          <img src="../assets/imagenes/RioContaminado.jpg">
        </div>
        <div>
          <p id="contenido">Despues viaja por el sistema de drenaje hasta el mar o ríos</p>
        </div>
      </div>
      
      <div id="contenedor">
        <div>
          <p id="contenido">De manera paralela, la basura de los turistas, es llevada por las olas hacia el mar</p>
        </div>
        <div>
          <img src="../assets/imagenes/BasuraPlaya.jpg">
        </div>
      </div>
      
      <div id="contenedor">
        <div>
          <img src="../assets/imagenes/BasuraMar.jpg">
        </div>
        <div>
          <p id="contenido">Una vez en el oceano, la basura afecta la vida marina</p>
        </div>
      </div>
      
      <div id="contenedor">
        <div>
          <p id="contenido">Es tanta la bsura que sigue esta ruta que se forman isalas</p>
        </div>
        <div>
          <img src="../assets/imagenes/IslaBasura.jpg">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}

</script>

<style scoped>

img {
 max-width: 100%;
 max-height: 80%;
}

#contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#contenedor > div {
  width: 50%;
  height: 200px;
}

#contenido {
  line-height: 100px;
}

</style>
