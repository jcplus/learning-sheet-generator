import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import Multiply from '@/components/math/Multiply';

Vue.use(VueRouter);

const routes_config = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta:{requiresAuth: true}
    },
    {
        path: '/math/multiply',
        name: 'multiply',
        component: Multiply
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes_config
});

export default router;
