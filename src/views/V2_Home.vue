 <template>
  <div>
    <h1>Home</h1>

    <v-card class="mx-auto" outlined>
      <v-card-title primary-title>
        <div>
          <h1 class="text-center">
            <span class="fa fa-user feature-icon text-primary"></span>
          </h1>
          <h3 class="headline mb-0">Client Details</h3>
          <div>
            <div>Name: {{client_details.Title}} {{client_details.Initials}} {{client_details.FName}} {{client_details.LName}}</div>

            <div>Contact: {{client_details.Tel_Code}} {{client_details.Tel_No}}</div>

            <div>Contact: {{client_details.CellNo}}</div>

            <div>email: {{client_details.EMailAddress}}</div>
          </div>
        </div>
        <v-card-text>"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">Client Details</v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>48%</v-list-item-subtitle>
          </v-list-item>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey">
          <v-icon>fa fa-user fa-5x</v-icon>
          <i class="fa fa-user feature-icon text-primary"></i>
        </v-list-item-avatar>

        <v-icon>fas fa-edit</v-icon>
      </v-list-item>

      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
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