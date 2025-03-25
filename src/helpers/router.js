import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '../stores';
import Product from '../pages/product/Product.vue'
import Home from '../pages/home/Home.vue';
import Login from '../pages/login/Login.vue';
import Order from '../pages/order/Order.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/products', name: 'products', component: Product },
        { path: '/orders', name: 'orders', component: Order },
        { path: '/login', name:'login', component: Login }
    ]
});

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});