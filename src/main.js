import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VueAzureMaps from 'vue-azure-maps'
// import Vue from 'vue'

// Vue.use(VueAzureMaps, {
//     key: 'tfzfpI7uplfPVTBJZvwca0vOmRYOltJABNAH3pPJEjY'
//   })

createApp(App).use(store).use(router).mount('#app')
