import Vue from 'vue';
import Router from 'vue-router';
import login from './login';
Vue.use(Router);
const baseUrl = process.env.BASE_URL || '';

export default new Router({
  mode: 'history',
  // base: baseUrl ? `/${baseUrl}/` : '',
  routes: [
    ...login,
    { path: '/', redirect: '/login' },
  ],
});