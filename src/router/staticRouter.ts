import { RouteRecordRaw } from "vue-router";
import layout from "../layout/index.vue";

const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/app-source/:page*",
        name: "AppSource",
        component: () => import("@/views/app-source/index.vue"),
      },
      {
        path: "/app-tools/:page*",
        name: "AppTools",
        component: () => import("@/views/app-tools/index.vue"),
      },
      {
        path: "/app-demo/:page*",
        name: "AppDemo",
        component: () => import("@/views/app-demo/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/login/index.vue"),
  },
  {
    path: "/personalInfo",
    name: "PersonalInfo",
    component: layout,
    redirect: "/personalInfo/index",
    children: [
      {
        path: "/personalInfo/index",
        name: "PersonalInfoIndex",
        component: () => import("../views/personalInfo/index.vue"),
      },
    ],
  },
  {
    path: "/changePassword",
    name: "ChangePassword",
    component: layout,
    redirect: "/changePassword/index",
    children: [
      {
        path: "/changePassword/index",
        name: "ChangePasswordIndex",
        component: () => import("../views/changePassword/index.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/pages/404/index.vue"),
  },
];

export default staticRouter;
