// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/@vitejs+plugin-vue@5.1.1_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.0_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3__vue@3.4.34_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { VueRouterAutoImports } from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/unplugin-vue-router@0.10.2_rollup@2.79.1_vue-router@4.4.0_vue@3.4.34_typescript@5.5.4___vue@3.4.34_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/index.js";
import VueRouter from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/unplugin-vue-router@0.10.2_rollup@2.79.1_vue-router@4.4.0_vue@3.4.34_typescript@5.5.4___vue@3.4.34_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/vite.js";
import AutoImport from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@10.11.0_vue@3.4.34_typescript@5.5.4___rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/unplugin-vue-components@0.27.3_@babel+parser@7.25.0_rollup@2.79.1_vue@3.4.34_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/unplugin-vue-components@0.27.3_@babel+parser@7.25.0_rollup@2.79.1_vue@3.4.34_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import Icons from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/unplugin-icons@0.19.1_@vue+compiler-sfc@3.4.34/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/unplugin-icons@0.19.1_@vue+compiler-sfc@3.4.34/node_modules/unplugin-icons/dist/resolver.js";
import Layouts from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3__vue_ruxp5l4hwavlufurqao3pezlbe/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import { VitePWA } from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/vite-plugin-pwa@0.20.1_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3__workbox-bui_arveyreajezmlqbqj2n5pydkju/node_modules/vite-plugin-pwa/dist/index.js";
import { viteMockServe } from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/vite-plugin-mock@3.0.2_esbuild@0.21.5_mockjs@1.1.0_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3_/node_modules/vite-plugin-mock/dist/index.mjs";
import UnoCSS from "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/node_modules/.pnpm/unocss@0.61.8_postcss@8.4.40_rollup@2.79.1_vite@5.3.5_@types+node@20.14.13_sass@1.77.8_terser@5.31.3_/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/my-project/mooc/my-practice/pk-front-vue3-bak/vite.config.ts";
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
        "@vueuse/core"
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
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxteS1wcm9qZWN0XFxcXG1vb2NcXFxcbXktcHJhY3RpY2VcXFxccGstZnJvbnQtdnVlMy1iYWtcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXG15LXByb2plY3RcXFxcbW9vY1xcXFxteS1wcmFjdGljZVxcXFxway1mcm9udC12dWUzLWJha1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovbXktcHJvamVjdC9tb29jL215LXByYWN0aWNlL3BrLWZyb250LXZ1ZTMtYmFrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCB7IFZ1ZVJvdXRlckF1dG9JbXBvcnRzIH0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBzcmMvY29tcG9uZW50cyBcdTRFMEJcdTc2ODRcdTdFQzRcdTRFRjZcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXHJcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcclxuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIFZ1ZVJvdXRlcih7fSksXHJcbiAgICAvLyBWdWUgbXVzdCBiZSBwbGFjZXMgYWZ0ZXIgVnVlUm91dGVyKClcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlSnN4KCksXHJcbiAgICAvLyB2dWVEZXZUb29scygpLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIC8vIHRhcmdldHMgdG8gdHJhbnNmb3JtXHJcbiAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxyXG4gICAgICAgIC9cXC52dWUkLyxcclxuICAgICAgICAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxyXG4gICAgICAgIC9cXC5tZCQvIC8vIC5tZGBcclxuICAgICAgXSxcclxuICAgICAgLy8gZ2xvYmFsIGltcG9ydHMgdG8gcmVnaXN0ZXJcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgIC8vIHByZXNldHNcclxuICAgICAgICAndnVlJyxcclxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcclxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJ1xyXG4gICAgICBdLFxyXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAvLyBBbGxvdyBzdWJkaXJlY3RvcmllcyBhcyBuYW1lc3BhY2UgcHJlZml4IGZvciBjb21wb25lbnRzLlxyXG4gICAgICBkaXJlY3RvcnlBc05hbWVzcGFjZTogdHJ1ZSxcclxuICAgICAgLy8gQ29sbGFwc2Ugc2FtZSBwcmVmaXhlcyAoY2FtZWwtc2Vuc2l0aXZlKSBvZiBmb2xkZXJzIGFuZCBjb21wb25lbnRzXHJcbiAgICAgIC8vIHRvIHByZXZlbnQgZHVwbGljYXRpb24gaW5zaWRlIG5hbWVzcGFjZWQgY29tcG9uZW50IG5hbWUuXHJcbiAgICAgIC8vIHdvcmtzIHdoZW4gYGRpcmVjdG9yeUFzTmFtZXNwYWNlOiB0cnVlYFxyXG4gICAgICBjb2xsYXBzZVNhbWVQcmVmaXhlczogdHJ1ZSxcclxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpLCBJY29uc1Jlc29sdmVyKHsgcHJlZml4OiAnaWNvbicgfSldXHJcbiAgICB9KSxcclxuICAgIEljb25zKHtcclxuICAgICAgYXV0b0luc3RhbGw6IHRydWVcclxuICAgIH0pLFxyXG4gICAgTGF5b3V0cyh7XHJcbiAgICAgIGxheW91dHNEaXJzOiAnc3JjL2xheW91dHMnLFxyXG4gICAgICBkZWZhdWx0TGF5b3V0OiAnZGVmYXVsdCdcclxuICAgIH0pLFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnIC8vIFx1ODFFQVx1NjZGNFx1NjVCMFxyXG4gICAgfSksXHJcbiAgICB2aXRlTW9ja1NlcnZlKHtcclxuICAgICAgbW9ja1BhdGg6ICdtb2NrJyxcclxuICAgICAgZW5hYmxlOiB0cnVlXHJcbiAgICB9KSxcclxuICAgIFVub0NTUygpXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VSxTQUFTLGVBQWUsV0FBVztBQUMvVyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sZUFBZTtBQUN0QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsZUFBZTtBQUN4QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFlBQVk7QUFkOEwsSUFBTSwyQ0FBMkM7QUFpQmxRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFVBQVUsQ0FBQyxDQUFDO0FBQUE7QUFBQSxJQUVaLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQTtBQUFBLElBRVAsV0FBVztBQUFBO0FBQUEsTUFFVCxTQUFTO0FBQUEsUUFDUDtBQUFBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUEsU0FBUztBQUFBO0FBQUEsUUFFUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBO0FBQUEsTUFFVCxzQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUl0QixzQkFBc0I7QUFBQSxNQUN0QixXQUFXLENBQUMsb0JBQW9CLEdBQUcsY0FBYyxFQUFFLFFBQVEsT0FBTyxDQUFDLENBQUM7QUFBQSxJQUN0RSxDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsSUFDakIsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBO0FBQUEsSUFDaEIsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
