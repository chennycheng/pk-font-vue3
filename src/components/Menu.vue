<template>
  <div :class="['flex', aligns]">
    <template v-for="item in menuList" :key="item.name">
      <a v-if="item.type === 'link'" class="menu-item" :href="item.path" target="_blank">{{ item.name }}</a>
      <router-link v-else class="menu-item" :to="item.path">{{ item.name }}</router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps({
  aligns: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  }
})

const menuList = [
  { name: '产品', path: '/' },
  { name: '社区', path: 'https://www.baidu.com', type: 'link' },
  { name: '学习', path: '/study' },
  { name: '关于', path: '/about' }
]
</script>

<style scoped lang="scss">
.menu-item {
  @apply relative text-white text-lg lt-sm:text-sm font-300 py-2 w-36 text-align-center;
  &:hover {
    @apply font-500;
    &:after {
      @apply content-empty absolute bg-gray-100 w-8 h-[0.1rem] bottom-0 left-[calc(50%-1rem)];
    }
  }
}

.vertical {
  @apply flex-col;
  .menu-item {
    @apply w-full;
  }
}
</style>
