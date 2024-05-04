import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  // Define your routes here
});

const store = new Vuex.Store({
  // Define your store modules here
});

const vuetify = new Vuetify();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
