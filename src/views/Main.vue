<template>
  <v-app>
    <!-- 
          ____________________________________________________ Sidbar 
    -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item to="/home" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/assets" link>
          <v-list-item-action>
            <v-icon>fa fa-car</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Vehicles /</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>fa fa-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Assets</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/vehiclesForTrips">
          <v-list-item-action>
            <v-icon>fa fa-arrows-h</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Trips</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  to="/alarms" link>
          <v-list-item-action>
            <v-icon>fa fa-exclamation-triangle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Alarms</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Switch/full_screen">
          <v-list-item-action>
            <v-icon>fa fa-arrows</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Full Screen</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about" link>
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>



        <v-list-item to="/logout">
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout . . .</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-img
        src="https://control.raptortech.co.za/img/powered_by_head_shed_login.png"
        width="256px"
        dark
      >
        <v-row class="fill-height">
          <v-card-title>
            <v-btn dark icon>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-title>

          <v-spacer></v-spacer>
          
        </v-row>
      </v-img>
    </v-navigation-drawer>

    <!-- 
          ____________________________________________________ End Sidbar _______________________________________________
                              
    -->
    <v-app-bar app color="blue" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Raptor Mobile &nbsp; &nbsp; </v-toolbar-title>
      <v-btn icon  @click="navigateBack()" >
        <v-icon>mdi-arrow-left-bold</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon  to="/Map/123">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="blue" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      drawer: null
      //,show: true      
    };
  },
  methods: {

    navigateBack: function(message) {
      //debugger;
      if(this.$router !== null ){
        console.log(this.$router.history.current.fullPath)
        this.$router.go(-1)
        this.$router.go(this.$router.currentRoute)
        console.log(this.$router.history.current.fullPath)
        debugger;
        //if (this.$router.history.current.fullPath !== "/") {
        //    this.$router.push("/");
       // }
      }

    }
  }  
};
</script>


