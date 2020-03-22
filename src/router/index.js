import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import createPost from '../views/admin/create_post.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import notFound from '../views/404.vue'
import alogin from '../views/admin/loginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/posts/:postName',
    name:'Post',
    component: Post
  },
  {
    path:'/admin/posts/new',
    name:'createPost',
    component: createPost
  },
  {
    path:'/admin/dashboard',
    name:"Dashboard",
    component: Dashboard
  },
  {
    path:'*',
    name:"404",
    component: notFound
  },
  {
    path:"/admin/login",
    name:"adminPage",
    component: alogin
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
