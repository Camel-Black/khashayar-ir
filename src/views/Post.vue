<template>
  <div>
      <div class="container">
        <div class="title">
          <h1>
            {{post[0].title}}
          </h1>
        </div>
        <div class="content">
          <h3>
            {{post[0].content}}
          </h3>
        </div>
        <div class="author">
          <p>{{post[0].author}}</p>
        </div>
        <div>
          <router-link :to="'/'" >Back</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"Post",
  data(){
    return{
      post:{}
    }
  },
  methods:{
    getSinglePost(){
      var title = this.$route.params.postName
      fetch(`http://localhost:3000/api/posts/${title}`)
      .then(data =>{
        return data.json()
      })
      .then(json =>{
        this.post = json
        console.log(this.post[0].title)
      })
    }
    
  },
  beforeMount(){
    this.getSinglePost()
  }

}
</script>

<style>

</style>