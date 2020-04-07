import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import createPost from '../views/admin/create_post.vue'
import dashboardHome from '../views/admin/dashboardHome.vue'
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
    component: createPost,
    meta:{
      requiresAuth: true
    }
  },
  {
    path:'/admin/dashboard/home',
    name:"Dashboard",
    component:dashboardHome,
    meta:{
      requiresAuth: true
    },
    props: true 
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/admin/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

// router.beforeEach((to,from,next)=>{
//   ViewUI.LoadingBar.start();
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem("jwt") == null) {
//       next({
//         path: "/"
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// })


export default router
