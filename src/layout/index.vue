<script setup lang="ts"></script>
<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div style="display: flex">
      <BaseSide />
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>
<style scoped></style>
