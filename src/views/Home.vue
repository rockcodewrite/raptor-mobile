 <template>
  <div>
    <h1>Home</h1>
    <v-card>
      <v-container fluid style="min-height: 0;" grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <v-card>
      <v-container fluid style="min-height: 0;" grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>

                <div>
                  <i class="fa fa-user feature-icon text-primary"></i>
                </div>

                <div>
                  <h3 class="home-heading">Client Details</h3>
                  <div>Name: {{client_details.Title}} {{client_details.Initials}} {{client_details.FName}} {{client_details.LName}}</div>

                  <div>Contact: {{client_details.Tel_Code}} {{client_details.Tel_No}}</div>

                  <div>Contact: {{client_details.CellNo}}</div>

                  <div>email: {{client_details.EMailAddress}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
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
        debugger;

        this.client_details = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>