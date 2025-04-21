<script setup lang="ts">

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
  <el-container style="height: 100vh;">
    <el-header style="height: 50px; display: flex; align-items: center;">Ceph Web</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router="true"
          default-active="/index"
          @select="handleOpen">
          <el-menu-item index="/index">
            <span>概览</span>
          </el-menu-item>
          <el-menu-item index="/mon">
            <span>Monitor</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}
</style>