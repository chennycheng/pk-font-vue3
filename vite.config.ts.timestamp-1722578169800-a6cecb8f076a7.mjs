// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/@vitejs+plugin-vue@5.1.1_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.0_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { VueRouterAutoImports } from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/unplugin-vue-router@0.10.2_rollup@2.79.1_vue-router@4.4.0_vue@3.4.34_typescript@5.5.4___vue@3.4.34_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/index.js";
import VueRouter from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/unplugin-vue-router@0.10.2_rollup@2.79.1_vue-router@4.4.0_vue@3.4.34_typescript@5.5.4___vue@3.4.34_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/vite.js";
import AutoImport from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@10.11.0_vue@3.4.34_typescript@5.5.4___rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/unplugin-vue-components@0.27.3_@babel+parser@7.25.0_rollup@2.79.1_vue@3.4.34_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/unplugin-vue-components@0.27.3_@babel+parser@7.25.0_rollup@2.79.1_vue@3.4.34_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import Icons from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/unplugin-icons@0.19.1_@vue+compiler-sfc@3.4.34/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/unplugin-icons@0.19.1_@vue+compiler-sfc@3.4.34/node_modules/unplugin-icons/dist/resolver.js";
import Layouts from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3__vue_ruxp5l4hwavlufurqao3pezlbe/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import { VitePWA } from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/vite-plugin-pwa@0.20.1_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3__workbox-bui_arveyreajezmlqbqj2n5pydkju/node_modules/vite-plugin-pwa/dist/index.js";
import { viteMockServe } from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/vite-plugin-mock@3.0.2_esbuild@0.21.5_mockjs@1.1.0_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3_/node_modules/vite-plugin-mock/dist/index.mjs";
import UnoCSS from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/unocss@0.61.8_postcss@8.4.40_rollup@2.79.1_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3_/node_modules/unocss/dist/vite.mjs";
import postcsspxtoviewport8plugin from "file:///E:/my-project/mooc/my-practice/pk-font-vue3/node_modules/.pnpm/postcss-px-to-viewport-8-plugin@1.2.5/node_modules/postcss-px-to-viewport-8-plugin/lib/index.js";
var __vite_injected_original_import_meta_url = "file:///E:/my-project/mooc/my-practice/pk-font-vue3/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter({}),
    // Vue must be places after VueRouter()
    vue(),
    vueJsx(),
    // vueDevTools(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md`
      ],
      // global imports to register
      imports: [
        // presets
        "vue",
        VueRouterAutoImports,
        "@vueuse/core",
        "pinia"
      ],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: true,
      // Collapse same prefixes (camel-sensitive) of folders and components
      // to prevent duplication inside namespaced component name.
      // works when `directoryAsNamespace: true`
      collapseSamePrefixes: true,
      resolvers: [ElementPlusResolver(), IconsResolver({ prefix: "icon" })]
    }),
    Icons({
      autoInstall: true
    }),
    Layouts({
      layoutsDirs: "src/layouts",
      defaultLayout: "default"
    }),
    VitePWA({
      registerType: "autoUpdate"
      // 自更新
    }),
    viteMockServe({
      mockPath: "mock",
      enable: true
    }),
    UnoCSS()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          unitToConvert: "px",
          // * 要转化的单位，默认为px
          viewportWidth: (file) => {
            let num = 1920;
            if (file.indexOf("m_") !== -1) {
              num = 375;
            }
            return num;
          },
          unitPrecision: 5,
          // 单位转换后保留的精度
          propList: ["*"],
          // * 能转化为vw的属性列表
          viewportUnit: "vw",
          // * 希望使用的视口单位
          fontViewportUnit: "vw",
          // 字体使用的视口单位
          selectorBlackList: [],
          // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1,
          // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: true,
          // 媒体查询里的单位是否需要转换单位
          replace: true,
          //  是否直接更换属性值，而不添加备用属性
          exclude: [/node_modules\/ant-design-vue/],
          // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          include: [],
          // 如果设置了include，那将只有匹配到的文件才会被转换
          landscape: false,
          // * 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: "vw",
          // 横屏时使用的单位
          landscapeWidth: 1024
          // 横屏时使用的视口宽度
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxteS1wcm9qZWN0XFxcXG1vb2NcXFxcbXktcHJhY3RpY2VcXFxccGstZm9udC12dWUzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxteS1wcm9qZWN0XFxcXG1vb2NcXFxcbXktcHJhY3RpY2VcXFxccGstZm9udC12dWUzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9teS1wcm9qZWN0L21vb2MvbXktcHJhY3RpY2UvcGstZm9udC12dWUzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCB7IFZ1ZVJvdXRlckF1dG9JbXBvcnRzIH0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBzcmMvY29tcG9uZW50cyBcdTRFMEJcdTc2ODRcdTdFQzRcdTRFRjZcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXHJcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcclxuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcbmltcG9ydCBwb3N0Y3NzcHh0b3ZpZXdwb3J0OHBsdWdpbiBmcm9tICdwb3N0Y3NzLXB4LXRvLXZpZXdwb3J0LTgtcGx1Z2luJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBWdWVSb3V0ZXIoe30pLFxyXG4gICAgLy8gVnVlIG11c3QgYmUgcGxhY2VzIGFmdGVyIFZ1ZVJvdXRlcigpXHJcbiAgICB2dWUoKSxcclxuICAgIHZ1ZUpzeCgpLFxyXG4gICAgLy8gdnVlRGV2VG9vbHMoKSxcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAvLyB0YXJnZXRzIHRvIHRyYW5zZm9ybVxyXG4gICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgL1xcLlt0al1zeD8kLywgLy8gLnRzLCAudHN4LCAuanMsIC5qc3hcclxuICAgICAgICAvXFwudnVlJC8sXHJcbiAgICAgICAgL1xcLnZ1ZVxcP3Z1ZS8sIC8vIC52dWVcclxuICAgICAgICAvXFwubWQkLyAvLyAubWRgXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIGdsb2JhbCBpbXBvcnRzIHRvIHJlZ2lzdGVyXHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAvLyBwcmVzZXRzXHJcbiAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXHJcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXHJcbiAgICAgICAgJ3BpbmlhJ1xyXG4gICAgICBdLFxyXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAvLyBBbGxvdyBzdWJkaXJlY3RvcmllcyBhcyBuYW1lc3BhY2UgcHJlZml4IGZvciBjb21wb25lbnRzLlxyXG4gICAgICBkaXJlY3RvcnlBc05hbWVzcGFjZTogdHJ1ZSxcclxuICAgICAgLy8gQ29sbGFwc2Ugc2FtZSBwcmVmaXhlcyAoY2FtZWwtc2Vuc2l0aXZlKSBvZiBmb2xkZXJzIGFuZCBjb21wb25lbnRzXHJcbiAgICAgIC8vIHRvIHByZXZlbnQgZHVwbGljYXRpb24gaW5zaWRlIG5hbWVzcGFjZWQgY29tcG9uZW50IG5hbWUuXHJcbiAgICAgIC8vIHdvcmtzIHdoZW4gYGRpcmVjdG9yeUFzTmFtZXNwYWNlOiB0cnVlYFxyXG4gICAgICBjb2xsYXBzZVNhbWVQcmVmaXhlczogdHJ1ZSxcclxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpLCBJY29uc1Jlc29sdmVyKHsgcHJlZml4OiAnaWNvbicgfSldXHJcbiAgICB9KSxcclxuICAgIEljb25zKHtcclxuICAgICAgYXV0b0luc3RhbGw6IHRydWVcclxuICAgIH0pLFxyXG4gICAgTGF5b3V0cyh7XHJcbiAgICAgIGxheW91dHNEaXJzOiAnc3JjL2xheW91dHMnLFxyXG4gICAgICBkZWZhdWx0TGF5b3V0OiAnZGVmYXVsdCdcclxuICAgIH0pLFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnIC8vIFx1ODFFQVx1NjZGNFx1NjVCMFxyXG4gICAgfSksXHJcbiAgICB2aXRlTW9ja1NlcnZlKHtcclxuICAgICAgbW9ja1BhdGg6ICdtb2NrJyxcclxuICAgICAgZW5hYmxlOiB0cnVlXHJcbiAgICB9KSxcclxuICAgIFVub0NTUygpXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwb3N0Y3NzOiB7XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBwb3N0Y3NzcHh0b3ZpZXdwb3J0OHBsdWdpbih7XHJcbiAgICAgICAgICB1bml0VG9Db252ZXJ0OiAncHgnLCAvLyAqIFx1ODk4MVx1OEY2Q1x1NTMxNlx1NzY4NFx1NTM1NVx1NEY0RFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQXB4XHJcbiAgICAgICAgICB2aWV3cG9ydFdpZHRoOiAoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gMTkyMFxyXG4gICAgICAgICAgICBpZiAoZmlsZS5pbmRleE9mKCdtXycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgIG51bSA9IDM3NVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudW1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB1bml0UHJlY2lzaW9uOiA1LCAvLyBcdTUzNTVcdTRGNERcdThGNkNcdTYzNjJcdTU0MEVcdTRGRERcdTc1NTlcdTc2ODRcdTdDQkVcdTVFQTZcclxuICAgICAgICAgIHByb3BMaXN0OiBbJyonXSwgLy8gKiBcdTgwRkRcdThGNkNcdTUzMTZcdTRFM0F2d1x1NzY4NFx1NUM1RVx1NjAyN1x1NTIxN1x1ODg2OFxyXG4gICAgICAgICAgdmlld3BvcnRVbml0OiAndncnLCAvLyAqIFx1NUUwQ1x1NjcxQlx1NEY3Rlx1NzUyOFx1NzY4NFx1ODlDNlx1NTNFM1x1NTM1NVx1NEY0RFxyXG4gICAgICAgICAgZm9udFZpZXdwb3J0VW5pdDogJ3Z3JywgLy8gXHU1QjU3XHU0RjUzXHU0RjdGXHU3NTI4XHU3Njg0XHU4OUM2XHU1M0UzXHU1MzU1XHU0RjREXHJcbiAgICAgICAgICBzZWxlY3RvckJsYWNrTGlzdDogW10sIC8vIFx1OTcwMFx1ODk4MVx1NUZGRFx1NzU2NVx1NzY4NENTU1x1OTAwOVx1NjJFOVx1NTY2OFx1RkYwQ1x1NEUwRFx1NEYxQVx1OEY2Q1x1NEUzQVx1ODlDNlx1NTNFM1x1NTM1NVx1NEY0RFx1RkYwQ1x1NEY3Rlx1NzUyOFx1NTM5Rlx1NjcwOVx1NzY4NHB4XHU3QjQ5XHU1MzU1XHU0RjREXHUzMDAyXHJcbiAgICAgICAgICBtaW5QaXhlbFZhbHVlOiAxLCAvLyBcdThCQkVcdTdGNkVcdTY3MDBcdTVDMEZcdTc2ODRcdThGNkNcdTYzNjJcdTY1NzBcdTUwM0NcdUZGMENcdTU5ODJcdTY3OUNcdTRFM0ExXHU3Njg0XHU4QkREXHVGRjBDXHU1M0VBXHU2NzA5XHU1OTI3XHU0RThFMVx1NzY4NFx1NTAzQ1x1NEYxQVx1ODhBQlx1OEY2Q1x1NjM2MlxyXG4gICAgICAgICAgbWVkaWFRdWVyeTogdHJ1ZSwgLy8gXHU1QTkyXHU0RjUzXHU2N0U1XHU4QkUyXHU5MUNDXHU3Njg0XHU1MzU1XHU0RjREXHU2NjJGXHU1NDI2XHU5NzAwXHU4OTgxXHU4RjZDXHU2MzYyXHU1MzU1XHU0RjREXHJcbiAgICAgICAgICByZXBsYWNlOiB0cnVlLCAvLyAgXHU2NjJGXHU1NDI2XHU3NkY0XHU2M0E1XHU2NkY0XHU2MzYyXHU1QzVFXHU2MDI3XHU1MDNDXHVGRjBDXHU4MDBDXHU0RTBEXHU2REZCXHU1MkEwXHU1OTA3XHU3NTI4XHU1QzVFXHU2MDI3XHJcbiAgICAgICAgICBleGNsdWRlOiBbL25vZGVfbW9kdWxlc1xcL2FudC1kZXNpZ24tdnVlL10sIC8vIFx1NUZGRFx1NzU2NVx1NjdEMFx1NEU5Qlx1NjU4N1x1NEVGNlx1NTkzOVx1NEUwQlx1NzY4NFx1NjU4N1x1NEVGNlx1NjIxNlx1NzI3OVx1NUI5QVx1NjU4N1x1NEVGNlx1RkYwQ1x1NEY4Qlx1NTk4MiAnbm9kZV9tb2R1bGVzJyBcdTRFMEJcdTc2ODRcdTY1ODdcdTRFRjZcclxuICAgICAgICAgIGluY2x1ZGU6IFtdLCAvLyBcdTU5ODJcdTY3OUNcdThCQkVcdTdGNkVcdTRFODZpbmNsdWRlXHVGRjBDXHU5MEEzXHU1QzA2XHU1M0VBXHU2NzA5XHU1MzM5XHU5MTREXHU1MjMwXHU3Njg0XHU2NTg3XHU0RUY2XHU2MjREXHU0RjFBXHU4OEFCXHU4RjZDXHU2MzYyXHJcbiAgICAgICAgICBsYW5kc2NhcGU6IGZhbHNlLCAvLyAqIFx1NjYyRlx1NTQyNlx1NkRGQlx1NTJBMFx1NjgzOVx1NjM2RSBsYW5kc2NhcGVXaWR0aCBcdTc1MUZcdTYyMTBcdTc2ODRcdTVBOTJcdTRGNTNcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYgQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG4gICAgICAgICAgbGFuZHNjYXBlVW5pdDogJ3Z3JywgLy8gXHU2QTJBXHU1QzRGXHU2NUY2XHU0RjdGXHU3NTI4XHU3Njg0XHU1MzU1XHU0RjREXHJcbiAgICAgICAgICBsYW5kc2NhcGVXaWR0aDogMTAyNCAvLyBcdTZBMkFcdTVDNEZcdTY1RjZcdTRGN0ZcdTc1MjhcdTc2ODRcdTg5QzZcdTUzRTNcdTVCQkRcdTVFQTZcclxuICAgICAgICB9KVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZULFNBQVMsZUFBZSxXQUFXO0FBQ2hXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGFBQWE7QUFDcEIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdDQUFnQztBQWZnSyxJQUFNLDJDQUEyQztBQWtCeFAsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsVUFBVSxDQUFDLENBQUM7QUFBQTtBQUFBLElBRVosSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBO0FBQUEsSUFFUCxXQUFXO0FBQUE7QUFBQSxNQUVULFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxTQUFTO0FBQUE7QUFBQSxRQUVQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBO0FBQUEsTUFFVCxzQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUl0QixzQkFBc0I7QUFBQSxNQUN0QixXQUFXLENBQUMsb0JBQW9CLEdBQUcsY0FBYyxFQUFFLFFBQVEsT0FBTyxDQUFDLENBQUM7QUFBQSxJQUN0RSxDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsSUFDakIsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBO0FBQUEsSUFDaEIsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCwyQkFBMkI7QUFBQSxVQUN6QixlQUFlO0FBQUE7QUFBQSxVQUNmLGVBQWUsQ0FBQyxTQUFTO0FBQ3ZCLGdCQUFJLE1BQU07QUFDVixnQkFBSSxLQUFLLFFBQVEsSUFBSSxNQUFNLElBQUk7QUFDN0Isb0JBQU07QUFBQSxZQUNSO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsVUFDQSxlQUFlO0FBQUE7QUFBQSxVQUNmLFVBQVUsQ0FBQyxHQUFHO0FBQUE7QUFBQSxVQUNkLGNBQWM7QUFBQTtBQUFBLFVBQ2Qsa0JBQWtCO0FBQUE7QUFBQSxVQUNsQixtQkFBbUIsQ0FBQztBQUFBO0FBQUEsVUFDcEIsZUFBZTtBQUFBO0FBQUEsVUFDZixZQUFZO0FBQUE7QUFBQSxVQUNaLFNBQVM7QUFBQTtBQUFBLFVBQ1QsU0FBUyxDQUFDLDhCQUE4QjtBQUFBO0FBQUEsVUFDeEMsU0FBUyxDQUFDO0FBQUE7QUFBQSxVQUNWLFdBQVc7QUFBQTtBQUFBLFVBQ1gsZUFBZTtBQUFBO0FBQUEsVUFDZixnQkFBZ0I7QUFBQTtBQUFBLFFBQ2xCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
