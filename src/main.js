import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";
import * as VueGoogleMaps from "vue2-google-maps" // Import package

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    // key: "AIzaSyCU5ey-lEA-N5q61E8jCYRRDLTQckXiT2c",
    libraries: "places"
  }
});
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
