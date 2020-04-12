<template>
  <div>
        <div id="sidebar-wrapper" style="background-color: rgb(244,244,244);" ref="wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"> <a class="hover" href="/admin/dashboard/home" style="color: rgb(166,166,166);">Home</a></li>
                <li> <a class="hover" href="/admin/dashboard/posts" style="color: rgb(33,37,41);" >Post</a></li>
                <li> <a href="/admin/dashboard/posts" style="color: rgb(0,0,0);">Comments</a></li>
                <li> <a href="/admin/dashboard/categories" style="color: rgb(0,0,0);">Categories</a></li>
                <li> <a href="#" style="color: rgb(0,0,0);" @click="logUserOut">Logout</a></li>
            </ul>
            
        </div>
  </div>
</template>

<script>

export default {
  name:'sideBar',
  methods:{
    logUserOut:function(){
    localStorage.removeItem('jwt')
    this.$router.push("/admin/login")
    }
  }
}
</script>

<style>

</style>