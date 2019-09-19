import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueTippy, { TippyComponent } from 'vue-tippy';
import Notifications from 'vue-notification';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/app.scss';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(VueTippy);
Vue.use(Notifications);
Vue.component('tippy', TippyComponent);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
