import microApp from "@micro-zoe/micro-app";

export const startMicroApp = () => {
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
                      `http://localhost:3102/app-tools/`
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
};
