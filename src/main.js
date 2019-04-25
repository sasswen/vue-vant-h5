import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

console.log(process.env.VUE_APP_URL)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
