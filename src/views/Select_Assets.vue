<template>
  <div>
    <h1>Select Assets</h1>

    <!--  List the Vehicles -->
    <!--    _________________________________________________________________________________________-->
    <v-list three-line>
      <template v-for="(item, index) in vehicles">
        <v-subheader v-if="item.header" :key="item.UnitID" v-text="item.header"></v-subheader>

        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

        <v-list-item v-else :key="item.title" @click :to="'/Map/' + item.UnitID">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.RegNumber"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subTitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <!-- --END OF LIST-->
    <!--  List the Assets -->
    <!--    _________________________________________________________________________________________-->
    <v-list three-line>
      <template v-for="(item, index) in assets">
        <v-subheader v-if="item.header" :key="item.UnitID" v-text="item.header"></v-subheader>

        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

        <v-list-item v-else :key="item.title" @click :to="'/Map/' + item.UnitID">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.RegNumber"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subTitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <!-- --END OF LIST-->
  </div>
</template>

<script>
//import axios from "axios";
//import mock from "../api5/V5_view_VehiclePositions_.json";
//import * as _ from "underscore";
//import moment from "moment";

export default {
  data() {
    return {
      item: 1,
      errors: [],
      items: [],
      vehicles: [],
      assets: []
    };
  },
  // Fetches posts when the component is created.
  created() {
    //debugger;
    var url = "/api5/V5_view_VehiclePositions_";
    if (!this.mock) {
      url = this.baseUrl + url;
    }
    if (this.debug) {
      console.log(url);
    }
    //debugger;/

    this.$axios
      .get(url)
      .then(response => {
        console.log(response.data);

        var rt = new this.$vehicleLists(this.baseUrl, this.$moment);

        response.data.$values.map(function(value, key) {
          //debugger;
          rt.formatImageIgnStat(value);
          rt.formantSubTitle(value);
        });
        //debugger;
        this.items = response.data.$values;
        //debugger;
        this.vehicles = this.$_.filter(this.items, function(item) {
          return item.UnitModel2ID !== 35;
        });

        this.assets = this.$_.filter(this.items, function(item) {
          return item.UnitModel2ID === 35;
        });
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>















