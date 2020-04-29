<template>
  <div>
    <h1>Select Assets</h1>

    <v-list shaped>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.RegNumber"></v-list-item-title>


            
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>


<script>
import axios from "axios";
import mock from "../api5/V5_view_VehiclePositions_.json";

console.log("Hey dude.");

export default {
  data() {
    return {
      item: 1,
      items: [],
      errors: []
    };
  },
  // Fetches posts when the component is created.
  created() {
    //debugger;
    axios
      .get("/api5/V5_view_VehiclePositions_.json")
      .then(response => {
        // JSON responses are automatically parsed.
        //this.posts = response.data


        console.log(response); debugger;
        if(this.mock) {
            this.items =  mock.$values;
        }
        else {
            this.items =  response;
        }
        
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>