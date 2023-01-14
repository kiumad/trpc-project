// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddPost from '@/views/AddPost.vue'
import PostDetail from '@/views/PostDetail.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import loginPage from '@/views/loginPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/add',
        name: 'addPost',
        component: AddPost,
    },
    {
        path: '/detail/:id',
        name: 'postDetail',
        component: PostDetail,
        props: true,
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage,
    },
    {
        path: '/login',
        name: 'login',
        component: loginPage,
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
