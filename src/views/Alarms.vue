<template>
  <div>
    <h1>
        Alarms: {{$route.params.name}}
    </h1>

    <!-- {{$route.params.id }} : {{$route.params.day }}-->
    <!--    _________________________________________________________________________________________-->
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.UnitID" v-text="item.header"></v-subheader>

        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar>
            <v-icon>fa fa-exclamation-triangle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html=" '[' + item.Name + ']'  "></v-list-item-title>
            <v-list-item-subtitle>
              <b>Time:</b>
              {{item.EventDate.split('T')[1]}}
              <b>Distance:</b>
              {{item.Description}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
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

  created() {
    /**
     * {{ $route.params.id }}{{ $route.params.id }}
     *
     *
     */
    var url = "/api5/V5_view_ViolationsByDay_"; //

    if (!this.mock) {
      url = this.baseUrl + url;
      //debugger;
      var Day = this.$route.params.day.replace(/-/g, "");
      url += "?UnitID=" + this.$route.params.id + "&Day=" + Day;
    } else {
      url += ".json";
    }

    if (this.debug) {
      console.log(url);
    }

    this.$axios
      .get(url)
      .then(response => {
        if (this.debug) {
          console.log(this.$route.params.id);
          console.log(response.data);
        }

        // Add
        //var retList = new this.$vehicleLists(this.baseUrl, this.$moment);
        //response.data.$values.map(function(value, key) {
        //  //retList.formatImageIgnStat(value);
        //  //retList.formantSubTitle(value);
        //});

        this.items = response.data.$values;
        this.items.forEach(function(entry) {
          entry.Start = entry.StartTime.split("T")[1];

          entry.SubTitle = entry.StartTime.split("T")[1];
          entry.SubTitle += " - ";
          entry.SubTitle += entry.EndTime.split("T")[1];
        });
        console.log(this.items);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>















