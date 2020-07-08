import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import VueRouter from "vue-router";
import LoadScript from "vue-plugin-load-script"; //vue-plugin-load-script
import axios from "axios";

import * as _ from "underscore";
import moment from "moment";
import googleMapsLoader from "google-maps";
import mapAll from "./main.maps";
import mapTrip from "./main.maps.trips"

import Home from "./views/Home";
import About from "./views/About";
import Assets from "./views/Select_Assets";
import MapAll from "./views/MapAll";
import VehiclesForTrips from "./views/Select_VehiclesForTrips";
import VehiclesForTripsDate from "./views/Select_VehiclesForTrips_Date";
import Trips from "./views/Select_Trips";
import Trip from "./views/MapTrip";


import vehicleLists from "./main.vehicleLists.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(LoadScript);

Vue.prototype.debug = true;
Vue.prototype.mock = false;
Vue.prototype.baseUrl = "https://control.raptortech.co.za";

Object.defineProperty(Vue.prototype, "$moment", { value: moment });
Object.defineProperty(Vue.prototype, "$_", { value: _ });
Object.defineProperty(Vue.prototype, "$vehicleLists", { value: vehicleLists });
Object.defineProperty(Vue.prototype, "$axios", { value: axios });
Object.defineProperty(Vue.prototype, "$googleMapsLoader", {  value: googleMapsLoader });
Object.defineProperty(Vue.prototype, "$mapTrip", {  value: mapTrip });
Object.defineProperty(Vue.prototype, "$mapAll", { value: mapAll });

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
    path: "/Map/:id",
    component: MapAll,
    props: true
  },
  {
    path: "/vehiclesForTrips",
    component: VehiclesForTrips
  },
  {
    path: "/vehiclesForTripsDate/:id",
    component: VehiclesForTripsDate
  },
  {
    path: "/Trips/:id/:day",
    component: Trips
  },
  {
    path: "/Trip/:id/:BegID/:EndID",
    component: Trip
  }


  

];

const router = new VueRouter({ routes });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
