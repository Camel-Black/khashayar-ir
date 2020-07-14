<template>
  <div class="body">
     <div id="wrapper">
        <sideBar></sideBar>
        <div class="page-content-wrapper"><a class="btn btn-link" role="button" id="menu-toggle" href="#menu-toggle"><i class="fa fa-reorder"></i></a>
            <div class="container-fluid">
                <div class="row">
                    <div class="col" style="border-bottom: 1px solid #2d2d2d">
                        <h2 class="display-4" style="margin: 0px;margin-bottom: 26px;font-size: 56px;font-weight: bold;">Create Post</h2>
                        <p class="d-inline m-2" style="margin: 0px;margin-bottom: 20px;font-size: 38px;">Whats in ur mind?</p><b-button class="btn btn-link " style=" margin-bottom: 15px;background-color:white" type="submit" href="/admin/posts/new">
                            <vue-fontawesome icon="plus" size="1" color="dark"></vue-fontawesome>
                        </b-button></div>
                </div>
                <div class="row" style="margin: 0px;">
                    <div class="col" style="padding: 0px;">
                        <h2 class="display-4" style="margin: 0px;margin-bottom: 26px;font-size: 56px;font-weight: bold;">Posts</h2>
                        <div class="row padMar" style="margin: 0px;">
                            <div class="col padMar">
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
import sideBar from '../../components/dashboard/sideBar'
export default {
    components:{
        sideBar
    }
}
</script>

<style>

</style>