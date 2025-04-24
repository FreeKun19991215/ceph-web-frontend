<script setup lang="ts">
import router from '@/router'

// 过滤出需要显示在菜单中的路由
const menuRoutes = router.getRoutes().filter(r => r.meta?.showInMenu !== false)
</script>

<template>
  <el-container style="height: 100vh;">
    <el-header style="height: 50px; display: flex; align-items: center;">Ceph Web</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="/"
          router>
          <template v-for="route in menuRoutes" :key="route.path">
            <!-- 没有子路由的菜单项 -->
            <el-menu-item 
              v-if="!route.children.length"
              :index="route.path">
              {{ route.meta?.title || route.name }}
            </el-menu-item>
            
            <!-- 有子路由的菜单项 -->
            <el-sub-menu 
              v-else
              :index="route.path">
              <template #title>{{ route.meta?.title || route.name }}</template>
              <el-menu-item
                v-for="child in route.children"
                :key="child.path"
                :index="route.path + '/' + child.path">
                {{ child.meta?.title || child.name }}
              </el-menu-item>
            </el-sub-menu>
          </template>
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
  --el-main-padding: 6px;
  padding-top: 1px;
}
</style>