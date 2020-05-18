Use Any JavaScript Library With Vue.js:

https://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/

### Routining



#### Using Props examples

this is a funciton that is called and runs locally when a route is called, 
it was used previously for initialising maps when in static vue context/ 

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
