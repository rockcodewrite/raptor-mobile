Use Any JavaScript Library With Vue.js:

https://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/


### Conditional Rendering 

https://vuejs.org/v2/guide/conditional.html

https://michaelnthiessen.com/force-re-render/


``` js

  <login v-if="!show"  />


  import mainView from "./views/Main";

  components: {
    login,
    mainView
  }


```

### Routining


#### Using History Mode

https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations

Added history mode, to allow navigation back however, this does mean there needs to be a catch 
all on server that navigates to main index.html if an entered route is not found. 

``` js
const router = new VueRouter({
   mode: 'history',
   routes 
  });


```

#### Using Props examples

this is a funciton that is called and runs locally when a route is called, 
it was used previously for initialising maps when in static vue context/ 

IIS: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations


``` js

const routes = [
  {
    path: "/Map2/:id",
    component: MapAll
    props: dynamicPropsFn
  }
];  

function dynamicPropsFn(route) {
  var id = route.params.id;

  setTimeout(function(id) {
    _gma = new google_maps_all();
    _gma.initialise(id);
  }, 500);
} 

```


Examples:
https://github.com/vuejs/vue-router/blob/dev/examples/route-props/app.js

https://github.com/vuejs/vue-router/blob/dev/examples/route-props/Hello.vue

https://router.vuejs.org/guide/essentials/passing-props.html#object-mode

### Dynamic Route Matching

https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
