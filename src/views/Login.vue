<template>
  <div id="app">
    <v-app dark="dark">
      <v-content>
        <v-container fill-height="fill-height">
          <v-layout align-center="align-center" justify-center="justify-center">
            <v-flex class="login-form text-xs-center">
              <div class="display-1 mb-3">
                <v-icon class="mr-2" large="large">work</v-icon>MyWorkspace
              </div>
              <v-card light="light">
                <v-card-text>
                  <div class="subheading">
                    <template v-if="options.isLoggingIn">Log in to your customer portal</template>
                    <template v-else="v-else">Crate a new account</template>
                  </div>

                  <v-form>
                    <v-text-field
                      v-if="!options.isLoggingIn"
                      v-model="user.name"
                      light="light"
                      prepend-icon="person"
                      label="Name"
                    ></v-text-field>
                    <v-text-field
                      v-model="user.email"
                      light="light"
                      prepend-icon="email"
                      label="Email"
                      type="email"
                    ></v-text-field>
                    <v-text-field
                      v-model="user.password"
                      light="light"
                      prepend-icon="lock"
                      label="Password"
                      type="password"
                    ></v-text-field>

                    <!-- <v-checkbox v-if="options.isLoggingIn" v-model="options.shouldStayLoggedIn" light="light" label="Stay logged in?" hide-details="hide-details"></v-checkbox> -->
                    <v-btn
                      v-if="options.isLoggingIn"
                      @click.prevent
                      block="block"
                      @click="btnSignIn_Click()"
                      type="submit"
                    >Sign in</v-btn>
                    <!-- <v-btn v-else="v-else" block="block" type="submit" @click.prevent="(options.isLoggingIn = true)">Sign up</v-btn>-->
                  </v-form>
                </v-card-text>
              </v-card>

              <v-alert
                dense
                outlined
                type="error"
                v-if="!isLoggingIn"
              >
                <strong> Error:</strong>  Unable to login.  <strong> </strong> 
              </v-alert>
                      

              <!-- <div v-if="options.isLoggingIn">Don't have an account?
              <v-btn light="light" @click="(options.isLoggingIn = false)">Sign up</v-btn>
              </div>-->
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer app="app">
        <v-flex class="text-xs-center">Â© 2018. All rights reserved.</v-flex>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "coleman",
        password: "admin",
        name: "John Doe"
      },

      options: {
        isLoggingIn: true,
        shouldStayLoggedIn: true
      }
    };
  },

  mounted: function() {

  },

  methods: {
    btnSignIn_Click: function() {
      console.log("btnSignIn_Click()");

      var url = "/api/Authenticate?redirect=false";
      if (!this.mock) {
        url = this.baseUrl + url;
      }
      if (this.debug) {
        console.log(url);
      }

      console.log("url:" + url); //debugger;
      this.$axios
        .post(url, {
          username: this.user.email,
          password: this.user.password,
          mobile: false,
          page: 0,
          location: "",
          UnitID: ""
        })
        .then(response => {
          debugger;
          if (this.debug) {
            console.log(response.data);
          }

          if (response.data.success === true)          {
             this.client_details = response.data;
             this.loggedIn = true;
             this.$parent.show = true;
          }
        else   {

          }
        })
        .catch(e => {
          console.log(e);
          //this.errors.push(e);
        });
    }
  },

  created() {
    var url = "/api/Authenticate";
    if (!this.mock) {
      url = this.baseUrl + url;
    }
    if (this.debug) {
      console.log(url);
    }
    //axios.post(url[, data[, config]])
  }

  /*          
  
  
  
      <v-layout row>
      <v-btn @click="todayClicked()" large block color="primary">Today</v-btn>
    </v-layout>

  
  
  
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
      
         Pushrouter method was documented here: 
          https://medium.com/@saidhayani/understand-routing-in-vue-js-with-examples-6da96979c8e3

       
      this.$router.push("/Trips/" + this.$route.params.id + "/" + this.picker);
    },

    todayClicked: function(message) {
      this.picker = new Date().toISOString().substr(0, 10);
      console.log(this.picker);
    }
  }
};
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  $scope.SendDetailsPost = function () {
                return $http.post(_baseUrl + '/api/Authenticate', { username: $scope.username, password: $scope.password, mobile: !_isNotMobile, page: $scope.page, location: $scope.location, UnitID: $scope.UnitID })
                    .then(function (response) {
                        if (response.data.success) {
                            //AuthenticationService.SetCredentials(vm.username, vm.password);
                            // depending on what login direct
                            // debugger;
                            var urlPath = response.data.response_url;
                            if (_debug) {
                                $window.location.href = "/AppMain/Index.html"
                            }
                            else {
                                $window.location.href = urlPath;// '/App.Main/Main.cshtml';
                            }

                        } else {
                            $scope._errorFlag = true;
                            $scope._Error = response.data.message;// Err.Message.replace(/(\r\n|\n|\r)/gm, " ");

                        }
                    });
            } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form {
  max-width: 650px;
}
</style>