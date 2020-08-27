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
import VueAnalytics from 'vue-analytics'
// import VueProgressBar from 'vue-progressbar'

//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
 

Vue.use(BootstrapVue)

Vue.use(VueAnalytics, {
  id: 'UA-173908665-2', router,
  autoTracking: {
    screenview: true
  }
})

// Install BootstrapVue
Vue.use(BootstrapVue)

var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
