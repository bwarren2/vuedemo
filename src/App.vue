<template>
  <div id="app">

    <form @submit.prevent="createTopic">
      <div class="form-group">
        <label>New Topic</label>
        <input type="text" v-model="newTopic">
      </div>
      <button>Send</button>
    </form>

    <div v-for="topic in topics" class="topic-deck">
      <div class="topic">
        <h1>{{topic.title}}</h1>
        <button @click="deleteTopic(topic)">Delete</button>
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
        newTopic: ""
      }
    },
    methods: {
      createTopic(){
        this.topics.push(this.newTopic)
        topicsRef.push({
          user: 'ben',
          title: this.newTopic
        })
        this.newTopic = ""
      },
      deleteTopic(topic){
        topicsRef.child(topic.id).remove()
      }
    },
    created(){
      topicsRef.on('child_added', (snapshot) => {
        this.topics.push({...snapshot.val(), id: snapshot.key})
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
