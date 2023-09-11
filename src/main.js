import Vue from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
new Vue({
  router,
  el: "#app",
  render(h) {
    return h(App);
  },
});
