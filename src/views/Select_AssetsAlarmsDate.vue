<template>
  <div>
    <h2> Day of Trips</h2>
    <!-- <h1>Select Assets</h1> 
    
    {{$route.params.id }}
    -->
    <!--  List the Vehicles -->
    <!--    _________________________________________________________________________________________-->
    <v-layout row>
      <v-btn @click="todayClicked()" large block color="primary">Today</v-btn>
    </v-layout>

    <!-- <v-row justify="center">
      <div>
        <v-btn large block color="primary" v-on:click="todayClicked()">Today</v-btn>
      </div>
    </v-row>-->
    <v-row justify="center">
      <v-date-picker
        full-width
        :landscape="$vuetify.breakpoint.smAndUp"
        class="mt-4"
        @click:date="dateClicked()"
        v-model="picker"
      ></v-date-picker>
    </v-row>
  </div>
</template>



<script>
export default {
  data() {
    return {
      client_details: [],
      picker: new Date().toISOString().substr(0, 10)
    };
  },

  methods: {
    dateClicked: function(e) {
      console.log(this.picker);
      /**
       *  Pushrouter method was documented here: 
       *   https://medium.com/@saidhayani/understand-routing-in-vue-js-with-examples-6da96979c8e3
       */
       // https://control.raptortech.co.za/api5/V5_view_ViolationsByDay_?UnitiD=33066&Day=2020/09/14
      var route = "/alarms/" + this.$route.params.id + "/" + this.picker
      if (this.debug) {
          console.log(route);
      }
      this.$router.push(route);

    },

    todayClicked: function(message) {
      var today = this.picker = new Date().toISOString().substr(0, 10);
      var route = "/alarms/" + this.$route.params.id + "/" + today;
      if (this.debug) {
          console.log(route);
      }
      this.$router.push(route);

    }
  }
};
</script>

