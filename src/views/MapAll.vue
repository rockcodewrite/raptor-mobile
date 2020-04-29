<template>
  <div>
    <span>{{ $route.params.id }}</span>
    <div id="map_canvas"></div>
  </div>
</template>


<style>
#map_canvas {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
</style>
