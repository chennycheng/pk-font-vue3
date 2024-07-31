<template>
  <div>home</div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,
    redSW(_url, registration) {
      setInterval(() => {
        if (registration && registration.update) {
          registration.update()
        }
      }, 3600000)
    }
  })
})
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
