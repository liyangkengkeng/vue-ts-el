const login= () => import(/* webpackChunkName: "home" */ '@/views/Login.vue');
export default [
  {
    path: '/login',
    name:'login',
    component: login,
  }
];