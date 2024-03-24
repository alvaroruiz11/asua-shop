import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/home/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../layouts/ShopLayout.vue'),
      children: [
        { path: '', component: HomePage, name: 'Home' },
        {
          path: 'nosotros',
          component: () => import('../pages/about/AboutPage.vue'),
          name: 'about'
        },
        {
          path: 'productos/:slug',
          component: () => import('../pages/products/ProductPage.vue'),
          name: 'products-id'
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: ''
    }
  ]
});

export default router;
