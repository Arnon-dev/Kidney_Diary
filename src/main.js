import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import VueApexCharts from 'vue-apexcharts'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.prototype.$EventBus = new Vue()

Vue.use(Antd);
Vue.use(VueAxios, axios);
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
