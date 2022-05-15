<template>
  <div>
    <gmap-map
      :zoom="4"
      :center="center"
      style="width:100%;  height: 600px;">
      <gmap-marker
        v-for="(gmap, i) in locations"
        :key="i"
        :position="gmap"
        @click="center=gmap"
      ></gmap-marker>
    </gmap-map>
 
  </div>
</template>
 
<script>
    export default {
        name: "MapMarker",
        data() {
            return {
            center: { 
                lat: 23,
                lng: -102
            },
            locations: [],
            currentLoc: null
            };
        },
        
        mounted() {
            this.addLocations();
        },
        
        methods: {
            setPlace(loc) {
            this.currentLoc = loc;
            },
            addLocations: function() {
                navigator.geolocation.getCurrentPosition(geo => {
                this.center = {
                    lat: geo.coords.latitude,
                    lng: geo.coords.longitude
                };
                });
        
                this.locations = [
                {
                    lat: 32.37049754577993,
                    lng: -117.06324180144405,
                    label: 'Rosarito'
                },
                {
                    lat: 17.638486717334544,
                    lng: -101.55755411991893,
                    label: 'Zihuatanejo'
                },
                {
                    lat: 31.047473311820674,
                    lng: -114.83528656556933,
                    label: 'Playa lindo'
                },
                {
                    lat: 25.29659084739178,
                    lng: -108.51914797063482,
                    label: 'Las glorias'
                },
                {
                    lat: 19.197591511778224,
                    lng: -96.09755272825876,
                    label: 'Mocambo'
                },
                {
                    lat: 21.17429,
                    lng: -86.84656,
                    label: 'Cancun'
                }
            ];
        
            }
        }
    };
</script>