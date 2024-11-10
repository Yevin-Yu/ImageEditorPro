<template>
  <!-- 头部导航 -->
  <Header></Header>
  <div class="container">
    <!-- 侧边栏 -->
    <Aside></Aside>
    <!-- 内容区 -->
    <router-view class="main-view"></router-view>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
</script>


<style scoped>
.container {
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: calc(100% - 70px);
}

/* 媒体查询 大于2000 小于2400*/
@media screen and (min-width: 2000px) and (max-width: 2560px) {
  .container {
    max-width: 1700px;
  }
}

/* 大于2800 */
@media screen and (min-width: 2560px) {
  .container {
    max-width: 2300px;
  }
}

.container .main-view {
  flex: 1;
  margin: 18px 0px 18px 18px;
  padding: 12px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 12px;
  width: 240px;
  background-color: #282c347e;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
}
</style>
