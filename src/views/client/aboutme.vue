<template>
    <div class="row" style="margin: 0px;width:100%;">
        <!-- content part -->
    <div class="col-lg-10 col-xl-10 col-md-12 col-sm-12 col-xs-12 back " >
        <div id="container" class="d-flex justify-content-center align-items-center" style="min-height:100vh">
            <div>
                <div class="row" style="margin-top: 2vh">
                    <div class="col">
                        <div class="row">
                            <div class="col d-flex justify-content-center">
                                <h4 style="color:white">تماس با من</h4>
                            </div>
                            
                        </div>
                        <div class="row animate__fadeInDown" v-show="message" >
                            <div class="col d-flex justify-content-center">
                                <div class="p-3 mb-2 bg-danger text-white" style="direction:rtl;text-align:center;width:30em;font-family:Anjoman-FaNum;border-radius:10px">{{message}}</div>
                            </div>
                        </div>
                        <div class="row animate__fadeInDown" v-show="okmessage" >
                            <div class="col d-flex justify-content-center">
                                <div class="p-3 mb-2 bg-success text-white" style="direction:rtl;text-align:center;width:30em;font-family:Anjoman-FaNum;border-radius:10px">{{okmessage}}</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col ss">
                                <div>
                                    <div class="form-group " style="margin: 0px;">
                                        <div class="row text-right " style="margin: 0px; margin-bottom:2vw">
                                            <div class="col d-flex justify-content-center  " style="padding-right:1vmax;">
                                                <input type="text" v-model="email" class="form-control"  placeholder="ایمیل" />
                                            </div>
                                            <div class="col d-flex justify-content-center" style="width: auto;padding-left:1vmax;">
                                                <input type="text" v-model="name" class="d-flex justify-content-end form-control"  placeholder="نام"  />
                                            </div>
                                        </div>
                                        <div class="row" style="margin: 0px;">
                                            <div class="col d-flex justify-content-center" style="padding: 0px;">
                                                <textarea type="text" v-model="content" style="height: 20vmax;padding:2vw;" class="d-flex justify-content-start form-control" placeholder=" متن پیام ... " ></textarea>
                                            </div>
                                        </div>
 
                                        <div class="row mt-2">
                                            <div class="col d-flex justify-content-center">
                                                <button @click="sendMessage" type="button" class="btn btn-light" style="margin:2vw"> ارسال</button>
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
                <div @click="collapseSide" class="sandwich d-block d-sm-none  d-sm-block   d-md-block d-lg-none animated fadeInDown delay1s">
        <a href="#"><i class="fa fa-bars" style="color: white;" ></i></a>
    </div>
    </div>
    <!-- side bar part -->
 
            <div :class="sidebarclasses" id="sidebar" style="padding: 0px;/*background-color: initial;*//*background-size: cover;*/background: rgb(11,4,84);background: linear-gradient(132deg, rgb(11,4,84) 0%, rgb(6, 5, 75) 100%);/*bottom: 0px;*//*top: 0px;*//*position: absolute;*//*right: 0px;*/min-height: 95vh;/*max-height: 60px;*/float:right">
            <div class="row sidebar" style="margin: 0px;">
                <div class="col text-center d-inline d-flex justify-content-center justify-content-center" style="margin-bottom: 32px;margin-top: 30px;"><img class="rounded-circle d-flex" src="../../assets/images/orang.jpg" style="width: 10vw;height: 10vw;" /></div>
            </div>
            <div class="row sidebar" style="margin: 0px;">
                <div class="col">
                    <h1 class="text-center h1" style="font-family: Anjoman-FaNum;font-weight: bold;color:white;font-size: 40px;">خشایار مافی</h1>
                    <h6 class="text-center" style="color: #8175c7;font-family: Anjoman-FaNum; font-size: 20px;">برنامه نویس جاوا اسکریپت و پایتون</h6>
                </div>
            </div>
            <div class="row sidebar" style="margin: 0px;margin-top: 2vw;">
                <div class="col" style="padding-right:3.5vw">
                    <ul class="text-right" style="list-style-type: none;">
                        <li class="list-item underline"><a href="/" class="ul-link-a" style="color: white;">خانه</a><i class="fa fa-home" style="font-size: 20px; white"></i></li>
                        <li class="list-item underline"><a href="/services" class="ul-link-a" style="color: white;">خدمات</a><i class="fa fa-suitcase" style="font-size: 20px;white"></i></li>
                        <li class="list-item underline"><a href="/resume" class="ul-link-a" style="color: white;">نمونه کارها</a><i class="fa fa-check-circle-o" style="font-size: 20px;white"></i></li>
                        <li class="list-item active underline" style="color:#e2935c"><a href="/aboutme" class="ul-link-a" style="color: #e2935c;">تماس با من</a><i class="fa fa-user icon" ></i></li>
                        <li class="list-item underline" ><a href="/blog" class="ul-link-a" style="color: white">بلاگ</a><i class="fa fa-quote-right" style=""></i></li>
                    </ul>
                </div>
            </div>
            <div class="col" style="bottom:1em;position:absolute">
                <div class="col text-center float-right sidebar icon links" style="padding: 0px;color: #e2935c;text-align: center"><a class="icc" target="_blank" href="https://twitter.com/lanfositmostasl"><i class="fa fa-twitter ml-3"></i></a><a class="icc" target="_blank" href="https://t.me/kh_mfi"><i class="fa fa-telegram ml-3"></i></a><a class="icc" target="_blank" href="https://github.com/Camel-Black"><i class="fa fa-github ml-3"></i></a><a class="icc"  target="_blank" href="https://soundcloud.com/khashayar-mafi"><i class="fa fa-soundcloud ml-3"></i></a>
                    <div>
                        <p class="text-center d-inline" style="font-family: Anjoman-FaNum;color: rgb(244,244,244);font-size: 12px;">طراحی و توسعه
                        <span class="text-center d-inline" style="font-family: 'Anjoman-FaNum';color: white;font-weight: 900;font-size: 12px;">خشایار مافی</span></p>
                        
                    </div>
                </div>
            </div>
        </div>
</div>
</template>
 
<script>
/* eslint-disable */
import Axios from 'axios'
export default {
    name:'aboutme',
        data(){
        return{
            sidebarclasses:"col-lg-2 col-xl-2  d-none d-sm-none  d-md-none d-lg-block",
            contentClasses: "col-md-12 col-sm-12" ,
            flag: false,
            contact: 'تماس',
            email:"",
            name:"",
            content:"",
            message:"",
            okmessage:""
 
        }
    },
    methods:{
        

        sendMessage(){
            var logic = {
                "notEmpty":/^(?!\s*$).+/,
                "email":/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            }
 
            if(logic.email.test(this.email) && logic.notEmpty.test(this.name) && logic.notEmpty.test(this.content) && this.email.substring(this.email.length - 4) == ".com"){
                
                
                Axios.post('http://localhost:3000/api/sendemail',{
                    "name":this.name,
                    "content": this.content,
                    "email":this.email
                })
                .then((data)=>{
                    this.okmessage = data.data.meesage
                })
                this.message = ""
            }
            else{
                this.message="لطفا موارد خواسته شده را به درستی وارد کنید."
            }
        },
        collapseSide(){
            if(!this.flag){
                this.sidebarclasses = "col-lg-2 col-xl-2 col-md-4 col-sm-5 col-5"
                this.contentClasses = "col-md-8 col-sm-7 col-7"
                this.flag = !this.flag
            }
            else{
                this.sidebarclasses = "col-lg-2 col-xl-2  d-none d-sm-none  d-md-none d-lg-block"
                this.contentClasses = "col-md-12 col-sm-12"
                this.flag = !this.flag
            }
        }
    }
}
</script>
 
<style>
@import url('../../../bootstrap/assets/css/styless-client.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
@import url('../../assets/fonts/sahel/sahel-font.css');
.ss{
    padding: 0px 7vw !important;
    margin-top: 1vw !important;
    overflow:visible !important;
}
input{
    border-radius: 2vw !important;
    border: none !important;
    text-align: right !important;
    padding: 1vw 2vw !important;
    font-size: 15px !important;
    direction: rtl !important;
    font-family: Anjoman-FaNum !important;
    
 
}
input:active{
    border: none !important;
    
}
form .form-control:focus{
  border-color: #ae29d6 !important;
  box-shadow: none  !important;
}
textarea{
    border-radius: 2vw !important;
    border: none !important;
    text-align: right !important;
    padding-left:0 !important;
    padding-top:1em !important;
    padding-bottom:2em !important;
    padding-right: 1em !important;
    font-family: Anjoman-FaNum !important;
    direction: rtl !important;
}
button{
 
    padding: 1vw 2vw !important;
    text-align: center !important;
    text-decoration: none !important;
    display: inline-block !important;
    font-size: 16px !important;
    font-family: Anjoman-FaNum !important;
    border-radius: 5vw !important;
    transition: 0.2s !important;
    font-weight: bold !important;
}
 
</style>

