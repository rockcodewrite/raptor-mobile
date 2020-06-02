 <template>
  <div>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card class="mx-auto" outlined>
              <div class="list-group-item list-group-item-home">
                <h1 class="ng-binding" style="text-align:center">Raptor Mobile
                  <small></small>
                </h1>

                <v-layout row>
                  <v-flex xs4 order-md3 order-xs1>
                    <v-card dark tile flat color="red lighten-2"></v-card>
                  </v-flex>

                  <v-flex xs4 order-md2 order-xs2>
                    <v-card dark tile flat color="white">
                      <v-img
                        id="logo2"
                        src="https://control.raptortech.co.za/img/Raptor Eye.png"
                        max-width="200"
                      ></v-img>
                    </v-card>
                  </v-flex>

                  <v-flex xs4 order-md1 order-xs3>
                    <v-card dark tile flat color="red darken-1"></v-card>
                  </v-flex>
                </v-layout>

                <div>
                  <div style="text-align:center">Emergency: Theft or Hijacking</div>
                  <div style="text-align:center">
                    <a href="tel:+27-860-106-231">0860 106 231 (PRIMARY)</a>
                  </div>
                </div>
              </div>

              <v-card-actions>
                <!--             
                                        <v-btn text>Button</v-btn>
                                        <v-btn text>Button</v-btn>
                -->
              </v-card-actions>
            </v-card>

            <v-card class="mx-auto">
              <v-card-title primary-title class="justify-center">
                <span sm12 class="fa-stack fa-lg">
                  <i class="fa fa-circle-thin fa-stack-2x" style="color:#2196F3"></i>
                  <i class="fa fa-user fa-stack-1x" style="color:#2196F3"></i>
                </span>

                <div sm12>Client Details:</div>
              </v-card-title>

              <div style="text-align:center">
                <div>
                  <b>Name:</b>
                  {{client_details.Title}}
                  {{client_details.Initials}} {{client_details.FName}}
                  {{client_details.LName}}
                </div>

                <div>
                  <b>Land line:</b>
                  {{client_details.Tel_Code}}
                  {{client_details.Tel_No}}
                </div>

                <div>
                  <b>Mobile:</b>
                  {{client_details.CellNo}}
                </div>

                <div>
                  <b>Email:</b>
                  {{client_details.EMailAddress}}
                </div>
              </div>

              <v-card-actions>
                <!--                     <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>-->
              </v-card-actions>

              <!-- --END OF LIST-->
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template> 



<script>
export default {
  data() {
    return {
      item: 1,
      errors: [],
      //items: [],
      vehicles: [],
      assets: [],
      client_details: []
    };
  },

  created() {
    var url = "/api5/V5_Client_";
    if (!this.mock) {
      url = this.baseUrl + url;
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
        //debugger;

        this.client_details = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>