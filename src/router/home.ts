const home= () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue');
export default [
  {
    path: '/home',
    name:'home',
    component: home,
  }
];