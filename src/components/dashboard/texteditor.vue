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
        props: ['content'],
    components:{
        VueEditor
    }
}
</script>

<style>
/* @import url('../../assets/fonts/sahel/sahel-font.css'); */


p,h1,h2,h3,h4,h5,h6{
    font-family: Anjoman-FaNum !important;
}

</style>