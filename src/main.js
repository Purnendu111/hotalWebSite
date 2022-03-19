import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AxiosPlugin from 'vue-axios-cors';
import BootstrapVue from 'bootstrap-vue';
import VueSession from 'vue-session';

import VideoBackground from 'vue-responsive-video-background-player';

Vue.component('video-background', VideoBackground);
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';

// User Related
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import VueRouter from 'vue-router';
import VueSimpleAlert from 'vue-simple-alert';
// import { mdbDatatable } from 'mdbvue';
import { IconsPlugin } from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'
import store from './store/index';
import Vuex from 'vuex';
// import './axios';
import VueTreeNavigation from 'vue-tree-navigation';
import loading from 'vuejs-loading-screen';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

// import VueModal from '@kouts/vue-modal';
// import '@kouts/vue-modal/dist/vue-modal.css';

// DataTable Import with components
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'jszip';
import 'pdfmake';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
import 'datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4';
import 'datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.min.css';

Vue.use(VueSession);
Vue.use(loading, {
  // slot: `
  //   <div>
  //     <h3><div class=""loading></div></h3>
  //   </div>
  // `,
  slot: `
    <div class="px-5 py-3 bg-gray-800 rounded">
      <h3 class="text-3xl text-white"><i class="fas fa-spinner fa-spin"></i> Loading...</h3>
    </div>
  `,
  // background color
  bg: '#41b883ad',
  // // spinner icon
  // // requires Font Awesome
  // icon: 'fas fa-spinner',
  // // spinner size:
  // // 1 to 5
  // size: 3,
  // // icon color
  // icon_color: '#ffffff',
});

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(AxiosPlugin, axios);
Vue.config.productionTip = false;
window.bus = new Vue();
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(Vuex);

// Vue.component('Modal', VueModal);

Vue.prototype.cartValue = '3';
Vue.use(require('vue-resource'));
Vue.use(VueSimpleAlert);
Vue.use(VueRouter);
Vue.use(IconsPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDkaWI_yu2Y1nZXHLqJ9JjK0zCmew5H1aM',
    libraries: 'places',
    // key: 'AIzaSyCro9itvVOpXBQpszT_u2EY9MNEMmrClN0',
  },
});

Vue.use(VueTreeNavigation);
