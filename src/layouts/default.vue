<template>
  <div>
    <div class="px-8 fixed top-0 left-0 w-full z-10" :class="{ 'bg-black bg-opacity-30': y > 0 }">
      <Container>
        <img src="/512x512.png" class="w-12 h-full" alt="logo" />
        <Menu />
      </Container>
    </div>
    <router-view />
    <div>Footer</div>
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<style scoped></style>
