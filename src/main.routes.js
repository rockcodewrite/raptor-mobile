export default (routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/foo",
    component: Foo
  },
  {
    path: "/assets",
    component: Assets
  },
  {
    path: "/Map/:id",
    component: MapAll,
    props: dynamicPropsFn
  }
]);
