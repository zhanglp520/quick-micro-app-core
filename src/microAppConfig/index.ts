import microApp from "@micro-zoe/micro-app";

export const startMicroApp = () => {
  microApp.start({
    plugins: {
      modules: {
        appSource: [
          {
            loader(code) {
              // @ts-ignore
              if (process.env.NODE_ENV === "development") {
                // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
                code = code.replace(
                  /(from|import)(\s*['"])(\/app-source\/)/g,
                  (all) => {
                    return all.replace(
                      "/app-source/",
                      `http://localhost:3103/app-source/`
                    );
                  }
                );
              }
              return code;
            },
          },
        ],
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
        appDemo: [
          {
            loader(code) {
              // @ts-ignore
              if (process.env.NODE_ENV === "development") {
                // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
                code = code.replace(
                  /(from|import)(\s*['"])(\/app-demo\/)/g,
                  (all) => {
                    return all.replace(
                      "/app-demo/",
                      `http://localhost:3101/app-demo/`
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
