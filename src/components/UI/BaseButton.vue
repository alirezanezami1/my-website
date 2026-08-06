<script setup>
const props = defineProps({
  flexing: {
    type: String,
    default: 'flex justify-center items-center',
  },
})
</script>

<template>
  <div class="border border-main-border cursor-pointer" :class="props.flexing">
    <slot />
  </div>
</template>
