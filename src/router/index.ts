import Vue from 'vue';
import Router from 'vue-router';
import login from './login';
import home from './home';
Vue.use(Router);
const baseUrl = process.env.BASE_URL || '';
const header = () => import('@/views/index.vue');
export default new Router({
  mode: 'history',
  // base: baseUrl ? `/${baseUrl}/` : '',
  routes: [
    ...login,
    {
      path: '/index.html',
      name: 'index',
      component: header,
      children: [
        ...home,
      ]
    },
    { path: '/', redirect: '/login' },
    
  ],
});