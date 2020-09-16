import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import VueRouter from "vue-router";
import LoadScript from "vue-plugin-load-script"; //vue-plugin-load-script
import axios from "axios";
import Screenfull from "screenfull";

import * as _ from "underscore";
import moment from "moment";
import googleMapsLoader from "google-maps";
import mapAll from "./main.maps";
import mapTrip from "./main.maps.trips";
//import Library from "./main.library";

import Home from "./views/Home";
import About from "./views/About";
import Assets from "./views/Select_Assets";
import MapAll from "./views/MapAll";
import VehiclesForTrips from "./views/Select_VehiclesForTrips";
import VehiclesForTripsDate from "./views/Select_VehiclesForTrips_Date";
import Trips from "./views/Select_Trips";
import Trip from "./views/MapTrip";
import SelectAlarms from "./views/Select_Alarms";
import AssetsAlarmsDate from "./views/Select_AssetsAlarmsDate";
import Alarms from "./views/Alarms";


//import Login from "./views/Login"
//import Main from "./views/Main"



import vehicleLists from "./main.vehicleLists.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(LoadScript);

Vue.prototype.loggedIn = false;
Vue.prototype.debug = true;
Vue.prototype.mock = false;
Vue.prototype.baseUrl = "http://localhost:2527";//"https://control.raptortech.co.za";
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
    path:"/logout",
    beforeEnter (to, from, next) {

      if (Vue.prototype.debug) {
        console.log("/logout")
      }
      Vue.prototype.loggedIn = false;

      // called before the route that renders this component is confirmed.
      // does NOT have access to `this` component instance,
      // because it has not been created yet when this guard is called!
    }    
    
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
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
  },
  {
    path: "/alarms/:id/:day",
    component: Alarms
  },
  {
    path: "/alarms",
    component: SelectAlarms
  },

  {
    path: "/Switch/:full_screen",
    beforeEnter (to, from, next) {

      if (Screenfull.isEnabled) {
        Screenfull.request();
      }      
      // called before the route that renders this component is confirmed.
      // does NOT have access to `this` component instance,
      // because it has not been created yet when this guard is called!
    }
  },
  {
    path: "/SelectAssetsAlarmsDate/:id",
    component: AssetsAlarmsDate
  }
 

];

const router = new VueRouter({ routes });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
