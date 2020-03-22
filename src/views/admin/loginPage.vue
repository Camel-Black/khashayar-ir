<template>
  <div class="container">
    <form >
      Username: <input type="text" name="username" placeholder="example" v-model="username" />
      {{username}}
      password: <input type="password" name="password" placeholder="password" v-model="password"/>
      {{password}}
      <button @click="login" type="button">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../../router'
export default {
  name:"loginPage",
  data(){
    return{
      username: "",
      password: ""
    }
  },
  methods:{
    login(){
      
      let username= this.username;
      let password = this.password;
      let login = ()=>{
        let data = {
          username : username,
          password: password
        }
        
        axios.post('http://localhost:3000/api/user/login',data).then((res)=>{
          console.log("logged in")
          console.log(res)
          router.push('/dashboard')
        })
        .catch((err)=>{
          console.log('WHO ARE YOU?')
          console.log(err)
        })

      }
      login()
    }
  }

}
</script>

<style>

</style>