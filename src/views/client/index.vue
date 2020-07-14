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
    <div @click="collapseSide" class="sandwich d-block d-sm-none  d-sm-block   d-md-block d-lg-none animated fadeInDown delay1s">
        <a href="#"><i class="fa fa-bars" style="color: white;" ></i></a>
    </div>
    <!-- side-bar -->
    <sidebar :sidebarclasses="sidebarclasses"></sidebar>
</div>
</div>
</template>

<script>
import sidebar from '../../components/client/sidebar'
export default {
    name: 'index',
    components:{
        sidebar
    },
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
                this.sidebarclasses = "col-lg-2 col-xl-2 col-md-5 col-sm-5 col-5"
                this.contentClasses = "col-md-7 col-sm-7 col-7"
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

</style>