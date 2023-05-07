<script setup lang="ts">
import { ref } from "vue";
import { EventCenterForMicroApp } from "@micro-zoe/micro-app";
import { useRouter } from "vue-router";

const router = useRouter();
window.eventCenterForApp_Tools = new EventCenterForMicroApp("app-tools");
const url = ref(`${import.meta.env.VITE_APP_TOOLS_URL}/app-tools/`);
const microAppData = ref({
  msg: "来自基座的初始数据",
  path: "/app-tools",
});
const handleCreate = (): void => {
  console.log("微应用【app-demo】创建了");
};
const handleBeforeMount = (): void => {
  console.log("微应用【app-demo】即将被渲染");
};
const handleMount = (): void => {
  console.log("微应用【app-demo】已经渲染完成");
  let path = router.currentRoute.value.path;
  path = path.replace("/app-tools", "");
  console.log("当前路由：", path);

  setTimeout(() => {
    microAppData.value = {
      msg: "来自基座的handleMount新数据",
      path,
    };
  }, 2000);
};
const handleUnmount = (): void => {
  console.log("微应用【app-demo】卸载了");
};
const handleError = (): void => {
  console.log("微应用【app-demo】加载出错了");
};
const handleDataChange = (e: CustomEvent): void => {
  console.log("微应用【app-demo】的数据:", e.detail.data);
};
</script>

<template>
  <div>
    <micro-app
      name="app-tools"
      :url="url"
      inline
      disablesandbox
      :data="microAppData"
      baseroute="/app-tools"
      @created="handleCreate"
      @beforemount="handleBeforeMount"
      @mounted="handleMount"
      @unmount="handleUnmount"
      @error="handleError"
      @datachange="handleDataChange"
    ></micro-app>
  </div>
</template>

<style scoped></style>
