import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'expose-loader?jquery!jquery' 
//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
import '../node_modules/nprogress/nprogress.css'

//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
 

Vue.use(BootstrapVue)


// Install BootstrapVue
Vue.use(BootstrapVue)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
