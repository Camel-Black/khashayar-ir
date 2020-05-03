<template>
  <div>
        <div id="sidebar-wrapper" style="background-color: rgb(244,244,244);" ref="wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"> <a class="hover" href="/admin/dashboard/home" style="color: rgb(166,166,166);">Home</a></li>
                <li> <a class="hover" href="/admin/dashboard/posts" style="color: rgb(33,37,41);" >Post</a></li>
                <li> <a href="/admin/dashboard/comments" style="color: rgb(0,0,0);">Comments  <span  class="badge badge-pill badge-dark">{{number}}</span></a></li>
                <li> <a href="/admin/dashboard/categories" style="color: rgb(0,0,0);">Categories</a></li>
                <li> <a href="#" style="color: rgb(0,0,0);" @click="logUserOut">Logout</a></li>
            </ul>
            
        </div>
  </div>
</template>

<script>

export default {
  name:'sideBar',
  data(){
    return{
      number:""
    }
  },
  methods:{
    logUserOut:function(){
    localStorage.removeItem('jwt')
    this.$router.push("/admin/login")
    },
    comments(){
            var token = localStorage.getItem('jwt')
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${token}`);

            var raw = "";

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:3000/api/comment/pendings", requestOptions)
            .then(response => response.json())
            .then(data=>{
                this.number = data.data.length
            })
            
            .catch(error => console.log('error', error));
    }
  },
  created(){
    this.comments()
  }
}
</script>

<style>

</style>