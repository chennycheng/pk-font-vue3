<template>
  <div class="flex">
    <router-link class="menu-item" to="/">产品</router-link>
    <a class="menu-item" href="https://www.baidu.com" target="_blank">社区</a>
    <router-link class="menu-item" to="/study">学习</router-link>
    <router-link class="menu-item" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.menu-item {
  @apply relative text-white text-lg  font-300 px-8 py-2;
  &:hover {
    @apply font-500;
    &:after {
      @apply content-empty absolute bg-gray-100 w-8 h-[0.1rem] bottom-0 left-[calc(50%-1rem)];
    }
  }
}
</style>
