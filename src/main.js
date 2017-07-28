// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'babel-polyfill'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import vueDragDrag from 'vue-dragdrag'
Vue.use(vueDragDrag)
import addressPicker from 'vue-address-picker'
Vue.use(addressPicker)

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
