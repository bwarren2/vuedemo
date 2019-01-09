<template>
  <div id="app">
    <div class="fixed">
    <div v-if="this.editingTopic == null" >
    <form @submit.prevent="createTopic">
      <div class="form-group">
        <label>New Topic</label>
        <input type="text" v-model="newTopic">
      </div>
      <button>Send</button>
    </form>
    </div>
    </div>
    <div class="topic-deck">
    <div v-for="topic in topics" class="topic">
      <div v-if="editingTopic === topic">
          <input type="text" v-model="newTopic">
          <button @click="updateTopic(topic)">Update</button>
          <button @click="cancelUpdate(topic)">Cancel</button>
        </div>
        <div v-else>
          <h1>{{topic.title}}</h1>
          <button @click="deleteTopic(topic)">Delete</button>
          <button @click="editTopic(topic)">Edit</button>
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
        editingTopic: null
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
