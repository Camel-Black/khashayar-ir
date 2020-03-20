<template>
  <div>
      title:  <input type="text" />
      <quillEditor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
      
      ></quillEditor>
      
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import {quillEditor} from 'vue-quill-editor'
export default {
    name: "createPost",
    data(){
        return{
            content:'',
            editorOption:{
                debug:'info',
                placeholder:"type ...",
                readOnly:true,
                theme:'snow'
            },
            delta: undefined
        }
    },
    components:{
        quillEditor
    },
    watch:{
        content (){
            this.delta = this.$refs.myQuillEditor.quill.getContents()
            console.log(this.delta)
            
        }
    }
}
</script>

<style>

</style>