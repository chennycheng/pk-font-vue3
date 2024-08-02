<template>
  <div class="default-layouts flex flex-col min-h-100vh">
    <div class="fixed top-0 left-0 h-0 w-full z-50 transition-all duration-500" :class="{ 'lt-sm:(h-full bg-dark)': menuVisible }">
      <div class="px-8 fixed top-0 left-0 w-full" :class="{ 'bg-black bg-opacity-30': y > 0 }">
        <Container class="ralative">
          <img src="/512x512.png" class="w-12 h-full lt-sm:mx-a" alt="logo" />
          <div
            class="hidden lt-sm:block absolute right-5 top-3 cursor-pointer text-gray-300 text-lg hover:text-white"
            @click="() => togggleMenu()"
          >
            <Transition name="rotate-icon" mode="out-in">
              <div v-if="menuVisible" class="i-radix-icons:cross-2"></div>
              <div v-else class="i-ic-round-menu"></div>
            </Transition>
          </div>
          <Menu v-show="menuVisible" :aligns="menuType" class="lt-sm:(absolute top-8 left-0 w-24)" />
        </Container>
      </div>
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

.rotate-icon-enter-active {
  animation: scaleYIn 0.3s;
}
.rotate-icon-leave-active {
  animation: scaleYIn 0.3s reverse;
}

@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
