import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    name: 'organize',
    path: '/organize',
    component: () => import(/* webpackChunkName: "organize" */ '@/views/Organize.vue'),
    children: [
      {
        name: 'organize-event-type',
        path: 'event-type',
        component: () => import(/* webpackChunkName: "organize-event-type" */ '@/components/Organize/1-EventType.vue'),
      },
    ],
  },
];

export default routes;
