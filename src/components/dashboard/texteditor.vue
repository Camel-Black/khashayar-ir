<template>
  <div class="qcountainr">
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
import {mapGetters} from 'vuex'
export default {
    name: "texteditor",
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
        content (val){
            console.log(`${val} this is val`)
            this.$store.commit('setDelta',val)
        }
    },
    computed:{
        ...mapGetters(['delta'])
    }
}
</script>

<style>
.ql-container{
    height: 60vh;
}
</style>