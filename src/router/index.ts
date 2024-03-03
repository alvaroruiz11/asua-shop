import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../presentation/pages/home/HomePage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../presentation/layouts/ShopLayout.vue'),
      children: [
        { path: '', component: HomePage, name: 'Home' },
        {
          path: 'nosotros',
          component: () => import('../presentation/pages/about/AboutPage.vue'),
          name: 'about'
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

export default router;
