<template>
<!-- eslint-disable-->
    <div class="row" style="margin: 0px;width:100%;height:100vh">
<!-- content part -->
        <div class="col-lg-10 col-xl-10 col-md-12 col-sm-12 col-xs-12 overflow-auto back">
            <div class="postContainer text-center">
                <div class="row">
                    <div class="col" >
                        <div class="image-header">
                            <img :src="require('../../static/'+post[0].image)" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
                <div class="row" id="header">
                    <div class="col text-right d-flex justify-content-end justify-content-md-end">
                        <h1 style="font-weight:bold">{{post[0].title}}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-right d-flex justify-content-end ss qq">
                        
                        <p style="font-family: Sahel" v-html="post[0].content"></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex ss">
                        <p class="float-left justify-content-end" style="position: absolute;right: 7vw;color:grey;font-size:15px;"> نویسنده: خشایار مافی</p>
                        <p style="color:grey;font-size:15px;">دوروز پیش</p>
                    </div>
                </div>
                <div class="row ss mobile">
                    <div class="col d-flex justify-content-end align-items-start" style="height: 2vw;">
                        <span class="badge badge-primary" style="background-color: #f8339e;">شومبول طلا</span>
                    </div>
                </div>
                <!-- comments -->
                {{comments}}
                <div v-for="comment in comments" :key="comment._id">
                    <div class="ss" style="margin-bottom:2vw">
                        <div class="col round" style="padding: 0px;background-color: #ffffff; padding: 0.2vw 2vw">
                            <div>
                                <div class="d-flex" style="margin-top: 2vw;">
                                    <p class="d-sm-flex" style="color:grey;font-size:10px">دو روز پیش</p>
                                    <p style="right: 2vw;position: absolute;font-weight:bold">{{comment.name}}</p>
                                </div>
                                <div class="text-right">
                                    <p><br />{{comment.content}}<br /><br /></p>
                                </div>
                                <div>
                                    <p class="d-flex" style="color: rgb(248,51,158);font-family: Sahel;font-weight: bold;">پاسخ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <h4>نظر بدهید</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col ss">
                                <div>
                                    <div class="form-group " style="margin: 0px;">
                                        <div class="row text-right " style="margin: 0px; margin-bottom:2vw">
                                            <div class="col d-flex justify-content-center  " style="padding: 0px;">
                                                <input type="text" v-model="email" class="form-control" style="width: 20vw;height:2vw" placeholder="ایمیل" />
                                            </div>
                                            <div class="col d-flex justify-content-center" style="width: auto;padding: 0px;">
                                                <input type="text" v-model="name" class="d-flex justify-content-end form-control" style="width: 20vw;height:2vw" placeholder="نام"  />
                                            </div>
                                        </div>
                                        <div class="row" style="margin: 0px;">
                                            <div class="col d-flex justify-content-center" style="padding: 0px;">
                                                <textarea type="text" v-model="content" style="height: 20vmax;width: 50vw;padding:2vw;" class="d-flex justify-content-start form-control" placeholder=" نظر خود را بنویسید " ></textarea>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col">
                                                <button @click="sendCommnet" type="button" class="btn btn-light" style="margin:2vw"> ارسال</button>
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
<!-- side bar part -->
        <div class="col-lg-2 col-xl-2  d-none d-sm-none  d-md-none d-lg-block shadow-3 shadow-lg" id="sidebar" style="transition:0.2s;padding: 0px;/*background-color: initial;*//*background-size: cover;*/backgorund:white;min-height: 95vh;float:right">
            <div class="row sidebar" style="margin: 0px;">
                <div class="col text-center d-inline d-lg-flex justify-content-lg-center justify-content-center" style="margin-bottom: 32px;margin-top: 30px;"><img class="rounded-circle d-flex" src="../../assets/images/Color-transfer(1).jpg" style="width: 10vw;height: 10vw;" /></div>
            </div>
            <div class="row sidebar" style="margin: 0px;">
                <div class="col">
                    <h1 class="text-center h1" style="font-family: Sahel;font-weight: bold;color: #3503BA;font-size: 2vw;">خشایار مافی</h1>
                    <h6 class="text-center" style="color: #8175c7;font-family: Sahel; font-size: 1vw;">برنامه نویس جاوا اسکریپت و پایتون</h6>
                </div>
            </div>
            <div class="row sidebar" style="margin: 0px;margin-top: 2vw;">
                <div class="col" style="padding-right:3.5vw">
                    <ul class="text-right" style="list-style-type: none;">
                        <li class="list-item un"><a href="/" style="color: #3503BA;font-size: 1.5vw;font-family: Sahel;margin-right: 0.5vw;">خانه</a><i class="fa fa-home" style="font-size: 1vw; color:#3503BA"></i></li>
                        <li class="list-item un"><a href="/services" style="color: #3503BA ;font-size: 1.5vw;font-family: Sahel;margin-right: 0.5vw;">خدمات</a><i class="fa fa-suitcase" style="font-size: 1vw;color:#3503BA"></i></li>
                        <li class="list-item un"><a href="/resume" style="color: #3503BA;font-size: 1.5vw;font-family: Sahel;margin-right: 0.5vw;">نمونه کارها</a><i class="fa fa-check-circle-o" style="font-size: 1vw;color:#3503BA"></i></li>
                        <li class="list-item un"><a href="/aboutme" style="color: #3503BA;font-size: 1.5vw;font-family: Sahel;margin-right: 0.5vw;">درباره من</a><i class="fa fa-user" style="font-size: 1vw;color:#3503BA"></i></li>
                        <li class="list-item active un"><a href="/blog" style="color: #e2935c;font-size: 1.5vw;font-family: Sahel;margin-right: 0.5vw;">بلاگ</a><i class="fa fa-quote-right" style="font-size: 1vw;"></i></li>
                    </ul>
                </div>
            </div>
            <div class="col"
                style="margin: 0px;bottom:1px;position : absolute">
                <div class="col text-center float-right sidebar" style="padding: 0px;font-size: 1.2vw;"><a href="https://twitter.com/lanfositmostasl"><i class="fa fa-twitter ml-3"></i></a><a href="https://t.me/kh_mfi"><i class="fa fa-telegram ml-3"></i></a><a href="https://github.com/Camel-Black"><i class="fa fa-github ml-3"></i></a><a href="https://www.instagram.com/khashayar_mafi"><i class="fa fa-instagram ml-3"></i></a>
                    <div>
                        <p class="text-center d-inline" style="margin: 0px;font-family: Sahel;color: grey;font-size: 0.75vw;">طراحی و توسعه
                        <span class="text-center d-inline" style="margin: 0px;font-family: Sahel;color: black;font-weight: 900;font-size: 0.75vw;">خشایار مافی</span></p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    data(){
        return{
            contact: 'تماس',
            post:{},
            comments:[],
            name:"",
            email:"",
            content:""
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
            })
            .then(()=>{
                
                axios.get(`http://localhost:3000/api/${this.post[0]._id}/comment/all/`)
                    .then(data=>{
                        this.comments =  data.data.data
                    })

                    .catch(err=>{
                        console.log(err)
                    })
            })
        },
        sendCommnet(){
            let postid= this.post[0]._id
            console.log(postid)
            axios.post(`http://localhost:3000/api/posts/${postid}/newcomment`,{
                name: this.name,
                email: this.email,
                content: this.content
            })
                .then(data=>{
                    Swal.fire({
                        title: 'با موفقیت ثبت شد',
                        text:'نظر برای تایید به ادمین ارسال شد',
                        icon: 'success',
                        timer: 2200,
                        showConfirmButton: false,
                    })
                })
                .catch(error=>{
                    console.log(error)
                })
        },

    },
    created(){
        this.getSinglePost()
        
    }
}
</script>

<style scoped>
@import url('../../../bootstrap/assets/css/styless-client.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
@import url('../../assets/fonts/sahel/sahel-font.css');
.service-items{
    margin-right: 2.5vw;margin-top: 1vw;
    position:relative
}
.curs{
    cursor: pointer;
}
#sidebar{
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100vh;
}
#container{
    flex-wrap: wrap;
    float: right !important;
    display: flex !important;
    align-content: flex-start;
}
.chips{
    height: 1.5vw;
    width: 4vw;
    bottom: 0vw;
    position: absolute;
    background-color: #f8359e;
    left: 0px;
    margin-bottom: 1vw;
    margin-left: 2vw;
    border-radius: 2vw;
}

.back{
    padding: 0vw 10vw;
    height: 100vh;
    width: 100%;
    position: relative;
    background-size: cover;
    background-position: center center;
    background: whitesmoke !important;
}
.un {
    margin-bottom: 1.5vw;
}
.active.un{
    color: #e2935c
}
.active.un::after{
    color: #e2935c !important;
    background: #e2935c !important;
}
.un:after {
    color: #3503BA !important;
    font-size: 1.5vw;
    font-family: Sahel;
    margin-right: 0.5vw;
    content: '';
    width: 0px;
    height: 2px;
    display: block;
    background: #3503BA !important;
    transition: 300ms;
  
}

.un:hover:after {
  width: 100%;
}
.header{
    font-family: Sahel !important;

    color: #3503BA !important;
    bottom: 9vw;
    left: 2vw;
    position: absolute;

}
.sandwich{
    right: 3vw;
    position: absolute;
    top: 2vw;
}
::-webkit-scrollbar {
    width: 0.5vw;
    background:rgb(245, 245, 245);   
}
::-webkit-scrollbar-track {
  background:rgb(245, 245, 245);
  border-radius: 10px; 
}
::-webkit-scrollbar-thumb {
  background: #dfdfdf; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #c7c7c7; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:active {
  background: #a7a7a7; 
  border-radius: 10px;
}
.imgs{
  margin: 1vw;
  min-width: 150px;
  min-height: 90px;
  width:25vw;
  height: 21vw;
  border-radius: 2vw ;
  
  background-size:cover !important;
  background-repeat: no-repeat !important;
  transform: background-size 0.2s;
}
.imgs:hover{
  background-size: 150% !important;
  transition: all 0.3s ease-in-out !important;
}
@media screen and (max-width:600px){
    span{
        font-size: 1vmax;
    }
}
a{
    color: #292929;
}
a:hover{
    color: #555555;
}
.postContainer{
    margin-top: 2vw;
    height: 100%;
}
img{ 
    border-radius: 2vw 2vw 0 0;
}
#header{
    padding-right: 7vw;
    padding-top: 2vw;
}

h1,h2,h3,h4,h5,span,input{
    font-family: Sahel;
}
.qq{
   font-family: Sahel; 
   
}
.ss{
    padding: 0px 7vw;
    margin-top: 1vw;
    overflow:visible;
}
.round{
    border-radius:2vw ;
}
input{
    border-radius: 2vw;
    border: none;
    text-align: right !important;
    padding: 1vw 2vw;
}
input:active{
    border: none;
    
}
 div >>> p{
   /* break-inside: avoid-column im; */
   /* display: block; */
   /* overflow-wrap: break-word !important; */
   content: '\A';
   white-space:pre-line;
}

form .form-control:focus{
  border-color: #ae29d6 !important;
  box-shadow: none;
}
textarea{
    border-radius: 2vw;
    border: none;
    text-align: right !important;
    padding-left:0;
    padding-top:0;
    padding-bottom:0.4em;
    padding-right: 0.4em;
    font-family: Sahel;
}
button{

    padding: 1vw 2vw;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: Sahel;
    border-radius: 5vw;
    transition: 0.2s;
    font-weight: bold;
}

</style>>
