import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import './vue-class-config'
import './element'
// import * as $Api from './services/api'


// Vue.prototype.$api = $Api
// import css
import "./assets/reset.css";
import "./assets/theme/index.scss";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
