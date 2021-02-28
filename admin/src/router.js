import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/components/Home/index.vue'),
    },
    {
      path: "/form",
      name: "form",
      component: () => import('@/components/Form/index.vue'),
    },
    {
      path: "/details",
      name: "details",
      
      component: () => import('@/components/WarehouseDetail/index.vue'),
    },
  ],
});

export default router;
