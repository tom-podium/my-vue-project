import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import store from './store';
import router from './router';

import './assets/css/app.css'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuetify);

const vuetify = new Vuetify();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
