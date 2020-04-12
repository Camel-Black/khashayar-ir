<template>
  <div id="wrapper">
      <sideBar></sideBar>
      <div class="container-fluid">
          <div class="row" >
              <div class="col" style="margin-top:100px">
                  <h1>Add new Category</h1>
              </div>
              <div class="col">
                  <div class="input-group mb-3" style="margin-top:100px">
                <input type="text" class="form-control" placeholder="Add New Category" v-model="addcategory">
                <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="send"><vue-fontawesome icon="plus" size="1" color="dark"></vue-fontawesome></button>
                <error>{{err}}</error>
                </div>
              </div>
              </div>
          </div>
          <div class="row">
              <div class="col">
                    <b-form-group label="delete categories">
                        <b-form-checkbox-group id="checkbox-group-1" v-model="selected" :options="category" name="flavour-1">
                        </b-form-checkbox-group>
                    </b-form-group>
                    <button class="btn btn-outline-secondary" type="button" @click="deleted"><vue-fontawesome icon="trash" size="1" color="dark"></vue-fontawesome></button>
              </div>
          </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
//TODO delete posts alongside you deleted categories
import error from '../../components/dashboard/err'
import sideBar from '../../components/dashboard/sideBar'
import Footer from '../../components/footer'
import Axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name: 'Categories',
    components:{
        sideBar,Footer,error
    },
    data(){
        return{
            category:[],
            addcategory:"",
            selected:[],
            err:""
        }
    },
    methods:{
        send:function(){
            let config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
        }
        console.log(this.addcategory)
        Axios.post('http://localhost:3000/api/posts/new/category',{
                category: this.addcategory
            },config)
            .then(data=>{
                this.$router.go()
                console.log(data)
            })
            .catch(error=>{
                console.log(error)
                Swal.fire('ERROR',error.toString(),'error')
            })
        },
        getAll:function(){
            fetch('http://localhost:3000/api/posts/all/category')
            .then(data=>{
                return data.json()
            })
            .then(json=>{
                json.result.forEach(cate => {
                    let option = {
                        text: cate.name,
                        value: cate.name
                    }
                    this.category.push(option)
                });
                
            }).catch(err=>{
                Swal.fire('ERROR',err,'error')
            })
        },
        deleted: function(){
            console.log(this.selected+" this is selected")
            Swal.fire({
                title: 'Are you sure?',
                text: `This Option will Delete All posts With Contain these categories  ${this.selected}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                })
                .then((result) => {
                    if (result.value) {
                        Axios.post('http://localhost:3000/api/posts/delete/category',{
                            categories: this.selected
                        })
                        .then(data=>{
                            this.$router.go()
                            console.log(data)
                        }) 
                    }
                })


        }
    },
    created(){
        this.getAll()
    }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/mailtoharshit/San-Francisco-Font-/sanfrancisco.css');
@import url('../../../bootstrap/assets/css/Sidebar-Menu-1.css');
@import url('../../../bootstrap/assets/css/styles.css');
</style>












                   Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )