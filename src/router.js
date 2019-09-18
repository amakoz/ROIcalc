import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/calc',
      name: 'calc',
      component: () => import(/* webpackChunkName: "calc" */ './views/Calc.vue'),
    },
    {
      path: '/results',
      name: 'results',
      component: () => import(/* webpackChunkName: "results" */ './views/Results.vue'),
    },
    {
      path: '/results/:extended',
      name: 'extended',
      component: () => import(/* webpackChunkName: "extended" */ './views/Results.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
