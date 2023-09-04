import Router from "vue-router";
export default new Router({
  routes: [
    {
      path: "/hello-world",
      name: "hello-world",
      component: () =>
        import(
          /* webpackChunkName: "helloworld" */ "./components/HelloWorld.vue"
        ),
    },
    {
      path: "/hello-world1",
      name: "hello-world1",
      component: () =>
        import(
          /* webpackChunkName: "helloworld1" */ "./components/HelloWorld1.vue"
        ),
    },
    {
      path: "/hello-world2",
      name: "hello-world2",
      component: () =>
        import(
          /* webpackChunkName: "helloworld2" */ "./components/HelloWorld2.vue"
        ),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
