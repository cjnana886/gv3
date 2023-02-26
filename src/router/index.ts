import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // 幽靈場地
      path: '/ghost-venue',
      name: 'Welcome ghost venue',
      component: () => import('../views/home/ghost-venue.vue'),
    },
  ],
});

export default router;
