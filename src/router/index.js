import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/client/post.vue'
import createPost from '../views/admin/createPost.vue'
import dashboardHome from '../views/admin/dashboardHome.vue'
import notFound from '../views/404.vue'
import alogin from '../views/admin/loginPage.vue'
import editPost from '../views/admin/editPost.vue'
import posts from '../views/admin/posts.vue'
import categories from '../views/admin/categories.vue'
import index from '../views/client/index.vue'
import services from '../views/client/services.vue'
import resume from '../views/client/resume.vue'
import blog from '../views/client/blog.vue'
import aboutme from '../views/client/aboutme.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/aboutme',
    name:'About',
    component:aboutme,
    meta:{
      title: 'درباره من'
    }
  },
  {
    path:'/blog',
    name:'Blog',
    component:blog,
    meta:{
      title: 'بلاگ'
    }
  },
  {
    path:'/resume',
    name:'Resume',
    component:resume,
    meta:{
      title: 'نمونه کار ها'
    }
  },
  {
    path:'/services',
    name:'Services',
    component:services,
    meta:{
      title:'خدمات'
    }
  },
  {
    path:'/',
    name:'Index',
    component:index,
    meta:{
      title: 'Khashayar Mafi'
    }
  },
  {
    path:'/admin/dashboard/categories',
    name:'Category',
    component: categories,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: "/admin/dashboard/posts",
    name: 'Posts',
    component: posts,
    meta:{
      requiresAuth : true
    }
  },
  {
    path: '/testhome',
    name: 'Home',
    component: Home
  },
  {
    path:'/blog/:postName',
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
    }
  },
  {
    path:'/admin/post/edit/:postid',
    name:'editPost',
    component: editPost,
    meta:{
      requiresAuth: true
    }
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
