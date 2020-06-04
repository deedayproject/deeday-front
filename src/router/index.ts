import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import organize from './organize';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/events/results',
    name: 'events-results',
    component: () => import(/* webpackChunkName: "events-results" */ '@/views/EventsResults.vue'),
  },
  ...organize,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
