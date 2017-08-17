// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import routes from './router/index'
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
// import { Message } from 'element-ui';
/*import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false });*/

// 每一次当token到期之后跳转到login页面   
Vue.http.interceptors.push((request, next) => {
    next((response) => {
      
    //在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，
    //就添加在此处，页面中任何一次http请求都会先调用此处方法
        if( response.data.code == "000005"){
            // Message.error("登录已过期，请重新登录")   
            vm.$router.push({name: 'login'});
        }else{
            return response;
        }
    });
});


const router = new VueRouter({
  routes
});


 router.beforeEach((to, from, next) => {
  // NProgress.start();
 if (to.path == '/login') {
     sessionStorage.removeItem('userInfo');
  }
  let user = JSON.parse(sessionStorage.getItem('userInfo'));
  if (!user && to.path != '/login' ) {
    next({ path: '/login' })
  } else {
    next();
  }
})

router.afterEach(transition => {
// NProgress.done();
});
window.vm =new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
