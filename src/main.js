import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k",
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
