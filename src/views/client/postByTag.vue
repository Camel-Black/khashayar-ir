<template>
    <div class="row" style="margin: 0px;width:100%;height:100vh">
        <!-- content part -->
        <div class="col-lg-10 col-xl-10 col-md-12 col-sm-12 col-xs-12 back overflow-auto" style="height:100vh;" id="si" >
            <div id="container" class="d-flex justify-content-center align-items-center" style="min-height:100vh">
                <div v-for="post in posts" :key="post.id" class=" tex-center d-flex justify-content-center" style="display: flex;flex-wrap: wrap;align-content: flex-start;">
                    <div class="shadow-lg dafs" :style="{'background-image':`url(${require('@/static/'+post.image)})`,'position':'relative'}">
                        <div class="text-right justify-content-start align-items-end align-content-center service-items">
                            <div id="postHeader" class="col-6 text-right justify-content-start align-items-end align-content-center ">
                                <h1  class="d-block align-items-start break-long-words" style="word-wrap: break-word !important;color: rgb(255,255,255);font-family: Sahel;font-weight: bold;font-size: 1.5vw">{{post.title}}</h1>
                            </div>
                        </div>
                        <div class="chips d-flex justify-content-center align-items-center curs">
                            <p @click="go(post.slug)" class="d-flex justify-content-center align-items-center" style="font-family: Sahel;color: rgb(255,255,255);font-size: .60vw;width: 4vw;height: 1vw;margin: 0px;font-weight: bold;">
                                    بیشتر
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    <!-- side bar part -->
        <div @click="collapseSide" class="sandwich d-block d-sm-none  d-sm-block   d-md-block d-lg-none animated fadeInDown delay1s">
        <a href="#"><i class="fa fa-bars" style="color: white;" ></i></a>
    </div>
        <div class="col-lg-2 col-xl-2  d-none d-sm-none  d-md-none d-lg-block shadow-3 shadow-lg" id="sidebar" style="padding: 0px;/*background-color: initial;*//*background-size: cover;*/backgorund:white;min-height: 95vh;float:right">
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
                <div class="col text-center float-right sidebar" style="padding: 0px;font-size: 1.2vw;color:#F8359E"><i class="fa fa-twitter ml-3"></i><i class="fa fa-telegram ml-3"></i><i class="fa fa-github ml-3"></i><i class="fa fa-instagram ml-3"></i>
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
// import $ from 'jquery'
import moment from 'moment'
export default {
    data(){
        return{
            contact: 'تماس',
            posts:[]
        }
    },
    methods:{
        getPosts: function () {
            var tag = this.$route.params.tag
            fetch(`http://localhost:3000/api/posts/search/${tag}`)
            .then(data=>{
                return data.json()
            })
            .then(result=>{
                let res = result.data
                this.posts = res
                
                this.posts.forEach(post=>{
                    let time = moment.unix(post.timestamp).startOf('hour').fromNow()
                    let date = "date"
                    post[date] = time
                })
            })
            console.log( this.posts.content )
        },
        go: function(slug){
            console.log("this is slog",slug)
            this.$route.push('/blog/'+slug)
            
        }
    },
    created(){
        this.getPosts()
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
/* .imgs{
  margin: 1vw;
  min-width: 150px;
  min-height: 90px;
  width:25vw;
  height: 21vw;
  border-radius: 2vw ;
  background-image: url(1.jpg) !important;
  background-size:cover !important;
  background-repeat: no-repeat !important;
  transform: background-size 0.2s;
} */
/* .imgs:hover{
  background-size: 150% !important;
  transition: all 0.3s ease-in-out !important;
} */
@media screen and (max-width:600px){

}
.dafs{
margin: 1vw;
min-width: 150px;
min-height: 90px;
width:25vw;
height: 21vw;
border-radius: 2vw ;

background-size:cover !important;
background-repeat: no-repeat !important;transform: background-size 0.2s;
}
</style>>
