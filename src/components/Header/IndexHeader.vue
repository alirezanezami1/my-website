<script setup>
import DesktopHeader from './DesktopHeader.vue'
import MobileHeader from './MobileHeader.vue'
</script>

<template>
  <div class="flex w-full">
    <MobileHeader class="block lg:hidden" />
    <DesktopHeader class="hidden lg:block" />
  </div>
</template>
