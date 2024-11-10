// src/router/index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Cut from '../views/cut.vue';
import Compress from '../views/compress.vue';
import Merge from '../views/merge.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Cut
  },
  {
    path: '/cut',
    name: 'Cut',
    component: Cut
  },
  {
    path: '/compress',
    name: 'Compress',
    component: Compress
  },
  {
    path: '/merge',
    name: 'Merge',
    component: Merge
  }
];

const router = createRouter({
  history: createWebHashHistory(), // 使用哈希模式
  routes
});

export default router;
