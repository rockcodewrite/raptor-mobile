<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <H1>About Template</H1>

      <div class="scrollable">
        <div class="scrollable-content">
          <div class="list-group text-center">
            <h1>
              {{title}}
              <small>1.0.4</small>
            </h1>

            <div id="MainMenuIcon">
              <img
                src="https://control.raptortech.co.za/img/Raptor Eye.png"
                id="logo"
                data-height-percentage="54"
                scale="0"
                data-actual-width="450"
                data-actual-height="48"
              >
            </div>

            <div class="list-group-item list-group-item-home">
              <div>
                <i class="fa fa-dashboard feature-icon text-primary"></i>
              </div>
              <div>
                <pre>{{userAgent}}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<style scoped>
p {
  margin: 0;
}
</style>

<script>
export default {
  data() {
    return {
      title: "Raptor"
    };
  }
};
</script>