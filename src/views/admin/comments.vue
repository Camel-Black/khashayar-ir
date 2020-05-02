<template>
<div class="body">
     <div id="wrapper">
        <sideBar></sideBar>
        <div class="page-content-wrapper"><a class="btn btn-link" role="button" id="menu-toggle" href="#menu-toggle"><i class="fa fa-reorder"></i></a>
            <div class="container-fluid">
                <div class="row">
                    <div class="col" style="border-bottom: 1px solid #2d2d2d">
                        <h2 class="display-4" style="margin: 0px;margin-bottom: 26px;font-size: 56px;font-weight: bold;">Comments Approval</h2>
                        <h2> number of pending comments: <span>{{comments.length}}</span></h2>
                    </div>
                </div>
                <div class="row" style="margin: 0px;">
                    <div class="col" style="padding: 0px;">
                        <h2 class="display-4" style="margin: 0px;margin-bottom: 26px;font-size: 56px;font-weight: bold;">comments</h2>
                        <div class="row" v-for="content in comments" :key="content._id">
                            <div class="col-6">
                                <div class="card">
                                    <div class="card-body" style="height: 10vmax;margin-bottom:9vmax">
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
                                                                        <p><a href="#">{{content.name}}</a> {{content.content}} <br>
                                                                            <small class="text-muted">August 6, 2016 @ 10:35am </small>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <b-button @click="decide(content._id,content.postId,true)" variant="dark" style="margin:0.5vw">
                                            <vue-fontawesome icon="check-square" size="1" color="dark"></vue-fontawesome>
                                        </b-button>
                                        <b-button @click="decide(content._id,content.postId,false)" variant="warning">
                                            <vue-fontawesome icon="trash" size="1" color="dark"></vue-fontawesome>
                                            </b-button>
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
// import Axios from 'axios'
import Swal from 'sweetalert2'
// import moment from 'moment'
// import Swal from 'sweetalert2'
// import Axios from 'axios'

export default {
    name:'posts',
    data(){
        return{
            comments:[]

        }
    },
    components:{
        Footer,sideBar
    },
    methods:{
        getComment(){
            var token = localStorage.getItem('jwt')
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${token}`);

            var raw = "";

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:3000/api/comment/pendings", requestOptions)
            .then(response => response.json())
            .then(data=>{
                this.comments = data.data
            })
            
            .catch(error => console.log('error', error));
        },
        decide(commentid,postid,flag){
                var myHeaders = new Headers();
                // myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", `Bearer ${localStorage.getItem('jwt')}` );
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                var urlencoded = new URLSearchParams();
                urlencoded.append("commentid", commentid);
                urlencoded.append("postid", postid);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: 'follow'
                };

                fetch(`http://localhost:3000/api/comment/${flag}`, requestOptions)
                    .then(response =>  response.json())
                    .then(result => {
                        console.log(result)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Success',
                            text:`${result.message}`,
                            showConfirmButton: false,
                            timer: 1500
                            })
                        this.$router.go()
                    })
                    .catch(error => {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Falid',
                            text:`${error}`,
                            showConfirmButton: false,
                            timer: 1500
                            })
                        console.log('error', error);
                    })
            }
    
        },
    created(){
        
    }
    ,
    mounted(){
        this.getComment()
    }

}
</script>

<style>
@import url('../../../bootstrap/assets/css/Sidebar-Menu-1.css');
@import url('../../../bootstrap/assets/css/styles.css');
@import url('../../../bootstrap/assets/css/Sidebar-Menu.css');
.cut { 
  text-overflow: ellipsis !important;
  overflow: hidden !important; 
  width: 160px !important; 
  height: 1.2em !important; 
  white-space: nowrap !important;
}

</style>