<template>
  <div id="app">
    <div class="fixed">
      <div v-if="this.editingTopic == null" >
        <v-form @submit.prevent="createTopic">
          <v-container>
            <v-layout align-center justify-center>
              <v-flex md4>
                <v-text-field v-model="newTopic" label='New Topic' required></v-text-field>
              </v-flex>
              <v-flex md4>
                <v-btn large color="blue" @click="createTopic">Create Topic</v-btn>
              </v-flex>

            </v-layout>
          </v-container>
        </v-form>
      </div>
    </div>
    <div class="topic-deck">
    <div v-for="topic in topics" class="topic">
      <div v-if="editingTopic === topic">
          <v-form @submit.prevent="updateTopic(topic)">
            <v-container>
              <v-layout align-center justify-center >
                <v-flex md2>
                  <v-text-field
                  v-model="newTopic"
                  label='New Topic'
                  required
                  :rules=topicRules
                  ></v-text-field>
                </v-flex>
                <v-flex md2>
                  <v-btn large color="blue" @click="updateTopic(topic)">Update</v-btn>
                </v-flex>
                <v-flex md2>
                  <v-btn large color="red" @click="cancelUpdate(topic)">Cancel Update</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>

        </div>
        <div v-else>
          <h1>{{topic.title}}</h1>
          <v-btn large color="primary" @click="editTopic(topic)">Edit</v-btn>
          <v-btn large color="red" @click="deleteTopic(topic)">Delete</v-btn>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import {db} from './firebase.js'
  let topicsRef = db.ref('topics')
  let testRef = db.ref('test')
  export default {
    name: 'app',
    data () {
      return {
        newTopic: "",
        editingTopic: null,
        topicRules: [
          v => !!v || 'You need to enter something',
          v => v.length <= 40 || 'Please enter something shorter than 40 characters'
        ],

      }
    },
    firebase: {
      topics:{
        source: topicsRef,
        cancelCallback (err) {
          console.error(err)
        }
      }
    },
    methods: {
      createTopic(){
        this.$firebaseRefs.topics.push({
          user: 'ben',
          title: this.newTopic
        })
        this.newTopic = ""
      },
      deleteTopic(topic){
        this.$firebaseRefs.topics.child(topic['.key']).remove()
      },
      editTopic(topic){
        this.editingTopic = topic
        this.newTopic = topic.title
      },
      cancelUpdate(topic){
        this.editingTopic = null
        this.newTopic = ""
      },
      updateTopic(topic){
        this.$firebaseRefs.topics.child(this.editingTopic['.key']).update({title: this.newTopic})
        this.newTopic = ""
        this.editingTopic = null
      }
    }
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
