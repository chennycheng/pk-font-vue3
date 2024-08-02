<template>
  <div class="relative">
    <swiper-container
      :class="getClassAndStyle(props.height).class"
      :style="getClassAndStyle(props.height).style"
      :slides-per-view="1"
      :space-between="0"
      :navigation="{ prevEl: '.prev', nextEl: '.next' }"
      :pagination="{ type: 'fraction', el: '.pagination' }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <slot :item="item">
          <div class="bg-image" :style="{ backgroundImage: `url(${item.image})` }">
            <Container class="h-full">
              <div class="w-full flex flex-col justify-center items-start lt-sm:px-4">
                <p class="text-base sm:text-2xl text-white font-bold">{{ item.title }}</p>
                <p class="text-xs sm:text-lg text-gray-100 pt-4">{{ item.subTitle }}</p>
                <p>{{ item.desc }}</p>
              </div>
            </Container>
          </div>
        </slot>
      </swiper-slide>
    </swiper-container>
    <div class="absolute bottom-0 right-0 p-2 z-10 flex justify-center items-center gap-4 text-white text-xl bg-dark bg-opacity-40">
      <div class="pagination w-unset! text-sm text-opacity-70"></div>
      <div class="prev i-iconamoon:arrow-left-2-light text-opacity-70"></div>
      <div class="next i-iconamoon:arrow-right-2-light text-opacity-70"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Swiper 相关参考文档：
// https://swiperjs.com/element、https://swiperjs.com/vue
// Changelog：https://swiperjs.com/changelog
// Demos：https://swiperjs.com/demos
import { register } from 'swiper/element/bundle'
import type { Swiper as SwiperType } from 'swiper'
import type { SwiperItemType } from './types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

register()

const props = defineProps({
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => []
  },
  height: {
    type: String,
    default: 'h-80'
  }
})

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

function getClassAndStyle(str: String) {
  // props.height
  // 如果height的值包含rem,em,px，则返回{string:str, class:{}}
  // 如果height的值包含h-，则返回{string:'class: str}
  return {
    style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : ''
  }
}
</script>

<style scoped lang="scss">
.prev,
.next {
  @apply cursor-pointer;
}
.prev.swiper-button-disabled,
.next.swiper-button-disabled {
  @apply text-gray-400 cursor-not-allowed;
}
</style>
