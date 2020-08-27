import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './assets/css/font.css';
import './assets/css/page.css';

import Terminal from '@/components/Terminal';

Vue.component('terminal', Terminal);

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
