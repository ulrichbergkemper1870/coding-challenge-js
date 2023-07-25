import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Fizzbuzz from "../views/Fizzbuzz.vue";
import NicerDicer from "../views/NicerDicer.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/fizzbuzz",
    name: "Home",
    component: Fizzbuzz,
  },
  {
    path: "/dice",
    name: "NicerDicer",
    components: NicerDicer
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
