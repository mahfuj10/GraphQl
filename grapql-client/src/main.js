import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(ElementUI);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: function (h) { return h(App) }
}).$mount('#app')
