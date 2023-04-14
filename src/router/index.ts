import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue'),
    },
    {
      path: '/addFood',
      name: 'addFood',
      component: () => import('@/views/AddFoodView.vue'),
    },
    {
      path: '/setActivity',
      name: 'setActivity',
      component: () => import('@/views/SetActivityView.vue'),
    },
  ],
});

export default router;
