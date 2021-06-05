import Vue from "vue";
import VueRouter from "vue-router";
import Total from "../components/Total.vue";
import Countries from "../components/Countries.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Total",
    component: Total,
  },
  {
    path: "/Countries",
    name: "Countries",
    component: Countries,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
