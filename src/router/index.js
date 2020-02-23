import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Quizz from "../views/Quizz.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/quizz",
    name: "quizz",
    component: Quizz,
    beforeEnter(to, from, next) {
      if (from && from.name === "home") {
        next();
      } else {
        next({ name: "home" });
      }
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
