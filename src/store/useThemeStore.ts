export const useThemeStore = defineStore('theme', {
  state: () => ({
    ww: window.innerWidth,
    rate: 0,
    mobile: false
  })
})
