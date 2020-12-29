import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register/Register.vue")
  },
  {
    path: "/admin",
    component: () => import("../views/Admin/AdminHome.vue"),
    children: [
      { path: "/admin", name: "admin", component: () => import("../views/Admin/Dashboard.vue") },
      { path: "/listuser", name: "listuser", component: () => import("../components/ListUesr/ListUser.vue") }
    ]
  },
  {
    path: "/superadmin",
    component: () => import("../views/Superadmin/SuperAdminHome.vue"),
    children: [
      { path: "/superadmin", name: "superadmin", component: () => import("../components/ManageUser/ManageUser.vue") },
      { path: "/listuseradmim", name: "listuseradmin", component: () => import("../components/ListUesr/ListUserAdmin.vue") }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
