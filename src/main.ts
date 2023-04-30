import { createApp } from "vue";
import App from "./App.vue";
import microApp from "@micro-zoe/micro-app";
import router from "~/router/index";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
// app.use(ElementPlus);
app.use(router);
app.mount("#app");

microApp.start({
  plugins: {
    modules: {
      appTools: [
        {
          loader(code) {
            // @ts-ignore
            if (process.env.NODE_ENV === "development") {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(
                /(from|import)(\s*['"])(\/app-tools\/)/g,
                (all) => {
                  return all.replace(
                    "/app-tools/",
                    `http://localhost:5174/app-tools/`
                  );
                }
              );
            }
            return code;
          },
        },
      ],
    },
  },
});
