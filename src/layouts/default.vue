<template>
  <div class="default-layouts flex flex-col min-h-100vh">
    <div class="px-8 fixed top-0 left-0 w-full z-10" :class="{ 'bg-black bg-opacity-30': y > 0 }">
      <Container class="ralative">
        <img src="/512x512.png" class="w-12 h-full lt-sm:mx-a" alt="logo" />
        <div
          class="lt-sm:(i-ic-round-menu text-gray-300 text-lg absolute right-5 top-3 cursor-pointer hover:text-white)"
          @click="() => togggleMenu()"
        ></div>
        <Menu v-show="menuVisible" :aligns="menuType" class="lt-sm:(absolute top-8 right-10 w-24 bg-black bg-opacity-30)" />
      </Container>
    </div>
    <router-view />
    <div class="mobile-hide">footer</div>
    <div class="hidden mobile">
      <MobileNavbar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/useThemeStore'

const { y } = useWindowScroll()

const menuType = ref('horizontal')
const flag = ref(false)
const [menuVisible, togggleMenu] = useToggle(useWindowSize().width.value >= 640)

if (useThemeStore().mobile) {
  menuType.value = 'mobile'
}

useResizeObserver(document.body, () => {
  const width = useWindowSize().width
  if (width.value >= 640) {
    menuType.value = 'horizontal'
    togggleMenu(true)
    flag.value = false
  } else {
    menuType.value = 'vertical'
    if (flag.value) return
    flag.value = true
    togggleMenu(false)
  }
})
</script>

<style lang="scss">
.mobile-device {
  .default-layouts {
    @apply pb-15;
  }
}
</style>
