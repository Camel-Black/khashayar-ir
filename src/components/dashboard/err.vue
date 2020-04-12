<template>
  <div class="err"><slot></slot></div>
</template>

<script>
export default {
    name:'error'
}
</script>

<style>
.err{
    color:red;
    font-weight: 700;
}
</style>