import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopping = () => import('../views/shopping/Shopping')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  routes,
  mode:'history'
})

export default router