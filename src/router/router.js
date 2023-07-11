import {createRouter, createWebHistory} from "vue-router";
import About from "@/pages/About.vue";
import Main from "@/pages/Main.vue";
import PostsPage from "@/pages/PostsPage.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import PostsPageWithStore from "@/pages/PostsPageWithStore.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostsPageWithStore
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default  router;
