<script setup>
import MenuIcon from '../Icons/MenuIcon.vue'
import ShareIcon from '../Icons/ShareIcon.vue'
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <BaseButton class="gap-2 p-3.5 rounded-lg">
      <MenuIcon />
    </BaseButton>
    <BaseButton class="gap-2 p-3.5 rounded-lg">
      <ShareIcon />
    </BaseButton>
  </div>
</template>
