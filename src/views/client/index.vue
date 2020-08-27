<template>
<div>
    <div class="row" style="margin: 0px;width:100%;height: 100%">
    <div :class="`col-lg-10 col-xl-10 ${contentClasses}` " style="padding: 0px;">
        <div class="imgback ">
            <div class=" header">
                <h2 style="font-weight: bold;font-size: 2vmax;text-align: right;color:white" class="animated fadeInDown delay0.5s">
                    یه برنامه نویس ساده
                </h2>
                <p style="font-size: 1vw;min-font-size:200px;color:white;opacity:0.5;direction:rtl" class="animated fadeInDown delay1s">برنامه نویسی به گونه ای است که اصلا آدم خوشش می آید :)
</p>
            </div>
            <div @click="collapseSide" class="sandwich d-block d-sm-none  d-sm-block   d-md-block d-lg-none animated fadeInDown delay1s">
                <a href="#"><i class="fa fa-bars" style="color: white;" ></i></a>
            </div>
        </div>
    </div>
    <div @click="collapseSide" class="sandwich d-block d-sm-none  d-sm-block   d-md-block d-lg-none animated fadeInDown delay1s">
        <a href="#"><i class="fa fa-bars" style="color: white;" ></i></a>
    </div>
    <!-- side-bar -->
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
                        <li class="list-item underline"><a href="/aboutme" class="ul-link-a" style="color: white;">تماس با من</a><i class="fa fa-user" style="font-size: 20px;color:white"></i></li>
                        <li class="list-item underline" ><a href="/blog" class="ul-link-a" style="color: white">بلاگ</a><i class="fa fa-quote-right icon " style=""></i></li>
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
</div>
</template>

<script>
export default {
    name: 'index',

    data(){
        return{
            sidebarclasses:"col-lg-2 col-xl-2  d-none d-sm-none  d-md-none d-lg-block",
            contentClasses: "col-md-12 col-sm-12" ,
            flag: false
        }
    },
    methods:{
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
@import url('../../assets/css/sidebar-client.css');
@import url('../../../bootstrap/assets/css/styless-client.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
/* @import url('../../assets/fonts/sahel/sahel-font.css'); */
.header{
    /* font-family: Sahel !important; */

    color: white;
    bottom: 9vw;
    left: 2vw;
    position: absolute;

}

.sandwich{
    right: 3vw;
    position: absolute;
    top: 2vw;
}
#sidebar.collapsed {
  width: 0;
}
#sidebar.collapsed + #content {
  width: 100%;
}
</style>