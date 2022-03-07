// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import {extend, localize} from 'vee-validate'
import {required, email, min} from 'vee-validate/dist/rules'
import ko from 'vee-validate/dist/locale/ko.json'
localize('ko', ko)
extend('email', email)
extend('required', required)
extend('min', min)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSidebarMenu)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
