import type { RouteParams } from 'vue-router'

export function userParams<T extends RouteParams>() {
  const route = useRoute()
  return computed(() => route.params as T)
}
