import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import("../views/Login/Login.vue")
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import("../views/Login/Register.vue")
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import("../views/Home/Home.vue")
    },
]

const router = new VueRouter({
    // mode: "history",
    // base: process.env.BASE_URL,
    routes
});

export default router;