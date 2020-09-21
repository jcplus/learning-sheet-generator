import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

import './assets/css/reset.css';
import './assets/css/color.css';
import './assets/css/column.css';
import './assets/css/element.css';
import './assets/css/font.css';
import './assets/css/global.css';
import './assets/css/page.css';
import './assets/css/settings.css';

// Load components
// import Terminal from '@/components/Terminal';

// Assign components globally
// Vue.component('terminal', Terminal);

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
