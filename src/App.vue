<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item to="/" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/foo" link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
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

        <v-list-item link>
          <v-list-item-action>
            <v-icon>fa fa-arrows-h</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Trips</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>fa fa-exclamation-triangle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Alarms</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>fa fa-arrows</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Alarms</v-list-item-title>
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

        <v-list-item link>
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout . . .</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- 
src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                              
      -->
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

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>

      <router-link to="/foo">Go to Foo</router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>



