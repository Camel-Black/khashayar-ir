<template>
    <div>
        {{content}}
        <div class="sahel" v-html="content"></div>
      <vue-editor v-model="content"  />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    name: 'textEditor',
    data(){
        return{
            content:"",
        // [{'font': [{'Sahel' : 'Sahel'}]}],
        }
    },
    components:{
        VueEditor
    }
}
</script>

<style>
@import url('../../assets/fonts/sahel/sahel-font.css');


p{
    font-family: Sahel !important;
}

</style>