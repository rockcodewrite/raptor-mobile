import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import VueRouter from "vue-router";
import LoadScript from "vue-plugin-load-script"; //vue-plugin-load-script
import axios from "axios";

//import _ from "underscore";
import * as _ from "underscore";
import moment from "moment";

import Home from "./views/Home";
import About from "./views/About";
import Assets from "./views/Select_Assets";
import MapAll from "./views/MapAll";
import MapAll2 from "./views/MapAll2";

import vehicleLists from "./main.vehicleLists.js";

Vue.config.productionTip = false;

var _gma;

Vue.use(VueRouter);
/// https://stackoverflow.com/questions/45047126/how-to-add-external-js-scripts-to-vuejs-components//Vue.LoadScript("google_maps_all.js");
Vue.use(LoadScript);
//Vue.LoadScript("google_maps_all.js");

Vue.loadScript("https://maps.googleapis.com/maps/api/js")
  .then(() => {
    // Script is loaded, do something
  })
  .catch(() => {
    // Failed to fetch script
  });

Vue.loadScript("google_maps_all.js")
  .then(() => {
    // Script is loaded, do something
    console.log("loaded: google_maps_all");
  })
  .catch(() => {
    // Failed to fetch script
  });

Vue.prototype.debug = true;
Vue.prototype.mock = false;
Vue.prototype.baseUrl = "https://control.raptortech.co.za";
Object.defineProperty(Vue.prototype, "$moment", { value: moment });
Object.defineProperty(Vue.prototype, "$_", { value: _ });
Object.defineProperty(Vue.prototype, "$vehicleLists", { value: vehicleLists });
Object.defineProperty(Vue.prototype, "$axios", { value: axios });

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/assets",
    component: Assets
  },
  {
    path: "/Map2/:id",
    component: MapAll,
    props: dynamicPropsFn
  },
  {
    path: "/Map/:id",
    component: MapAll2,
    props: true
  }
];

function dynamicPropsFn(route) {
  var id = route.params.id;

  setTimeout(function(id) {
    _gma = new google_maps_all();
    _gma.initialise(id);
  }, 500);
}

const router = new VueRouter({ routes });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
