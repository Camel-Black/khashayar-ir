<template>
  <div>
    <div class="register-photo">
        <div class="form-container">
            <div class="image-holder"><img src="https://www.instagram.com/p/B-mhEInFotA/?utm_source=ig_web_copy_link" alt=""></div>
            <form >
                <h2 class="text-center"><strong>Khashayar.ir</strong></h2>
                <div class="form-group"><input class="form-control" type="username" name="username" placeholder="Username" v-model="login.username">
                  <p class="alert">{{usernameMsg}}</p>
                </div>
                <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password" v-model="login.password">
                <p class="alert">{{passwordMsg}}</p>
                </div>

                <div class="form-group"><b-button @click.prevent="logIn" class="btn-dark btn-block" href="#">Sign in</b-button></div>
            </form>
        </div>
    </div>
    <div class="col a">
        <p>Designed By Camel_Black</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert2'
export default {
  name:"ogin",
  data(){
    return{
      login:{
        username:"",
        password:"",

      },
        usernameMsg:"",
        passwordMsg:""
    }
  },
  methods:{
    logIn: function(){
      if(this.login.username == "" && this.login.username == "" || this.login.username == "" || this.login.username == ""){
        this.usernameMsg = "please enter ur fuckin Username fuckin idiot"
        this.passwordMsg = "please enter ur fuckin Password fuckin idiot"
        console.log(this.u)
      } 
    else{
      this.usernameMsg = ""
      this.passwordMsg = ""
      axios.post('http://localhost:3000/api/user/login',this.login)
      .then(data =>{
       if (data){
         swal.fire('Welcom','Logged in successfully',"success")
         return data.data.token
       }
       else{
         swal.fire('Login Failed','Who Are You?',"error")
       }
      })
      .then(token=>{
        localStorage.setItem("jwt", token);
        this.$router.push("/admin/dashboard/home")
      })
      .catch(err=>{
        console.log(err)
        swal.fire('Login Failed','Who Are You?',"error")
      })
      
     
    }
  }
  }
}
</script>

<style>
@import url('../../../bootstrap/assets/css/Registration-Form-with-Photo.css');

.alert{
  color: red;
}

</style>