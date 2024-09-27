import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { LINES_ROUTE, STOPS_ROUTE } from "@/constants/router";

const TheLines = () => import("@/views/the-lines.vue");
const TheStops = () => import("@/views/the-stops.vue");
const TheHome = () => import("@/views/the-home.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
    children: [
      {
        path: LINES_ROUTE,
        name: "Lines",
        component: TheLines,
        children: [
          {
            path: `:line(\\d+)`,
            name: "Line",
            component: TheLines,
            children: [
              {
                path: `:stop`,
                name: "LineStop",
                component: TheLines,
              },
            ],
          },
        ],
      },
      {
        path: STOPS_ROUTE,
        name: "Stops",
        component: TheStops,
        children: [
          {
            path: `:stop`,
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
