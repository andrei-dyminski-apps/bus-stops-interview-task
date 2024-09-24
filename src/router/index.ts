import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { LINES_ROUTE, STOPS_ROUTE } from "@/constants/router";

const TheLines = () => import("@/views/the-lines.vue");
const TheStops = () => import("@/views/the-stops.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/the-home.vue"),
    children: [
      {
        path: LINES_ROUTE,
        name: "Lines",
        component: TheLines,
        children: [
          {
            path: `:id(\\d+)`,
            name: "Line",
            component: TheLines,
          },
        ],
      },
      {
        path: STOPS_ROUTE,
        name: "Stops",
        component: TheStops,
        children: [
          {
            path: `:id(\\d+)`,
            name: "Stop",
            component: TheStops,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
