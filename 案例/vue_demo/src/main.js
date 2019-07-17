import Vue from 'vue'
import Axios from 'axios'

import App from './app.vue'

Vue.prototype.$axios = Axios

new Vue({
    el: '#app',
    render(creater){
        return creater(App)
    }, 
}) 