<template>
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/mapa">Mapa</router-link> |
    <router-link to="/formulario">Formulario</router-link> |
    <router-link to="/contacto">Contacto</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #100d4d;
}

nav {
  background-color: lightblue;
}

nav a.router-link-exact-active {
  color: #002fff;
}

/* Style General */
</style>
