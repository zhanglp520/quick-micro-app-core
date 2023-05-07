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
        path: "/app-tools/:page*",
        name: "AppTools",
        component: () => import("@/views/app-tools/index.vue"),
      },
    ],
  },
  {
    path: "/system",
    name: "System",
    component: layout,
    redirect: "/system/user",
    children: [
      {
        path: "/system/user",
        name: "User",
        component: () => import("@/views/system/user/index.vue"),
      },
      {
        path: "/system/role",
        name: "Role",
        component: () => import("@/views/system/role/index.vue"),
      },
      {
        path: "/system/menu",
        name: "Menu",
        component: () => import("@/views/system/menu/index.vue"),
      },
      {
        path: "/system/dept",
        name: "Dept",
        component: () => import("@/views/system/dept/index.vue"),
      },
      {
        path: "/system/dictionary",
        name: "Dictionary",
        component: () => import("@/views/system/dictionary/index.vue"),
      },
      {
        path: "/system/dictionaryType",
        name: "DictionaryType",
        component: () => import("@/views/system/dictionaryType/index.vue"),
      },
      {
        path: "/system/log/operate",
        name: "operate",
        component: () => import("@/views/system/log/operate.vue"),
      },
      {
        path: "/system/log/error",
        name: "error",
        component: () => import("@/views/system/log/error.vue"),
      },
      {
        path: "/system/api",
        name: "Api",
        component: () => import("@/views/system/api/index.vue"),
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
