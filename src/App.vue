<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/useThemeStore'

const themeStore = useThemeStore()

useResizeObserver(document.body, () => {
  const width = window.innerWidth
  const contentWidth = 1200
  themeStore.$patch({
    ww: width,
    rate: width < 1200 ? +(width / contentWidth).toFixed(2) : 1,
    mobile: /iphone|android|windows phone/.test(navigator.userAgent.toLowerCase())
  })
})
</script>

<style scoped></style>
