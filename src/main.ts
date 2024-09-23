import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "reset-css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";

createApp(App).use(store).use(router).mount("#app");
