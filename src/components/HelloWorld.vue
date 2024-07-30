<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">{{ msg || 'hello world' }}</div>
</template>

<style scoped lang="scss">
.greetings {
  font-size: 20px;
  font-weight: bold;
}
</style>
