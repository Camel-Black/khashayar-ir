<template>
  <div>
      <div class="container-fluid">
          <div class="row">
            {{post}}

          </div>
            <div class="row">
              <div class="col">
                <h1>
                  
                  {{post[0].title}}
                </h1>    
              </div>
            </div>
          <div class="content">
            <p v-html="post[0].content">
            </p>
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
//import quill from 'vue-quill-editor';
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