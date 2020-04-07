<template>
<!-----eslint-disable---->
     <div>
        <div id="wrapper" class="ss" >
        <div id="sidebar-wrapper" style="background-color: rgb(244,244,244);" ref="wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"> <a class="hover" href="#" style="color: rgb(166,166,166);">Home </a></li>
                <li> <a class="hover" href="#" style="color: rgb(33,37,41);">Post</a></li>
                <li> <a href="#" style="color: rgb(0,0,0);">Comments</a></li>
                <li> <a href="#" style="color: rgb(0,0,0);" @click="logUserOut">Logout</a></li>
            </ul>
        </div>
        <div class="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <h1>khashayar.ir</h1>
                        </div>
                        <p>{{user.email}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div style="height: 64px;"></div>
                        <p style="font-size: 39px;font-weight: bold;">Recent Post</p>
                        <div style="height: 64px;"></div>
                    </div>
                </div>
                <div class="row">
                            <div class="card-group">
                                
                                <div v-for="post in posts.slice(Math.max(posts.length - 3, 0))" :key="post._id">
                                   <b-col>
                                    <div class="card"><img class="card-img-top w-100 d-block">
                                        <div class="card-body">  
                                            <h4 class="card-title">{{post.title}}</h4>
                                            <p class="card-text"><p>{{post.content}}</p><b-button to="admin " class="d-flex btn-dark justify-content-start">Edit</b-button>
                                            <button @click.alt="deletePost(post._id)" to="#" type="button" class="d-flex ml-auto p-2 btn btn-warning" value="Delete">Delete</button>
                                            <p class="time">{{post.date}}</p>
                                            </div>
                                    </div>
                                    </b-col>
                                </div>
                            </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p style="font-size: 36px;margin: 0px;margin-top: 37px;font-weight: bold;margin-bottom: 18px;">Comments</p>
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <div class="card-body" style="height: 137px;">
                                        <ul class="list-group">
                                            <li class="list-group-item" style="margin-bottom:6px;">
                                                <div class="media">
                                                    <div></div>
                                                    <div class="media-body">
                                                        <div class="media" style="overflow:visible;">
                                                            <div></div>
                                                            <div class="media-body" style="overflow:visible;">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <p><a href="#">Sara Doe:</a> This guy has been going 100+ MPH on side streets. <br>
<small class="text-muted">August 6, 2016 @ 10:35am </small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </div>
</template>

<script>
import moment from 'moment'
import VueJwtDecode from 'vue-jwt-decode'
import Axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name:"dashboard",
    data(){
        return{
            posts:[],
            user:{},
            date:[]
        }
    },
    methods:{
        getPosts: function () {
            fetch('http://localhost:3000/api/posts/all')
            .then(data=>{
                return data.json()
            })
            .then(result=>{
                let res = result.result
                this.posts = res
                
                this.posts.forEach(post=>{
                    let time = moment.unix(post.timestamp).startOf('hour').fromNow()
                    let date = "date"
                    post[date] = time
                })
            })
            
            console.log( this.posts.content )
        },
            getUserDetails:function() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
            
    },
        logUserOut: function() {
      localStorage.removeItem("jwt");
      this.$router.push("/admin/login");
    },
    deletePost:function(postIds){
        Axios.post("http://localhost:3000/api/posts/delete",{
            postId: postIds
        })
        .then(result=>{
            if(result.status == 200){
                Swal.fire('Success','post successfully deleted',"success")

            }
            else{
                Swal.fire('Faild','delete post faild ','error')
            }
        })
    }
    },
    created(){
        this.getPosts()
        this.getUserDetails()
    }
}
</script>

<style>
@import url('../../../bootstrap/assets/css/Sidebar-Menu.css');
.time{
    font-size: 10px;
    color: grey;
}

</style>