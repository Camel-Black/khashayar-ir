<template>
<div>
    <div class="row" style="margin: 0px;width:100%;height: 100%">
    <div :class="`col-lg-10 col-xl-10 ${contentClasses}` " style="padding: 0px;">
        <div class="imgback ">
            <div class=" header">
                <h2 style="font-weight: bold;font-size: 2vmax;text-align: right;font-family: Sahel" class="animated fadeInDown delay0.5s">
                    یه برنامه نویس ساده
                </h2>
                <p style="font-size: 1vw;min-font-size:200px;font-family: Sahel" class="animated fadeInDown delay1s">برنامه نویسی باید به گونه ای باشد که ما همگی بشاشیم به خودمان</p>
            </div>
            <div @click="collapseSide" class="sandwich d-block d-sm-none  d-sm-block   d-md-block d-lg-none animated fadeInDown delay1s">
                <a href="#"><i class="fa fa-bars" style="color: white;" ></i></a>
            </div>
        </div>
    </div>
    <div :class="sidebarclasses" id="sidebar" style="padding: 0px;/*background-color: initial;*//*background-size: cover;*/background: rgb(11,4,84);background: linear-gradient(132deg, rgb(11,4,84) 0%, rgb(6, 5, 75) 100%);/*bottom: 0px;*//*top: 0px;*//*position: absolute;*//*right: 0px;*/min-height: 95vh;/*max-height: 60px;*/float:right">
        <div id="content">
            <div class="row sidebar" style="margin: 0px;">
                <div class="col text-center d-inline d-flex justify-content-center justify-content-center" style="margin-bottom: 3vmax;margin-top: 30px;"><img class="rounded-circle d-flex" src="../../assets/images/Duotone_dtn16(1).jpg" style="width: 10vw;height: 10vw;" /></div>
            </div>
            <div class="row sidebar" style="margin: 0px;">
                <div class="col">
                    <h1 class="text-center h1" style="font-family: Sahel;font-weight: bold;color: rgb(255,255,255);font-size: 2vmax;">خشایار مافی</h1>
                    <h6 class="text-center" style="color: #8175c7;font-family: Sahel; font-size: 1vmax;">برنامه نویس جاوا اسکریپت و پایتون</h6>
                </div>
            </div>
            <div class="row sidebar" style="margin: 0px;margin-top: 2vw;">
                <div class="col" style="padding-right:3.5vw">
                    <ul class="text-right" style="list-style-type: none;">
                        <li class="list-item un"><a href="/" style="color: rgb(255,255,255);font-size: 1.5vmax;font-family: Sahel;margin-right: 0.5vmax;">خانه</a><i class="fa fa-home" style="font-size: 1vw;"></i></li>
                        <li class="list-item un"><a href="/services" style="color: rgb(255,255,255);font-size: 1.5vw;font-family: Sahel;margin-right: 0.5vmax;">خدمات</a><i class="fa fa-suitcase" style="font-size: 1vw;"></i></li>
                        <li class="list-item un"><a href="/resume" style="color: rgb(255,255,255);font-size: 1.5vw;font-family: Sahel;margin-right: 0.5vmax;">نمونه کارها</a><i class="fa fa-check-circle-o" style="font-size: 1vw;"></i></li>
                        <li class="list-item un"><a href="/aboutme" style="color: rgb(255,255,255);font-size: 1.5vw;font-family: Sahel;margin-right: 0.5vmax;">درباره من</a><i class="fa fa-user" style="font-size: 1vw;"></i></li>
                        <li class="list-item un"><a href="/blog" style="color: rgb(255,255,255);font-size: 1.5vw;font-family: Sahel;margin-right: 0.5vmax;">بلاگ</a><i class="fa fa-quote-right" style="font-size: 1vw;"></i></li>
                    </ul>
                </div>
            </div>
            <div class="col"
                style="margin: 0px;bottom:1px;position : absolute">
                <div class="col text-center float-right sidebar" style="padding: 0px;font-size: 1.2vw;color: #e2935c;"><i class="fa fa-twitter ml-3"></i><i class="fa fa-telegram ml-3"></i><i class="fa fa-github ml-3"></i><i class="fa fa-instagram ml-3"></i>
                    <div>
                        <p class="text-center d-inline" style="margin: 0px;font-family: Sahel;color: rgb(244,244,244);font-size: 0.75vw;">طراحی و توسعه
                        <span class="text-center d-inline" style="margin: 0px;font-family: Sahel;color: rgb(244,244,244);font-weight: 900;font-size: 0.75vw;">خشایار مافی</span></p>
                    </div>
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
                this.sidebarclasses = "col-lg-2 col-xl-2 col-md-4 col-sm-4 col-4"
                this.contentClasses = "col-md-8 col-sm-8 col-8"
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
.un {
    margin-bottom: 1.5vw;
}
.un:after {
    content: '';
    width: 0px;
    height: 2px;
    display: block;
    background: white;
    transition: 300ms;
  
}

.un:hover:after {
  width: 100%;
}
.header{
    font-family: Sahel !important;

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
@media screen and (max-width: 500px) {

    img{
        width: 150px;
        height:150px;
    }
    .un{
        transition: none;
    }
}
</style>