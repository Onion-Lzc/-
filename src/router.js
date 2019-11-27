import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'
import newlist from './components/tabbar/home/newList.vue'
import newsinfo from './components/tabbar/home/NewsInfo.vue'

import photolist from './components/tabbar/home/PhotoList.vue'
import photoinfo from './components/tabbar/home/PhotoInfo.vue'

var router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: home,
    }, {
        path: '/member',
        component: newlist
    }, {
        path: '/member/newsinfo',
        component: newsinfo
    }, 
    
    {
        path: '/search',
        component: photolist
    }, {
        path: '/shopcar',
        component: shopcar
    }, {
        path: '/home/newlist',
        component: newlist
    },{
        path: '/home/photolist',
        component: photolist
    },{
        path: '/home/photolist/:id@:name',
        component: photoinfo
    }],
    linkActiveClass: 'mui-active'
})


export default router