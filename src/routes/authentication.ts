import { RouteConfig } from 'vue-router';
import Login from '@/views/Authentication/Login.vue';

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

export default routes;
