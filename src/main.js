// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Question from './components/Question';
import Score from './components/Score';

Vue.use(VueRouter);

const routes = [
  { path: '/question/:num', component: Question },
  { path: '/', redirect: '/question/0' },
  { path: '/score', component: Score },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
