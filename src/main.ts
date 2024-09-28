import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store, { STORE_KEY } from "@/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/main.css";
import { loading } from "@/directives/loading";

createApp(App)
  .directive("loading", loading)
  .use(store, STORE_KEY)
  .use(router)
  .mount("#app");
