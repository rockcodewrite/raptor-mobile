<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex xs12 sm4 md3>


       <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">

             <v-img :src="pet.img" height="170px"></v-img>


              <h3>{{pet.name}}</h3>

       </v-flex>


        <v-card color="grey lighten-2">
          <v-img src="https://goo.gl/6CQNDo" height="170px"> </v-img>
          <v-card-title>
            <div>
              <h3>Looking for a dog?</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  p {
    margin: 0;
  }
</style>

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

