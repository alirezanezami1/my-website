<script setup>
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

import DesktopHeader from './DesktopHeader.vue'
import MobileHeader from './MobileHeader.vue'

const { width } = useWindowSize()

const currentComponent = computed(() => {
  return width.value >= 1024 ? DesktopHeader : MobileHeader
})
</script>

<template>
  <div class="flex w-full">
    <component :is="currentComponent"></component>
  </div>
</template>
