import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

// 定义路由配置（使用 RouteRecordRaw 类型）
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/index",
    meta: {
      showInMenu: false
    }
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("@/views/Index.vue"),
    meta: {
      title: "概览",
      showInMenu: true
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;