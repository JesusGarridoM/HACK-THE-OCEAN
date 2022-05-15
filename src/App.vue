<template>
  <div class="position-relative borderBlue">
    <header class="headerDimension headerPosition headerBG headerZIndex">
      <nav class=".container">
        <div class="row">
          <div class="col-4">
            <div class="logo">
              <img src="./assets/logo.png" alt="">
            </div>
            <h1 class="weightBold text-light">HelpOceans</h1>
          </div>
          <div class="col-8 g-0 justify-content-between pt-3">
            <router-link to="/" class="text-light text-decoration-none sizeNormal weightBold">Inicio</router-link> |
            <router-link to="/mapa" class="text-light text-decoration-none sizeNormal weightBold">Mapa</router-link> |
            <router-link to="/formulario" class="text-light text-decoration-none sizeNormal weightBold">Formulario</router-link> |
            <router-link to="/contacto" class="text-light text-decoration-none sizeNormal weightBold">Contacto</router-link>
          </div>
        </div>
        
      </nav>
    </header>
    
  </div>
  <router-view/>
  <footer class="altoFooter footerPosition footerDimension footerColorBG">
            <div class="container pt-3">
                <div class="row">
                    <div class="col-4">
                        
                    </div>
                    <div class="col-4">
                        <p class="text-light">@ 2022 HelpOceans</p>
                    </div>
                    <div class="col-4">
                        
                    </div>
                </div>
            </div>
        </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #002fff;
}
.logo > img {
    position: absolute;
    width: 100px;
    height: 56.94px;
    left: 80px;
    top: 0px;
}

.headerDimension {
    height: 60px;
    width: 100%;
}

.headerPosition {
    position: fixed;
    top: 0px;
}

.headerBG {
    background-color: #181D27; 
}

.headerZIndex {
   z-index: 1000;
}

.letterMain {
  font-family: 'Raleway';
}

.borderRed {
    border: solid red 1px;
}

.borderBlue {
    border: solid blue 1px;
}

.borderGreen {
    border: solid green 1px;
}

.borderYellow {
    border: solid green 1px;
}

.borderYellow {
    border: solid pink 1px;
}

.primaryColor {
    color: #0045bc;
}

.primaryColorBG {
    background-color: #0045bc;
}

.footerColor {
    color:  #b6d1ff;
}

.footerColorBG {
    background-color: #181D27; 
}

.footerPosition {
    position: fixed;
    bottom: 0px;
}

.footerDimension {
    height: 60px;
    width: 100%;
}

.sizeChico {
    font-size: smaller;
}

.sizeNormal {
    font-size: 14px;
}

.sizeMediano {
    font-size: 24px;
}

.sizeGrande {
    font-size: 34px;
}

.sizeExtraGrande {
    font-size: 44px;
}

.sizeExtraExtraGrande {
    font-size: 60px;
}

.weightBold {
    font-weight: bold;
}

.inlineBlock{
    display: block;
}

</style>
