import Vue from 'vue'
import App from './App'
import store from '@/store'

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

import api from '@/utils/api.js'
Vue.prototype.$api = api

const app = new Vue({
	store,
    ...App
})
app.$mount()