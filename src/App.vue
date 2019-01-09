<template>
  <v-app>
    <v-navigation-drawer app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Firebase Demo
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile to='empty'>Nothing</v-list-tile>
          <v-list-tile to='topics'>Topics</v-list-tile>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>

        <!-- This is the important part -->
        <router-view></router-view>

      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>

</template>

<script>
  export default {
    data () {
      return {

      }
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
div.fixed {
  height: 100px;
}
div.topic {
  height: 100px;
  margin:20px;
}
</style>
