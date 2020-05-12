<template>
  <div>
    <span>{{name}} {{ $attrs }}</span>
    <br>

    <span>{{ $attrs.id }}</span>
    <br>

    <span>{{ $route.params.id }}</span>
    <div id="map_canvas"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Vue!"
    }
  }
};
</script>

<style>
#map_canvas {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
</style>
