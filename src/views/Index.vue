<script setup lang="ts">
import { ref } from 'vue'
const warn_msg = ref<string>("未配置 grafana 角色")
const grafana_url = localStorage.getItem('grafana_url')
</script>

<template>
  <h1
    v-if="grafana_url === null"
    style="display: grid; place-items: center; height: 100vh;">
    {{ warn_msg }}
  </h1>
</template>

<style scoped>
</style>
