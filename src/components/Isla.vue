<template>
  <div class="mapa" id="map">
    <AzureMap :center="[-122.33, 47.6]" :zoom="12" />
  </div>
</template>

<script>
export default {
  name: 'Mapa'
}

/*Ensure that the map is fully loaded*/
map.events.add("load", function () {

  /*Add point locations*/
  var playas = [
    new atlas.data.Point([-117.06324180144405,32.37049754577993]),
    new atlas.data.Point([-101.55755411991893,17.638486717334544]),
    new atlas.data.Point([-114.83528656556933,31.047473311820674]),
    new atlas.data.Point([-108.51914797063482,25.29659084739178]),
    new atlas.data.Point([-96.09755272825876,19.197591511778224]),
    new atlas.data.Point([-86.84656, 21.17429])]

  /*Create a data source and add it to the map*/
  var dataSourcePlayas = new atlas.source.dataSourcePlayas();
  map.sources.add(dataSourcePlayas);
  /*Add multiple points to the data source*/ 
  dataSourcePlayas.add(playas);

  //Create a bubble layer to render the filled in area of the circle, and add it to the map.*/
  map.layers.add(new atlas.layer.BubbleLayer(dataSourcePlayas, null, {
    radius: 5,
    strokeColor: "#4288f7",
    strokeWidth: 6, 
    color: "white" 
  }));

});
</script>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
