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
  {
    path: "/hardware",
    name: "Hardware",
    meta: {
      title: "硬件信息",
      showInMenu: true
    },
    children: [
      {
        path: "server",
        name: "Server",
        component: () => import("@/views/Hardware/Server/Server.vue"),
        meta: {
          title: "服务器",
          showInMenu: false
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;