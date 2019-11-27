<template>
  <div class="app-container">
    <!-- 顶部区域 -->
    <hear-bar class="top"></hear-bar>

    <!-- 中间路由区域 -->
    <transition mode="out-in" class="content">
      <router-view></router-view>
    </transition>

    <!-- 底部栏区域 -->

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import HearBar from "./components/hearBar.vue";
import TabBar from "./components/tabbar.vue";

export default {
  components: {
    HearBar,
    TabBar
  }
};
</script>

<style lang="css" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
} 
.app-container {
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
.app-container div:nth-child(2){
  margin-bottom: 50px;  
  margin-top: 45px;  
}
</style>