<template>
  <div>id: {{ params.id }}</div>
</template>

<script setup lang="ts">
import { userParams } from '@/hooks'

type Params = {
  id: string
}

const params = userParams<Params>()
</script>

<style scoped></style>
