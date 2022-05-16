
<template>
  <div class="paddingTopHeightHeader">
    <div id="app">
      <div class="row">
        <h1 style="text-align: center;">Desechos en el oceano</h1>
        <GoogleMap :latitude= 23 :longitude= -102 :title="' '" />
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";

export default {
  name: 'App',
  components: {
    GoogleMap
  }
}
</script>