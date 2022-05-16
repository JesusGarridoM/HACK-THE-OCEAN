<template>
  <div class="paddingTopHeightHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">

          <img alt="Vue logo" src="../assets/logo.png">
          <HelloWorld msg="El camino de la basura" class="mb-5"/>

          <div class="mb-5">
            <p class="text-start">
              Uno de los mayores problemas que encontramos en los océanos son las islas de basura, las cuales se generan por los desechos que las empresas, embarcaciones, plataformas o turistas y personas que viven cerca de cuerpos de agua y solo tiran la basura ahí, lo que hace que sea llevada por las corrientes marinas hasta cierto punto de los océanos donde se concentra una gran cantidad de desechos creando lo que se llama "Islas de basura". 
            </p>
            
          </div>
          
          <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../assets/imagenes/TirarBasura.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">El viaje comienza cuando alguíen tira su basura en la vía publica</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">Con las lluvias o por el viento, la basura es arrastrada hasta que termina atrapada dentro de una alcantarilla</p>
                </div>
              </div>
              <div class="col-md-4">
                <img src="../assets/imagenes/BasuraAlcantarilla.jpg" class="img-fluid rounded-start" alt="...">
              </div>
            </div>
          </div>
          
          <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../assets/imagenes/RioContaminado.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">Despues viaja por el sistema de drenaje hasta el mar o ríos</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">De manera paralela, la basura de los turistas, es llevada por las olas hacia el mar</p>
                </div>
              </div>
              <div class="col-md-4">
                <img src="../assets/imagenes/BasuraPlaya.jpg" class="img-fluid rounded-start" alt="...">
              </div>
            </div>
          </div>
          
          <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../assets/imagenes/BasuraMar.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">Una vez en el oceano, la basura afecta la vida marina</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">Es tanta la basura que sigue esta ruta que se forman isalas</p>
                </div>
              </div>
              <div class="col-md-4">
                <img src="../assets/imagenes/IslaBasura.jpg" class="img-fluid rounded-start" alt="...">
              </div>
            </div>
          </div>
          
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
