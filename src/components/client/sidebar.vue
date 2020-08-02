<template>
    <div :class="sidebarclasses" id="sidebar" style="padding: 0px;/*background-color: initial;*//*background-size: cover;*/background: rgb(11,4,84);background: linear-gradient(132deg, rgb(11,4,84) 0%, rgb(6, 5, 75) 100%);/*bottom: 0px;*//*top: 0px;*//*position: absolute;*//*right: 0px;*/min-height: 95vh;/*max-height: 60px;*/float:right">
        <div id="content">
            
            <div class="row sidebar" style="margin: 0px;">
                <div class="col text-center d-inline d-flex justify-content-center justify-content-center" style="margin-bottom: 3vmax;margin-top: 30px;"><img class="rounded-circle d-flex" src="../../assets/images/orang.jpg" style="width: 10vw;height: 10vw;" /></div>
            </div>
            <div class="row sidebar" style="margin: 0px;">
                <div class="col">
                    <h1 class="text-center h1" style="font-family: Sahel;font-weight: bold;color: rgb(255,255,255);font-size: 2vmax;">خشایار مافی</h1>
                    <h6 class="text-center" style="">برنامه نویس جاوا اسکریپت و پایتون</h6>
                </div>
            </div>
            <div class="row sidebar" id="navvv" style="margin: 0px;margin-top: 2vw;">
                <div class="col" style="padding-right:3.5vw">
                    <ul class="text-right" style="list-style-type: none;">
                        
                        <li class="list-item un"><a class="s" :href="href.home" >خانه</a><i class="fa fa-home icon" ></i></li>
                        <li ref="services" class="list-item un" id="Services"><a ref="servicesa" class="s" :href="href.services" >خدمات</a><i class="fa fa-suitcase icon" ></i></li>
                        <li class="list-item un"><a class="s sss" :href="href.resume" >نمونه کارها</a><i class="fa fa-check-circle-o icon" ></i></li>
                        <li class="list-item un"><a class="s" :href="href.aboutme" >درباره من</a><i class="fa fa-user icon" ></i></li>
                        <li class="list-item un"><a ref="blog" :class="{color: 'white'}" class="s" :href="href.blog" >بلاگ</a><i class="fa fa-quote-right icon" ></i></li>
                    </ul>
                </div>
            </div>
            <div class="footer col "
                style="margin: 0px;bottom:1px;position : absolute">
                <div class="col text-center float-right sidebar" style="padding: 0px;font-size: 1.2vw;color: #e2935c;"><a class="icc" target="_blank" href="https://twitter.com/lanfositmostasl"><i class="fa fa-twitter ml-3"></i></a><a class="icc" target="_blank" href="https://t.me/kh_mfi"><i class="fa fa-telegram ml-3"></i></a><a class="icc" target="_blank" href="https://github.com/Camel-Black"><i class="fa fa-github ml-3"></i></a><a class="icc"  target="_blank" href="https://soundcloud.com/khashayar-mafi"><i class="fa fa-soundcloud ml-3"></i></a>
                    <div>
                        <p id="p" class="text-center d-inline" style="margin: 0px;font-family: Sahel;color: rgb(244,244,244);font-size: 0.75vw;">طراحی و توسعه
                        <strong id="strong" class="text-center d-inline" style="margin: 0px;font-family: Sahel;color: rgb(244,244,244);font-weight: 900;font-size: 0.75vw;">خشایار مافی</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
//dsiable eslint
export default {
    name: "sidebar-client",
    props:['sidebarclasses'],
    data(){
        return{
            href:{
                home: '/',
                message: 'شتم',
                services: '/Services',
                resume: '/Resume',
                aboutme: '/Aboutme',
                blog: '/Blog',
                white: 'white'
            }
        }
    },
    methods:{
        click(value){
            this.href.message = "asd"
            if(value === 0){
                this.message = "out"
            }
        // },
        // checkRoute(){
        //     var route = this.$router.currentRoute
        //     // this.$refs.services.className
        //     console.log(this.$refs.services.style)


            
        //     // if(route.name == this.$refs.services.id){
                
        //     // }
            
        }
    },
    mounted(){
        this.checkRoute()
    }
}
</script>

<style>
@import url('../../assets/css/sidebar-client.css');
.white{
    color: white !important;
}

</style>