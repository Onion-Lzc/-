import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
import VueResource from 'vue-resource'
import Ajax from './ajax.js'
Vue.use(VueResource)

import './css/index.css'
import './css/weui.css'
import './css/styles.css'
import './fonts/font-awesome/css/font-awesome.min.css'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import app from './App.vue'
Vue.use(Mint);

Vue.prototype.$ajax = new Ajax()

// import './lib/fetch.js'
NutUI.install(Vue);
import Vant from 'vant';
import 'vant/lib/index.css';



Vue.use(Vant);

var vm = new Vue({
    el: '#app',
    render: c => (c(app)),
    router
})