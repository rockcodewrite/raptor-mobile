 <template>
  <div> 
     <h1>Home</h1>
     <v-card>
        <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg
        >
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

</div>
<!-- 
<div class="scrollable">
    <div class="scrollable-content">
        <div class="list-group text-center">


            <div class="list-group-item list-group-item-home">
                <h1>
                    {{title}} <small></small>
                </h1>

                <div id="MainMenuIcon">
                    <img ng-src="{{pathLogo}}" id="logo" data-height-percentage="54" scale="0" data-actual-width="450" data-actual-height="48">
                </div>

                <div>
                    <div style="text-align:center">
                        Emergency: Theft or Hijacking
                    </div>
                    <div>
                        <a href="tel:+27-860-106-231">0860 106 231 (PRIMARY)</a>
                    </div>
                </div>

            </div>

            <div class="list-group-item list-group-item-home">
                <div>
                    <i class="fa fa-user feature-icon text-primary"></i>
                </div>
                <div>
                    <h3 class="home-heading">Client Details</h3>
                    <div>Name: {{client_details.Title}} {{client_details.Initials}} {{client_details.FName}} {{client_details.LName}} </div>

                    <div>Contact: {{client_details.Tel_Code}} {{client_details.Tel_No}}  </div>

                    <div>Contact: {{client_details.CellNo}}  </div>

                    <div>email: {{client_details.EMailAddress}}  </div>

                </div>
            </div>

       

        </div>
    </div>
</div>

-->


 
 </template> 



<script>
   import {Dogs} from "../data/dogs";
   

  export default {
    data() {
      return {
        dogs: Dogs
      };
    }
   };
   
   
</script>