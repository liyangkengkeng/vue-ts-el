const login= () => import(/* webpackChunkName: "home" */ '@/views/Login.vue');
export default [
  {
    path: '/login',
    component: login,
  }
];