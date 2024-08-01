<template>
  <div>
    <Swiper :items="swiperItems" height="36rem"></Swiper>
    <div class="m-3 flex flex-wrap items-start gap-2">
      <Card
        v-for="(item, index) in cardItems"
        :key="index"
        :image="item.image"
        :imageType="item.imageType"
        :icon="item.icon"
        :title="item.title"
        :subTitle="item.subTitle"
        :border="item.border"
      ></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import type { SwiperItemType } from '@/components/types'
import bg from '@/assets/images/bg.png'

const swiperItems: Array<SwiperItemType> = [
  { image: bg, title: '传播技术的种子', subTitle: '让技术没有门槛，让沟通没有障碍' },
  { image: bg },
  { image: bg }
]

const cardItems = [
  { image: bg, title: 'title', subTitle: 'subTitle' },
  { image: bg, imageType: 'avatar', title: 'title', subTitle: 'subTitle', border: true },
  { image: bg },
  { image: bg, title: 'title', subTitle: 'subTitle' },
  { icon: 'i-mdi-apple-icloud', title: 'title', subTitle: 'subTitle' }
]

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
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
