<template>

    <div>
        admin panel
    </div>
  
</template>

<script>
import axios from 'axios'
import router from '../../router'
export default {
    name:"Dashboard",
    data(){
        
    },
    methods:{
        getUser: function(){
            let self =this
            axios.post('http://localhost:3000/api/get/user')
            .then((res)=>{
                console.log(res)
                self.$set(this,"user",res.data.user)  
            })
            .catch((err)=>{
                console.log(err)
                router.push('/admin/login')
            })
        }
    },
    mounted(){
        this.getUser()
    }
}
</script>

<style>

</style>