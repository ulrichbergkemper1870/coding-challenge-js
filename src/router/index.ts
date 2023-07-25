import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Fizzbuzz from "@/views/Fizzbuzz.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/fizzbuzz",
  },
  {
    path: "/fizzbuzz",
    component: Fizzbuzz,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
