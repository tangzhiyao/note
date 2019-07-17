import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './app.vue'
import footerVue from './components/footer.vue'
import headerVue from './components/header.vue'
import musicVue from './components/music.vue'
import oumeiVue from './components/oumei.vue'
import neidiVue from './components/neidi.vue'

Vue.use(VueRouter)


Vue.component('footerVue', footerVue)
Vue.component('headerVue', headerVue)

let router = new VueRouter({
    routes: [
        {
            path: '/', redirct: '#' 
        },
        {
            name:'music', path: '/music', component: musicVue, children: [
                {
                    name: 'oumei', path: 'oumei', component: oumeiVue,
                },
                {
                    name: 'neidi', path: 'neidi', component: neidiVue,
                }
            ]
        },
        
    ]
})

new Vue({
    el: '#app',
    render(creater){
        return creater(App)
    },
    router: router

})