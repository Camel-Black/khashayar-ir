<template>
    <div id="app">
        <CKEditor :editor="editor" v-model="editorData" :config="editorConfig" ></CKEditor>
    </div>
</template>

<script>
import CKEditor from 'ckeditor4-vue'
    export default {
        name: 'texted',
        components: {
            // Use the <ckeditor> component in this view.
            CKEditor
        },
        data() {
            return {
                editor: CKEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    language: 'de'
                }
            };
        }
    }
</script>
<style>

</style>