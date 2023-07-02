import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/components/MainPage";
import ProfilePage from "@/components/ProfilePage"
import BlogPage from "@/components/BlogPage"

const routes = [
  {
    path: '/',
    component: MainPage,
  },
   {
     path: '/ProfilePage',
     component: ProfilePage,
    
  },
  {
    path: '/BlogPage',
    component: BlogPage,
   
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;