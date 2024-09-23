import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const TheHome = () => import("../views/the-home.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
  },
  {
    path: "/lines/:id?",
    name: "Lines",
    component: TheHome,
  },
  {
    path: "/stops/:id?",
    name: "Stops",
    component: TheHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
