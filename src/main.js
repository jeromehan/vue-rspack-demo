import Vue from "vue";
import "./style.css";
import App from "./App.vue";
import Router from "vue-router";
import routes from "./routes";
Vue.use(Router);
new Vue({
  routes,
  el: "#app",
  render(h) {
    return h(App);
  },
});
