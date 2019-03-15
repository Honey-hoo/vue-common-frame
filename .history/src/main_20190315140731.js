// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import store from './vuex'
import customTable from 'vue-table-set'

Vue.use(ElementUI, {size: 'small'})
Vue.use(VueAxios, axios)
Vue.use(customTable)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>',
    data: {
        bus: new Vue()
    }
})
