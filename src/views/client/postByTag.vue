<template>
    <div class="row" style="margin: 0px;width:100%;height:100vh">
        <!-- content part -->
        <div class="col-lg-10 col-xl-10 col-md-12 col-sm-12 col-xs-12 back overflow-auto float-right" style="height:100vh;float:right;text-align: right" id="si" >
            <div id="container" class="float-right " style="min-height:100vh;;margin-right:4vw;float:right;text-align: right">
                <div v-for="post in posts" :key="post.id" class=" tex-center d-flex justify-content-center" style="display: flex;flex-wrap: wrap;align-content: flex-start; margin-top: 30px">
                    <div class="property-card">
                    <a :href="'/Blog/'+post.slug">
                    <div class="property-image" :style="{'background-image':`url(${require('@/static/'+post.image)})`}">
                        <div class="property-image-title">
                        <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. -->
                        </div>
                    </div></a>
                    <div class="property-description">
                    <h5> {{post.title}} </h5>
                    <div class="d-inline-block text-truncate" style="font-family: Anjoman-FaNum;width: 25.2em;direction: rtl;" v-html="post.content"></div>
                    <a :href="'/Blog/'+post.slug"> <p class="property-social-icons" style="left: 1em">مشاهده</p></a>
  
                    <p  style=" bottom:px;color:grey;right: 1em;direction:rtl;font-size:10px;margin-top:10px">{{post.date}}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    <!-- side bar part -->
        <div class="col-lg-2 col-xl-2  d-none d-sm-none  d-md-none d-lg-block shadow-3 shadow-lg" id="sidebar" style="padding: 0px;/*background-color: initial;*//*background-size: cover;*/backgorund:white;min-height: 95vh;float:right">
            <div class="row sidebar" style="margin: 0px;">
                <div class="col text-center d-inline d-lg-flex justify-content-lg-center justify-content-center" style="margin-bottom: 32px;margin-top: 30px;"><img class="rounded-circle d-flex" src="../../assets/images/Color-transfer(1).jpg" style="width: 10vw;height: 10vw;" /></div>
            </div>
            <div class="row sidebar" style="margin: 0px;">
                <div class="col">
                    <h1 class="text-center h1" style="font-family: Anjoman-FaNum;font-weight: bold;color: #3503BA;font-size: 2vw;">خشایار مافی</h1>
                    <h6 class="text-center" style="color: #8175c7;font-family: Anjoman-FaNum; font-size: 20px;">برنامه نویس جاوا اسکریپت و پایتون</h6>
                </div>
            </div>
            <div class="row sidebar" style="margin: 0px;margin-top: 2vw;">
                <div class="col" style="padding-right:3.5vw">
                    <ul class="text-right" style="list-style-type: none;">
                        <li class="list-item un"><a href="/" style="color: #3503BA;font-size: 30px;font-family: Anjoman-FaNum;margin-right: 0.5vw;">خانه</a><i class="fa fa-home" style="font-size: 20px; color:#3503BA"></i></li>
                        <li class="list-item un"><a href="/services" style="color: #3503BA ;font-size: 30px;font-family: Anjoman-FaNum;margin-right: 0.5vw;">خدمات</a><i class="fa fa-suitcase" style="font-size: 20px;color:#3503BA"></i></li>
                        <li class="list-item un"><a href="/resume" style="color: #3503BA;font-size: 30px;font-family: Anjoman-FaNum;margin-right: 0.5vw;">نمونه کارها</a><i class="fa fa-check-circle-o" style="font-size: 20px;color:#3503BA"></i></li>
                        <li class="list-item un"><a href="/aboutme" style="color: #3503BA;font-size: 30px;font-family: Anjoman-FaNum;margin-right: 0.5vw;">تماس با من</a><i class="fa fa-user" style="font-size: 20px;color:#3503BA"></i></li>
                        <li class="list-item active un"><a href="/blog" style="color: #e2935c;font-size: 30px;font-family: Anjoman-FaNum;margin-right: 0.5vw;">بلاگ</a><i class="fa fa-quote-right icon" style="font-size: 20px;"></i></li>
                    </ul>
                </div>
            </div>
            <div class="col"
                style="margin: 0px;bottom:1px;position : absolute">
                <div class="col text-center float-right sidebar" style="padding: 0px;font-size: 1.2vw;color:#F8359E"><i class="fa fa-twitter ml-3"></i><i class="fa fa-telegram ml-3"></i><i class="fa fa-github ml-3"></i><i class="fa fa-instagram ml-3"></i>
                    <div>
                        <p class="text-center d-inline" style="margin: 0px;font-family: Anjoman-FaNum;color: grey;font-size: 0.75vw;">طراحی و توسعه
                        <span class="text-center d-inline" style="margin: 0px;font-family: 'Anjoman-FaNum';color: black;font-weight: 900;font-size: 0.75vw;">خشایار مافی</span></p>
                        
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
    font-size: 1.5 vw;
    font-family: 'Anjoman-FaNum';
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
    font-family: 'Anjoman-FaNum' !important;

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







/* a--------------------------------a */



*
{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h5
{
  margin:0px;
  font-size:1.4em;
  font-weight:700;
}

p
{
  font-size:12px;
}

/* .center
{
  height:100vh;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
} */

/* End Non-Essential  */

.property-card
{
  margin-left:3vw;
  height:24em;
  width:27em;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  position:relative;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius:16px;
  overflow:hidden;
  -webkit-box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
}
/* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

/* Top Half of card, image. */

.property-image
{
  height:16em;
  width:27em;
  padding:1em 2em;
  position:Absolute;
  top:0px;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  /* background-image:url('https://drive.google.com/uc?export=view&id=1uIsMNFn-Hqqerrh2c7CatzODKB5Riw6q'); */
  background-size:cover;
  background-repeat:no-repeat;
}

/* Bottom Card Section */


.property-description
{
  background-color: #FAFAFC;
  height:8em;
  width:27em;
  position:absolute;
  bottom:0em;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align:right;
}

/* Social Icons */

.property-social-icons
{
    
  border-radius: 5px;
  width:80px;
  height:20px;
  position:absolute;
  bottom:1em;
  color:black;
  text-align: center;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* Property Cards Hover States */

.property-card:hover .property-description
{
  height:0em;
  padding:0px 1em;
}
.property-card:hover .property-image
{
  height:24em;
}

.property-card:hover .property-social-icons
{
    fill:white;
    background-color: tomato;
    color:white;
}

.property-card:hover .property-social-icons:hover
{
  background-color: white;
  color:#d46f27;
  cursor:pointer;
  width: 80px;
  fill:#d46f27;

}

p.property-social-icons{
    font-family: 'Anjoman-FaNum';
    font-size: 15px;
    margin:5px
}


.property-image-title
{
text-align:center;
position:Relative;
top:30%;
opacity:0;
transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
color:black;
font-size:1.2em;
}

.property-card:hover .property-image-title
{
opacity:1;

}
</style>
