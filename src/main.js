import Vue from 'vue'
import App from './App.vue'
//element UI
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//国际化
import i18n from './lang/index.js'
//axios
import axios from "axios";
//router
import router from './router/index'
Vue.prototype.$http = axios;

Vue.use(elementUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount('#app')
