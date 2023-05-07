import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import * as echarts from "echarts";
import * as Elicons from "@element-plus/icons-vue";
import quickUI from "@ainiteam/quick-vue3-ui";
import "@ainiteam/quick-vue3-ui/dist/style.css";

// import "./style.css";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";
import i18n from "./i18n";
import { useAppStore } from "./store/modules/app";
import { startMicroApp } from "./microAppConfig/index";

const appStore = useAppStore(pinia);
const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
Object.keys(Elicons).forEach((key) => {
  app.component(key, Elicons[key]);
});
app.use(quickUI);
app.use(pinia);
app.use(router);
app.use(i18n);
app.use(ElementPlus, {
  locale: appStore.getLanguage === "zh" ? zhCn : en,
});
app.mount("#app");

startMicroApp();
