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
      {
        name: 'organize-event-describe',
        path: 'event-describe',
        component: () => import(/* webpackChunkName: "organize-event-describe" */ '@/components/Organize/2-EventDescribe.vue'),
      },
      {
        name: 'organize-event-config',
        path: 'event-config',
        component: () => import(/* webpackChunkName: "organize-event-config" */ '@/components/Organize/3-EventConfig.vue'),
      },
    ],
  },
];

export default routes;
