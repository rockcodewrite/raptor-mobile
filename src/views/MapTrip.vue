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
  }, // props
  mounted: function() {
    var url = "/api3/V3view_UnitPositions"; //?&UnitID=860990002907872&BegID=122078444&EndID=122087315";//"/api5/V5_view_VehiclePositions_";
    debugger;

    if (!this.mock) {
      url = this.baseUrl + url;
      url += "?UnitID=" + this.$route.params.id;
      url += "&BegID=" + this.$route.params.BegID;
      url += "&EndID=" + this.$route.params.EndID;
    }

    if (this.debug) {
      console.log(url);
    }

    this.$axios
      .get(url)
      .then(response => {
        if (!this.debug) {
          console.log(response.data);
        }
        debugger;

        var mapTrip = new this.$mapTrip(
          this.baseUrl,
          this.$moment,
          this.$_,
          this.$axios,
          response.data.$values
        );
        // var id2 = this.$attrs.id;
        mapTrip.initializeTrips(response.data.$values);
      })
      .catch(e => {
          this.errors.push(e);
      });
  } // mounted
}; // export
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
