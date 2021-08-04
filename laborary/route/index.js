import {createRouter, createWebHistory} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../src/components/home.vue')
        }, {
            path: '/about',
            name: 'About',
            component: () => import('../src/components/about.vue')
        },{
        path:'/login',
            name:'Login',
            component:() =>import('../src/components/login.vue')
        },{
        path:'/helloWorld',
            name:'HelloWorld',
            component:() =>import('../src/components/HelloWorld.vue')
        }
    ]
});