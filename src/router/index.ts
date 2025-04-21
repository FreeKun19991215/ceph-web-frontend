import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

// 定义路由配置（使用 RouteRecordRaw 类型）
const routes: RouteRecordRaw[] = [
  {
    path: "/index",
    name: "Index",
    component: () => import("@/views/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;