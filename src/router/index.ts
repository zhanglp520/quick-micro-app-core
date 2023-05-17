import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import pinia from "@/store";
import { useAuthStore } from "@/store/modules/auth";
import staticRouter from "./staticRouter";
import { addRoutes } from "./dynamicRouter";
import microApp from "@micro-zoe/micro-app";

const router = createRouter({
  history: createWebHistory(),
  routes: [...staticRouter],
});

export default router;
router.beforeEach((to, from, next) => {
  // console.log('beforeEach',to.path);

  // microApp.setData('app-demo', { path: to.path })
  NProgress.start();
  const loginStore = useAuthStore(pinia);
  if (loginStore.getAccessToken) {
    if (!to.name) {
      addRoutes(router);
      next({ ...to, replace: true });
    } else {
      next();
    }
  } else if (to.path === "/login") {
    next();
  } else {
    next("/login");
  }
});
router.afterEach(() => {
  NProgress.done();
});
