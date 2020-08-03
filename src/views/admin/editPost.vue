<template>
  <div style="font-family: Anjoman-FaNum">
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
                              <input type="text" class="form-control" style="direction:rtl" placeholder="Title" aria-label="Username" aria-describedby="addon-wrapping" v-model="title">
                            </div>
                          </div>
                          <div class="col">
                            <b-form-select v-model="selected" :options="options"></b-form-select>
                          </div>
                          <div class="col">
                            <b-form-file v-model="file" :state="Boolean(file)" ref="files" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."  >{{file}}
                            </b-form-file> 
                            <div v-if="parseFloat(file.size/1024).toFixed(2) < 1500">
                              <p style="color:green">OK</p>
                            </div>
                            <div v-else>
                              <p style="color:red">Over size</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                              <li class="breadcrumb-item active"   aria-current="page">http://khashayar.ir/blog/{{selected}}-{{dashify(title)}}</li>
                            </ol>
                          </nav>
                          </div>
                      </form>
                      <div  class="content-holder justify-content-right" v-html="content"></div>
                      {{content}}
                      <vue-editor v-model="content" class="marginb" style="direction:rtl" />
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
        <Ooter></Ooter>
      </div>
      
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Ooter from '../../components/footer'
import sideBar from '../../components/dashboard/sideBar'
//import TextEditor from '../../components/dashboard/texteditor'
//import { mapGetters } from 'vuex'
import Axios from 'axios'
import jsonwebtoken from 'vue-jwt-decode'
import Swal from 'sweetalert2'

export default {
  name:"creatPost",
  components:{
  //  TextEditor,
    sideBar,
    Ooter,
    VueEditor
  },
  data(){
    return{
      slug:"",
      select:"",
      title:"",
      file:"",
      content:"",
      value:["تکنولوژی"],
      options: [
        { value: null, text: 'Categories' , disabled: true  }
      ],
      selected: null,
      post:{}
    }
  },
  methods:{
    dashify : function(titleStr){
    titleStr = titleStr.replace(/^\s+|\s+$/g, '');
    titleStr = titleStr.toLowerCase();
   //persian support
    titleStr = titleStr.replace(/[^a-z0-9_\s-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]#u/, '') 
    // Collapse whitespace and replace by -
        .replace(/\s+/g, '-')
        // Collapse dashes
        .replace(/-+/g, '-');
    return titleStr;       
}
    ,
    save:function(){
      var token= localStorage.getItem('jwt')
      var decode = jsonwebtoken.decode(token)
      decode = decode.username
      console.log(this.$refs.files)
      var formData = new FormData()
      formData.append('file',this.file)
      formData.append('title', this.title)
      formData.append('content', this.content)
      formData.append('author', decode)
      console.log(this.selected)
      formData.append('category',this.selected)
      formData.append('tags',this.value)
      formData.append('slug',this.slug)

        let config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': `multipart/form-datal; boundary=${formData._boundary}`
          }
        }
      Axios.post('http://localhost:3000/api/posts/update/'+this.post._id,formData,config)
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
            getSinglePost(){
            
            var title = this.$route.params.postName
            fetch(`http://localhost:3000/api/posts/${title}`)
            .then(data =>{
                return data.json()
            })
            .then(json =>{ 
                this.post = json[0]
                this.title = this.post.title
                this.selected = this.post.category
                this.value = this.post.tags
                this.content = this.post.content
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
    },
    cancel(){
      this.$router.push('/admin/dashboard/posts')
    }
  },
  created(){
    this.getCategories()
    this.getSinglePost()
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
div >>> p{
  width: 10px;
  color: #8f3131 !important;
}
</style>