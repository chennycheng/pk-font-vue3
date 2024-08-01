<template>
  <div :class="cardClass">
    <div v-if="image" :class="imageClass" :style="{ backgroundImage: `url(${image})` }"></div>
    <div v-else :class="[icon, 'w-20 h-20']"></div>
    <div v-if="title || subTitle" :class="titleClass">
      <p v-if="title" class="text-lg text-dark-300 text-bold pb-2">{{ title }}</p>
      <p v-if="subTitle" class="text-sm text-dark-100 font-300">{{ subTitle }}</p>
      <!-- <a :href="url" class="link">Learn More</a> -->
    </div>
    <slot :item="props"></slot>
  </div>
</template>

<script setup lang="ts">
// image: string
// icon: string -> class i-
// title: string
// subTitle: string
// url: string
const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  imageType: {
    type: String as PropType<'default' | 'rounded' | 'avatar'>,
    default: 'default'
  },
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  border: {
    type: Boolean,
    default: false
  }
})

const cardClass = computed(() => {
  let defaultClass = 'flex flex-col w-80 relative'
  if (props.icon) {
    defaultClass += ' item-start p-4'
  }
  if (props.imageType === 'rounded') {
    defaultClass += ' rounded overflow-hidden'
  }
  if (props.imageType === 'avatar') {
    defaultClass += ' rounded overflow-visible mt-10'
  }
  if (props.border) {
    defaultClass += ' border border-solid border-gray-300'
  }
  return defaultClass
})

const imageClass = computed(() => {
  const defaultClass = 'bg-image'
  if (!props.title && !props.subTitle) {
    if (props.imageType === 'rounded') {
      return `${defaultClass} h-60 rounded`
    }
    return `${defaultClass} h-60`
  }
  if (props.imageType === 'avatar') {
    return `${defaultClass} h-20 w-20 rounded-50% self-center absolute top-0 translate-y--50%`
  }
  return `${defaultClass} h-40`
})

const titleClass = computed(() => {
  const defaultClass = 'flex flex-col items-start p-4'
  if (props.imageType === 'avatar') {
    return `${defaultClass} mt-15`
  }
  return defaultClass
})
</script>

<style scoped lang="scss"></style>
