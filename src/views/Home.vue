<template>
  <div>
    <div ref="quills"></div>
    <div class="for" v-for="post in posts" v-bind:key="post._id">
      <div >
        <div class="img">
          <img :src="getImage(`${post.image}`)" alt="">
        </div>
        <div class="title">
          <h1>
            {{post.title}}
          </h1>
        </div>
        <div class="content">
          <div v-html="post.content.substring(1,post.content.length-1)">
            
          </div>
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

//import Quill from 'quill'
export default {
  name:"Home",
  data(){
    return{
      pashm:"asdjahskjd",
      posts:[],
      slug:[],
      html:[],
      deltaS:null
    }
  },
  methods:{
    getPost(){
      fetch("http://localhost:3000/api/posts/all")
      .then((data)=>{
        return data.json()
      })
      .then((json)=>{
        console.log(json)
        this.posts = json.result
      })

    },
    getImage(img){
      return require(img)
    }

  },
  created(){
    this.getPost()
  }
}


</script>

<style>
.author{
  margin-right: 500px;
}
</style>