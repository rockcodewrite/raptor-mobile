<template>
    <div>
      <login v-if="!show"  />

      <mainView v-if="show"  />

      <!-- <router-view></router-view> -->
   </div>
</template>


<script>
import login from "./views/Login";
import mainView from "./views/Main";

export default {
  data() {
    return {
      show: this.loggedIn
    };
  },
  mounted: function() {

    debugger;
    if (this.debug) {
      //console.log(url);
      console.log(this.loggedIn);
    }  
    
    this.show =  this.loggedIn;

  }, 
  components: {
    login,
    mainView
  }
};
</script>

