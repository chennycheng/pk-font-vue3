// uno.config.ts
import { defineConfig, presetIcons, presetWind, transformerDirectives } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    // 针对全局常用样式
    // 'menu-item': 'px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100'
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top'
  },
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives()]
})
