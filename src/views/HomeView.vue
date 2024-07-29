<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main class="home">
    <HelloWorld :msg="'Hello World!'" />
  </main>
</template>

<style lang="scss">
.home {
  color: red;
}
</style>
