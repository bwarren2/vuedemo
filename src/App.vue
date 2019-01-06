<template>
  <div id="app">
    <div v-if="this.editingTopic == null">
    <form @submit.prevent="createTopic">
      <div class="form-group">
        <label>New Topic</label>
        <input type="text" v-model="newTopic">
      </div>
      <button>Send</button>
    </form>
    </div>
    <div v-for="topic in topics" class="topic-deck">
      <div class="topic">
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

  export default {
    name: 'app',
    data () {
      return {
        topics: [],
        newTopic: "",
        editingTopic: null
      }
    },
    methods: {
      createTopic(){
        topicsRef.push({
          user: 'ben',
          title: this.newTopic
        })
        this.newTopic = ""
      },
      deleteTopic(topic){
        topicsRef.child(topic.id).remove()
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
        topicsRef.child(this.editingTopic.id).update({title: this.newTopic})
        this.newTopic = ""
        this.editingTopic = null
      }
    },
    created(){
      topicsRef.on('child_added', (snapshot) => {
        this.topics.push({...snapshot.val(), id: snapshot.key})
      })
      topicsRef.on('child_removed', (snapshot) => {
        const deletedTopic = this.topics.find(topic => topic.id == snapshot.key)
        const id = this.topics.indexOf(deletedTopic)
        this.topics.splice(id, 1)
      }),
      topicsRef.on('child_changed', (snapshot) => {
        const changedTopic = this.topics.find(topic => topic.id == snapshot.key)
        changedTopic.title = snapshot.val().title
      })
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
</style>
