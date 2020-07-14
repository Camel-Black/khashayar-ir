<template>
    <div class="row" style="margin: 0px;width:100%;">
        <!-- content part -->
    <div :class="`col-lg-10 col-xl-10 ${contentClasses}` " >
        <div id="container" class="d-flex justify-content-center align-items-center" style="min-height:100vh">
            <div>
                <div class="tex-center d-flex justify-content-center">
                    <div class="service" style="position:relative">
                        <div class="text-right justify-content-start align-items-end align-content-center service-items">
                            <h1 class="d-block align-items-start" style="color: rgb(255,255,255);font-family: Sahel;font-weight: bold;font-size: 2vw">برنامه نویسی بک-اند</h1>
                            <div class="text-center float-right d-xl-flex justify-content-end align-self-end justify-content-xl-end" style="position:relative;height: 0.4vw;background-color: #e2935c;width: 10vw;border-radius: 5vw;margin-top: 0vw;"></div>
                            <p class="text-right d-block" style="color: rgb(255,255,255);margin: 0px;margin-top: 3vw;font-size: .75vw;font-family: Sahel;">سولوم سوولوووومممم سولوم سولوووم</p>

                        </div>
                        <div class="chips d-flex justify-content-center align-items-center curs">
                            <p class="d-flex justify-content-center align-items-center" style="font-family: Sahel;color: rgb(255,255,255);font-size: .60vw;width: 4vw;height: 1vw;margin: 0px;font-weight: bold;">
                                تماس با من
                                <i class="fa fa-info-circle" style="font-size: 0.8vw;margin-left: 0.2vw;"></i>
                            </p>
                        </div>
                    </div>
                    <div class="service" style="position:relative">
                        <div class="text-right justify-content-start align-items-end align-content-center service-items">
                            <h1 class="d-block align-items-start" style="color: rgb(255,255,255);font-family: Sahel;font-weight: bold;font-size: 2vw">برنامه نویسی بک-اند</h1>
                            <div class="text-center float-right d-xl-flex justify-content-end align-self-end justify-content-xl-end" style="position:relative;height: 0.4vw;background-color: #e2935c;width: 10vw;border-radius: 5vw;margin-top: 0vw;"></div>
                            <p class="text-right d-block" style="color: rgb(255,255,255);margin: 0px;margin-top: 3vw;font-size: .75vw;font-family: Sahel;">سولوم سوولوووومممم سولوم سولوووم</p>

                        </div>
                        <div class="chips d-flex justify-content-center align-items-center curs">
                            <p class="d-flex justify-content-center align-items-center" style="font-family: Sahel;color: rgb(255,255,255);font-size: .60vw;width: 4vw;height: 1vw;margin: 0px;font-weight: bold;">
                                تماس با من
                                <i class="fa fa-info-circle" style="font-size: 0.8vw;margin-left: 0.2vw;"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-center d-flex justify-content-center">
                    <div class="service" style="position:relative">
                        <div class="text-right justify-content-start align-items-end align-content-center service-items">
                            <h1 class="d-block align-items-start" style="color: rgb(255,255,255);font-family: Sahel;font-weight: bold;font-size: 2vw">برنامه نویسی بک-اند</h1>
                            <div class="text-center float-right d-xl-flex justify-content-end align-self-end justify-content-xl-end" style="position:relative;height: 0.4vw;background-color: #e2935c;width: 10vw;border-radius: 5vw;margin-top: 0vw;"></div>
                            <p class="text-right d-block" style="color: rgb(255,255,255);margin: 0px;margin-top: 3vw;font-size: .75vw;font-family: Sahel;">سولوم سوولوووومممم سولوم سولوووم</p>

                        </div>
                        <div class="chips d-flex justify-content-center align-items-center curs">
                            <p class="d-flex justify-content-center align-items-center" style="font-family: Sahel;color: rgb(255,255,255);font-size: .60vw;width: 4vw;height: 1vw;margin: 0px;font-weight: bold;">
                                تماس با من
                                <i class="fa fa-info-circle" style="font-size: 0.8vw;margin-left: 0.2vw;"></i>
                            </p>
                        </div>
                    </div>
                    <div class="service" style="position:relative">
                        <div class="text-right justify-content-start align-items-end align-content-center service-items">
                            <h1 class="d-block align-items-start" style="color: rgb(255,255,255);font-family: Sahel;font-weight: bold;font-size: 2vw">برنامه نویسی بک-اند</h1>
                            <div class="text-center float-right d-xl-flex justify-content-end align-self-end justify-content-xl-end" style="position:relative;height: 0.4vw;background-color: #e2935c;width: 10vw;border-radius: 5vw;margin-top: 0vw;"></div>
                            <p class="text-right d-block" style="color: rgb(255,255,255);margin: 0px;margin-top: 3vw;font-size: .75vw;font-family: Sahel;">سولوم سوولوووومممم سولوم سولوووم</p>

                        </div>
                        <div class="chips d-flex justify-content-center align-items-center curs">
                            <p class="d-flex justify-content-center align-items-center" style="font-family: Sahel;color: rgb(255,255,255);font-size: .60vw;width: 4vw;height: 1vw;margin: 0px;font-weight: bold;">
                                تماس با من
                                <i class="fa fa-info-circle" style="font-size: 0.8vw;margin-left: 0.2vw;"></i>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!-- side bar part -->
    <div @click="collapseSide" class="sandwich d-block d-sm-none  d-sm-block   d-md-block d-lg-none animated fadeInDown delay1s">
        <a href="#"><i class="fa fa-bars" style="color: white;" ></i></a>
    </div>
<sidebar :sidebarclasses="sidebarclasses"></sidebar>
</div>
</template>

<script>
import sidebar from '../../components/client/sidebar'

export default {
    name: 'services',
        components:{
        sidebar
    },
    data(){
        return{
            sidebarclasses:"col-lg-2 col-xl-2  d-none d-sm-none  d-md-none d-lg-block",
            contentClasses: "col-md-12 col-sm-12 back" ,
            flag: false
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
@import url('../../assets/fonts/sahel/sahel-font.css');
.service-items{
    margin-right: 2.5vw;margin-top: 1vw;
    position:relative
}
.curs{
    cursor: pointer;
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
.service{
    margin: 1vw;
    background: rgb(48,7,147);
    background: linear-gradient(298deg, rgba(48,7,147,1) 0%, rgba(82,21,156,1) 62%);
    width:25vw;
    height: 21vw;
    border-radius: 2vw ;

}
.back{
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background: rgb(54,3,188);
    background: linear-gradient(145deg, rgba(54,3,188,1) 0%, rgba(8,4,81,1) 62%) !important;
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
    color: rgb(255,255,255);
    font-size: 1.5vw;
    font-family: Sahel;
    margin-right: 0.5vw;
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
</style>