// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n' //在此处引入了各个语言的locale包

import App from './App'

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    components: {App},
    template: '<App/>'
})
