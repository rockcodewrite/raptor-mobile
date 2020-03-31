import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import VueRouter from "vue-router";

import Home from "./views/Home";
import Pets from "./views/Pets";
import About from "./views/About";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const Foo = { template: "<div> <h1> foo </h1> </div>" };


const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/pets",
    component: Pets
  },
  {
    path: "/about",
    component: About
  },
  { path: "/foo", component: Foo }

];

const router = new VueRouter({ routes });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
