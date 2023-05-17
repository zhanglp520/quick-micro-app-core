<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { EventCenterForMicroApp } from "@micro-zoe/micro-app";
import { useRouter } from "vue-router";

const router = useRouter();
const render = ref(false);

onMounted(() => {
  render.value = true;
});
onUnmounted(() => {
  render.value = false;
});

watch(
  () => router.currentRoute.value.path,
  (val, val1) => {
    console.log("路由监听", val, val1);
    let path = val.replace("/app-demo", "");
    console.log("当前路由：", path);
    microAppData.value = {
      msg: "微应用【app-demo】来自基座的路由切换触发的新数据",
      path,
    };
  }
);

window.eventCenterForAppDemo = new EventCenterForMicroApp("appDemo");
const url = ref(`${import.meta.env.VITE_APP_DEMO_URL}/app-demo/`);
const microAppData = ref({
  msg: "微应用【app-demo】基座下发的初始数据",
  path: "/",
});
const handleCreate = (): void => {
  console.log("微应用【app-demo】创建后");
};
const handleBeforeMount = (): void => {
  console.log("微应用【app-demo】渲染前");
};
const handleMount = (): void => {
  console.log("微应用【app-demo】渲染后");
  let path = router.currentRoute.value.path;
  path = path.replace("/app-demo", "");
  console.log("当前路由：", path);
  microAppData.value = {
    msg: "微应用【app-demo】来自基座的handleMount触发的新数据",
    path,
  };
};
const handleUnmount = (): void => {
  console.log("微应用【app-demo】卸载后");
};
const handleError = (): void => {
  console.log("微应用【app-demo】加载出错了");
};
const handleDataChange = (e: CustomEvent): void => {
  console.log("微应用【app-demo】的数据:", e.detail.data);
};
</script>

<template>
  <micro-app
    v-if="render"
    name="appDemo"
    :url="url"
    inline
    disablesandbox
    :data="microAppData"
    baseroute="/app-demo"
    @created="handleCreate"
    @beforemount="handleBeforeMount"
    @mounted="handleMount"
    @unmount="handleUnmount"
    @error="handleError"
    @datachange="handleDataChange"
  ></micro-app>
</template>

<style scoped></style>
