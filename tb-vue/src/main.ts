import Vue from 'vue';
import ElementUI from 'element-ui';
import moment from 'moment';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import requestServer from './server';
import './main.scss';


Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$RequestServer = requestServer;

Vue.filter('formatDate', function(value:string) {
  const newValue = moment(value).format('YYYY-MM-DD hh:mm:ss');
  return newValue;
});

new Vue({
  router,
  store,
  render: (h: Function) => h(App)
}).$mount('#app');
