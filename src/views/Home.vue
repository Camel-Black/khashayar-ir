<template>
  <div>
    <div ref="quills"></div>
      <div class="card-columns">
          <div class="card mb-4"  v-for="post in posts" :key="post._id">
              <img :src="require('@/static/'+post.image)" class="card-img-top w-100 d-block">
              <div class="card-body">
                  <h4 class="d-inline card-title">{{post.title}}</h4>
                  <p class="d-inline ml-3" style="color:grey">{{post.date}}</p>
                  <p class="card-text"><p class="cut" v-html="post.content.substring(1,post.content.length-1)"></p>
                  <span class="badge badge-light d-block"
                      style="width: 113px;margin-bottom: 9px;">{{post.author}}</span>
                  <div class="btn-group" role="group">
                      <button class="btn btn-light" type="button" style="margin: 0;" :href="'/posts'+post.slug" @click="$router.push('/posts/'+post.slug)" >
                          <vue-fontawesome icon="picture-o" size="1" color="dark"></vue-fontawesome>
                      </button>
                  </div>
              </div>
          </div> 
      </div>
    <router-link :to="'/admin'">write new post</router-link>
  </div>
</template>

<script>
//require('@/assets/images/post/'+img)
//import Quill from 'quill'
export default {
  name:"Home",
  data(){
    return{
      pashm:"asdjahskjd",
      img:[],
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
        var i = 0
        this.posts = json.result
        this.posts.forEach(post => {
            this.img = post.image
            post['number'] = i
            i= i+1
        });
        console.log(this.img)
      })
      
    },
    // s(k){
    //   var image = require.context('@/static',true,/\.png$/)
    //   return image('@/static/'+k)
    // }

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
.img{
  width: 10vw;
  height: 10vw;
}
</style>