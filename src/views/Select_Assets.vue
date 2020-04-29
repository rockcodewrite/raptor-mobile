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

          <!--
"<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
function formatImageIgnStat(cellValue) {

          -->
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
import axios from "axios";
import mock from "../api5/V5_view_VehiclePositions_.json";
import * as _ from "underscore";
//import moment from "moment";

console.log("Hey dude.");

export default {
  data() {
    return {
      item: 1,
      //items: [],
      errors: [],
      items: [],
      vehicles: [],
      assets: []
    };
  },
  // Fetches posts when the component is created.
  created() {
    //debugger;
    axios
      .get("https://control.raptortech.co.za/api5/V5_view_VehiclePositions_")
      .then(response => {
        // JSON responses are automatically parsed.
        //this.posts = response.data
        /* 
        console.log(response);
        debugger;
        if (this.mock) {
          this.items = mock.$values;
        } else {
          this.items = response;
        } */

        // Add avat to things
        // debugger;
        console.log(response.data);
        //debugger;

        response.data.$values.map(function(value, key) {
          formatImageIgnStat(value);
          formantSubTitle(value);
        });

        this.items = response.data.$values;

        this.vehicles = _.filter(this.items, function(item) {
          return item.UnitModel2ID !== 35;
        });

        this.assets = _.filter(this.items, function(item) {
          return item.UnitModel2ID === 35;
        });
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

/*

console.log(apiUrl);

var app1 = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  router,
  data: () => ({
    items: [],
    vehicles: [],
    assets: []
  }),

  mounted() {
    axios.get(apiUrl).then(response => {
      // Add avat to things
      // debugger;
      response.data.$values.map(function(value, key) {
        formatImageIgnStat(value);
        formantSubTitle(value);
      });

      this.items = response.data.$values;

      this.vehicles = _.filter(this.items, function(item) {
        return item.UnitModel2ID !== 35;
      });

      this.assets = _.filter(this.items, function(item) {
        return item.UnitModel2ID === 35;
      });

      //console.log(response);
    });
  },

  created() {
    //pseudo code
    _gma = new google_maps_all();
  },

  computed: {
    // a computed getter
    /*    reversedMessage: function() {
      // `this` points to the vm instance
      //debugger;
      return this.message
        .split("")
        .reverse()
        .join("");
    } */
  }
});



*/














