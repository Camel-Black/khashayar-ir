<template>
  <div>
    <div class="for" v-for="post in posts" v-bind:key="post._id">
      <div class="container">
        <div class="title">
          <h1>
            {{post.title}}
          </h1>
        </div>
        <div class="content">
          <h3>
            {{post.content}}
          </h3>
        </div>
        <div class="author">
          <p>{{post.author}}</p>
        </div>
        <router-link :to="'/posts/'+post.slug">more</router-link>
      </div>
    </div>
    <router-link :to="'/admin'">write new post</router-link>
  </div>
</template>

<script>
import dashify from 'dashify'
export default {
  name:"Home",
  data(){
    return{
      posts:[],
      slug:[]
    }
  },
  methods:{
    getPost(){
      fetch("http://localhost:3000/api/posts/all")
      .then((data)=>{
        return data.json()
      })
      .then((json)=>{
        this.posts = json.result

      })
    },
    dash(text){
      return dashify(text)
    }

  },
  beforeMount(){

    this.getPost()

  }

}
</script>

<style>
.author{
  margin-right: 500px;
}
</style>