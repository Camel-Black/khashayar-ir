<template>
<div class="body">
     <div id="wrapper">
        <sideBar></sideBar>
        <div class="page-content-wrapper"><a class="btn btn-link" role="button" id="menu-toggle" href="#menu-toggle"><i class="fa fa-reorder"></i></a>
            <div class="container-fluid">
                <div class="row">
                    <div class="col" style="border-bottom: 1px solid #2d2d2d">
                        <h2 class="display-4" style="margin: 0px;margin-bottom: 26px;font-size: 56px;font-weight: bold;">Create Post</h2>
                        <p class="d-inline m-2" style="margin: 0px;margin-bottom: 20px;font-size: 38px;">Whats in ur mind?</p><b-button class="btn btn-link " style=" margin-bottom: 15px;background-color:white" type="submit" href="/admin/posts/new">
                            <vue-fontawesome icon="plus" size="1" color="dark"></vue-fontawesome>
                        </b-button></div>
                </div>
                <div class="row" style="margin: 0px;">
                    <div class="col" style="padding: 0px;">
                        <h2 class="display-4" style="margin: 0px;margin-bottom: 26px;font-size: 56px;font-weight: bold;">Posts</h2>
                        <div class="row padMar" style="margin: 0px;">
                            <div class="col padMar">
                                <div class="input-group" style="margin-bottom: 26px">
                                    <div class="input-group-prepend"></div><input v-model="searchString" class="form-control autocomplete" type="text" placeholder="Type What do u looking for?">
                                    <div class="input-group-append"><button @click="search()" class="btn btn-warning" type="button"><vue-fontawesome icon="search" size="1" color="dark"></vue-fontawesome></button></div>
                                </div>
                            </div>
                        </div>
                        <div v-if="show">
                            <div class="card-columns">
                                <div class="card mb-4"  v-for="post in posts" :key="post._id">
                                    <img :src="require('@/static/'+post.image)" class="card-img-top w-100 d-block">
                                    <div class="card-body">
                                        <h4 class="d-inline card-title">{{post.title}}</h4>
                                        <p class="d-inline ml-3" style="color:grey">{{post.date}}</p>
                                        <p class="card-text"><p class="cut" v-html="post.content"></p>
                                        <span class="badge badge-light d-block"
                                            style="width: 113px;margin-bottom: 9px;">{{post.author}}</span>
                                        <div class="btn-group" role="group">
                                            <b-button class="btn btn-dark" type="submit" style="margin: 0px;" v-bind:href="'/admin/post/edit/'+post.slug">
                                                <vue-fontawesome icon="pencil" size="1" color="dark"></vue-fontawesome>
                                            </b-button>
                                            <button class="btn btn-warning" type="button" style="margin: 0px;" @click="deletePost(post._id)">
                                                <vue-fontawesome icon="trash" size="1" color="dark"></vue-fontawesome>
                                            </button>
                                            <button class="btn btn-light" type="button" style="margin: 0;">
                                                <vue-fontawesome icon="picture-o" size="1" color="dark"></vue-fontawesome>
                                            </button>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div v-if="!show">
                            <div class="card-columns">
                                <div class="card mb-4"  v-for="post in searched" :key="post._id">
                                    <img :src="require('@/static/'+post.image)" class="card-img-top w-100 d-block">
                                    <div class="card-body">
                                        <h4 class="d-inline card-title">{{post.title}}</h4>
                                        <p class="d-inline ml-3" style="color:grey">{{post.date}}</p>
                                        <p class="card-text"><p class="cut" v-html="post.content.substring(1,post.content.length-1)"></p>
                                        <span class="badge badge-light d-block"
                                            style="width: 113px;margin-bottom: 9px;">{{post.author}}</span>
                                        <div class="btn-group" role="group">
                                            <b-button class="btn btn-dark" type="submit" style="margin: 0px;" v-bind:href="'/admin/post/edit/'+post._id">
                                                <vue-fontawesome icon="pencil" size="1" color="dark"></vue-fontawesome>
                                            </b-button>
                                            <button class="btn btn-warning" type="button" style="margin: 0px;" @click="deletePost(post._id)">
                                                <vue-fontawesome icon="trash" size="1" color="dark"></vue-fontawesome>
                                            </button>
                                            <button class="btn btn-light" type="button" style="margin: 0;">
                                                <vue-fontawesome icon="picture-o" size="1" color="dark"></vue-fontawesome>
                                            </button>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</div>
</template>

<script>
import Footer from '../../components/footer'
import sideBar from '../../components/dashboard/sideBar'
import moment from 'moment'
import Swal from 'sweetalert2'
import Axios from 'axios'

export default {
    name:'posts',
    data(){
        return{
            posts:[],
            show: true,
            searchString:"",
            searched:[],
            message:""

        }
    },
    components:{
        Footer,sideBar
    },
    methods:{
        getPosts: function () {
            fetch('http://localhost:3000/api/posts/all')
            .then(res=>{
                console.log(res)
                return res.json()
            })
            .then(result=>{
                let res = result.result
                this.posts = res
                
                this.posts.forEach(post=>{
                    moment.locale("fa");
                    let time = moment.unix(post.timestamp).startOf('minute').fromNow()
                    let date = "date"
                    post[date] = time
                    
                })
            })
            console.log( this.posts.content )
        },
        deletePost:function(postIds){
        var token = localStorage.getItem("jwt");
        Axios.post("http://localhost:3000/api/posts/delete",{
            postId: postIds
        },{
    headers: { Authorization: "Bearer " + token }
})
        .then(result=>{
            if(result.status == 200){
                Swal.fire('Success','post successfully deleted',"success")
                .then(()=>{
                    this.$router.go()
                })

            }
            else{
                Swal.fire('Faild','delete post faild ','error')
            }
        })
    },
    search: function(){
        let flag = 0
        this.show = false
        this.posts.forEach(post=>{
            console.log(post.title.search(this.searchString))
            if(post.title.search(this.searchString) != -1){
                this.searched.push(post)
                flag++
            }
            else{
                if(flag == 0){
                    this.message = "not found"
                }
            }
        })
    }
},
    created(){
        this.getPosts()
    }

}
</script>

<style>
@import url('../../../bootstrap/assets/css/Sidebar-Menu-1.css');
@import url('../../../bootstrap/assets/css/styles.css');
.cut { 
  text-overflow: ellipsis !important;
  overflow: hidden !important; 
  width: 160px !important; 
  height: 1.2em !important; 
  white-space: nowrap !important;
}

</style>