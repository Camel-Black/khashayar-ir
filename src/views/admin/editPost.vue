<template>
  <div>
    
      <div id="wrapper">
        <sideBar></sideBar>
        <div class="page-content-wrapper"><a class="btn btn-link" role="button" id="menu-toggle" href="#menu-toggle"><i class="fa fa-reorder"></i></a>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                      <form action="" class="marginb">
                        <div class="form-row">
                          <div class="col">
                            <div class="input-group flex-nowrap">
                              <input type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="addon-wrapping" v-model="title">
                            </div>
                          </div>
                          <div class="col">
                            <b-form-select v-model="selected" :options="options"></b-form-select>
                          </div>
                          <div class="col">
                            <b-form-file v-model="file" :state="Boolean(file)" ref="files" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."  >{{file}}
                            </b-form-file> 
                          </div>
                          <div class="col">
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">khashayar.ir/posts/</span>
                              </div>
                              <input type="text" placeholder="Enter the slug" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                            </div>
                          </div>
                        </div>
                      </form>
                      <TextEditor class="marginb"></TextEditor>
                      <form>
                        <div class="form-row">
                          <div class="col">
                            <div class="d-flex justify-content-center marginb">
                              <b-form-tags input-id="tags-basic" v-model="value" class=" mb-2" style="width:30vw;"></b-form-tags>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div class="row">
                        <div class="col">
                          <div class="d-flex justify-content-start">
                            <b-button type="button" class="btn btn-light">Preview</b-button>
                          </div>
                        </div>
                        <div class="col">
                          <div class="d-flex justify-content-center">
                            <b-button type="button" class="btn btn-dark" @click="save">Save</b-button>
                          </div>
                        </div>
                        <div class="col">
                          <div class="d-flex justify-content-end">
                            <b-button type="button" class="btn btn-warning" @click="cancel">Cancel</b-button>
                          </div>
                        </div>
                      </div>                      
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
      </div>
      
  </div>
</template>

<script>
import Footer from '../../components/footer'
import sideBar from '../../components/dashboard/sideBar'
import TextEditor from '../../components/dashboard/texteditor'
import { mapGetters } from 'vuex'
import Axios from 'axios'
import jsonwebtoken from 'vue-jwt-decode'
import Swal from 'sweetalert2'

export default {
  name:"creatPost",
  components:{
    TextEditor,
    sideBar,
    Footer
  },
  data(){
    return{
      select:"",
      title:"",
      file:"",
      value:["Technology"],
      options: [
        { value: null, text: 'Categories' , disabled: true  }
      ],
      selected: null,
      postId: this.$route.params.postid
    }
  },
  methods:{
    save:function(){
      var token= localStorage.getItem('jwt')
      var decode = jsonwebtoken.decode(token)
      decode = decode.username
      console.log(this.$refs.files)
      var formData = new FormData()
      formData.append('file',this.file)
      let d = JSON.stringify(this.delta)
      formData.append('title', this.title)
      formData.append('content', d)
      formData.append('author', decode)
      formData.append('category',this.selected)
      formData.append('tags',this.value)

        let config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': `multipart/form-datal; boundary=${formData._boundary}`
          }
        }
      Axios.post('http://localhost:3000/api/posts/update/'+this.postId,formData,config)
      .then(data=>{
        console.log(data)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Post Added',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          this.$router.go()
        })
        
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getCategories: function(){
        fetch('http://localhost:3000/api/posts/all/category')
            .then(data=>{
                return data.json()
            })
            .then(json=>{
              
                json.result.forEach(cate => {
                  console.log(cate)
                    let option = {
                        text: cate.name,
                        value: cate.name
                    }
                    this.options.push(option)
                });
                
            }).catch(err=>{
                Swal.fire('ERROR',`${err}`,'error')
            })
    }
  },
  computed:{
    ...mapGetters(['delta'])
  },
  created(){
    this.getCategories()
  }
}
</script>

<style>
.input[type="file"] {
    display: none !important;
}
.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
.marginb{
  margin-bottom:5vh
}
.slug{
  height: 10px !important;
}
</style>