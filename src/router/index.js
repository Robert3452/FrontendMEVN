import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
import Tasks from '@/views/Tasks';
import Login from '@/views/Login';
import Signup from '@/views/Signup';

import auth from '@/middleware/auth';

import store from '@/store'


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            name: "home",
            path: "/",
            component: Home,
        },
        {
            name: "about",
            path: "/about",
            component: About
        },
        {
            name: "tasks",
            path: "/tasks",
            component: Tasks,
            meta: {
                middleware: [auth]
            }
        },
        {
            name: "login",
            path: "/login",
            component: Login
        },
        {
            name: "signup",
            path: "/signup",
            component: Signup
        }
    ]
})

function nextFactory(context, middleware, index) {
    const subsequent = middleware[index];
    if (!subsequent) return context.next
    return (...parameters) => {
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequent({ ...context, next: nextMiddleware });
    }
}



router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {

        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

        const context = {
            to, from, next, store
        }
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({
            ...context,
            next: nextMiddleware
        })
    } else {
        return next()
    }
})
export default router;