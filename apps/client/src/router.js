// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddPost from '@/views/AddPost.vue'
import PostDetail from '@/views/PostDetail.vue'

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
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
