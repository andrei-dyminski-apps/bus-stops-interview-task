import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { STORE_KEY } from "./store";
import "reset-css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";

createApp(App).use(store, STORE_KEY).use(router).mount("#app");
