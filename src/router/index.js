import Vue from 'vue';
import Router from 'vue-router';
import Multiply from '@/components/math/Multiply'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/math/multiply',
            name: 'multiply',
            component: Multiply
        }
    ]
});
