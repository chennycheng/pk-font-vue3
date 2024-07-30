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
    <!-- <ReloadPrompt /> -->
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,
    // onNeedRefresh() {
    //   console.log('onNeedRefresh')
    // },
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        if (registration && registration.update) {
          registration.update()
        }
      }, 5000)
    }
  })
})

const msg = ref('Hello world!')

const target = ref(null)
const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: login
</route>
