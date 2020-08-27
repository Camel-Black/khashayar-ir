<template>
    <div class="row" style="margin: 0px;width:100%;height:100hv">
        <!-- content part -->
    <div :class="`col-lg-10 col-xl-10 ${contentClasses}` " >
        <div id="container" class="d-flex justify-content-center align-items-center overflow-auto" style="min-height:100vh">
            <div>
                <div class="tex-center d-flex justify-content-center">
                   
                    <div class="kazem " style="position:relative" id="k">
                        
                        <div class="text-right justify-content-start align-items-end align-content-center service-items">
                            <img class="img" src="../../static/icons/001.svg" style="margin-left: 1em;margin-bottom:1em;margin-top:1.5em">
                            <p class="text-right d-block p" style="color: rgb(255,255,255);margin: 0px;margin-right: 3vw;margin-top:5em">آشنا با دیزاین پترن ها و نحوه ی کارکرد آنها</p>

                        </div>
                        <a href="/aboutme" style="bottom:1em;right:2em;margin-top:2.5em;margin-left:1em;border-radius:10px;">
                        <div >
                            <span class="badge badge-danger">
                                تماس با من <i class="fa fa-info-circle" style="font-size: 1em;"></i>
                            </span>
                        </div>
                        </a>
                    </div>
                    <div class="kazem " style="position:relative" id="k">
                        
                        <div class="text-right justify-content-start align-items-end align-content-center service-items">
                            <img class="img" src="../../static/icons/003.svg" style="margin-left: 1em;margin-bottom:1em;margin-top:1.5em">
                            <p class="text-right d-block p" style="color: rgb(255,255,255);margin: 0px;margin-right: 3vw;margin-top:5em">آشنا با دیزاین پترن ها و نحوه ی کارکرد آنها</p>

                        </div>
                        <a href="/aboutme" style="bottom:1em;right:2em;margin-top:2.5em;margin-left:1em;border-radius:10px;">
                        <div >
                            <span class="badge badge-danger">
                                تماس با من <i class="fa fa-info-circle" style="font-size: 1em;"></i>
                            </span>
                        </div>
                        </a>
                    </div>
                </div>
                <div class="text-center d-flex justify-content-center">
                    <div class="kazem " style="position:relative" id="k">
                        
                        <div class="text-right justify-content-start align-items-end align-content-center service-items">
                            <img class="img" src="../../static/icons/006.svg" style="margin-left: 1em;margin-bottom:1em;margin-top:1.5em">
                            <p class="text-right d-block p" style="color: rgb(255,255,255);margin: 0px;margin-right: 3vw;margin-top:5em">آشنا با دیزاین پترن ها و نحوه ی کارکرد آنها</p>

                        </div>
                        <a href="/aboutme" style="bottom:1em;right:0;margin-top:2.5em;margin-left:1em;border-radius:10px;">
                        <div >
                            <span class="badge badge-danger">
                                تماس با من <i class="fa fa-info-circle" style="font-size: 1em;"></i>
                            </span>
                        </div>
                        </a>
                    </div>
                    <div class="kazem " style="position:relative" id="k">
                        
                        <div class="text-right justify-content-start align-items-end align-content-center service-items">
                            <img class="img" src="../../static/icons/004.svg" style="margin-left: 1em;margin-bottom:1em;margin-top:1.5em">
                            <p class="text-right d-block p" style="color: rgb(255,255,255);margin: 0px;margin-right: 3vw;margin-top:5em">آشنا با دیزاین پترن ها و نحوه ی کارکرد آنها</p>

                        </div>
                        <a href="/aboutme" style="bottom:1em;right:2em;margin-top:2.5em;margin-left:1em;border-radius:10px;">
                        <div >
                            <span class="badge badge-danger">
                                تماس با من <i class="fa fa-info-circle" style="font-size: 1em;"></i>
                            </span>
                        </div>
                        </a>
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
                        <li class="list-item active underline" style="color:#e2935c"><a href="/services" class="ul-link-a" style="color: #e2935c;">خدمات</a><i class="fa fa-suitcase icon" ></i></li>
                        <li class="list-item underline"><a href="/resume" class="ul-link-a" style="color: white;">نمونه کارها</a><i class="fa fa-check-circle-o" style="font-size: 20px;white"></i></li>
                        <li class="list-item underline"><a href="/aboutme" class="ul-link-a" style="color: white;">تماس با من</a><i class="fa fa-user" style="font-size: 20px;color:white"></i></li>
                        <li class="list-item  underline" ><a href="/blog" class="ul-link-a" style="color: white ">بلاگ</a><i class="fa fa-quote-right  " style=""></i></li>
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

export default {
    name: 'services',

    data(){
        return{
            sidebarclasses:"col-lg-2 col-xl-2  d-none d-sm-none  d-md-none d-lg-block",
            contentClasses: "col-md-12 col-sm-12 back" ,
            flag: false,
            
        }
    },
    methods:{
        collapseSide(){
            if(!this.flag){
                this.sidebarclasses = "col-lg-2 col-xl-2 col-md-5 col-sm-5 col-5"
                this.contentClasses = "col-md-7 col-sm-7 col-7 back"
                this.flag = !this.flag
            }
            else{
                this.sidebarclasses = "col-lg-2 col-xl-2  d-none d-sm-none  d-md-none d-lg-block"
                this.contentClasses = "col-md-12 col-sm-12 back"
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
.card-container{
  direction:rtl;
    text-align:right;

    background-color: #3C1352;
    margin-left:3vw;
    height:24em;
    width:27em;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    opacity: 0.4;
    -ms-flex-direction:column;
    flex-direction:column;
    position:relative;
    -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius:16px;
    overflow:hidden;

}

p{
    font-family: 'Anjoman-FaNum';
}
.kazem{
    margin: 1vw;
    /* background: rgb(48,7,147); */
    background: linear-gradient(298deg, rgba(48,7,147,1) 0%, rgba(82,21,156,1) 62%);
  margin-left:3vw;
  height:24em;
  width:27em;
    border-radius: 2vw;
}

.shombol:hover{
    background-color: white !important;
}
#k:hover{
    background-color:white !important
}
.img{
    background-size: cover;
    height: 10em;
    width: 100%;
    justify-self: center;
}
.p{
    font-size: 16px !important;
    font-weight: bold;
}
</style>