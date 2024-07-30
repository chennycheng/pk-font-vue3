<template>
  <div ref="target">
    <HelloWorld :msg="msg" />
    <div>
      <router-link to="/about">About</router-link>
    </div>
    <div>{{ x }}, {{ y }}, {{ isOutside }}</div>
    <User />
    <UserBasicInfo />
    <el-button type="primary">Primary</el-button>
    <icon-mdi-account style="color: red"></icon-mdi-account>
  </div>
</template>

<script setup lang="ts">
const msg = ref('Hello world!')

const target = ref(null)
const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: login
</route>
