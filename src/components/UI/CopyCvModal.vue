<script setup>
import CheckCircle from '../Icons/CheckCircle.vue'
defineProps(['showCopyModal'])
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="animate__animated animate__fadeInUp animate animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown animate__faster"
    >
      <div
        v-if="showCopyModal"
        class="absolute bottom-11 left-1/2 -translate-x-1/2 shadow-modal flex justify-center items-center gap-2.5 p-2 border border-main-border rounded-full"
      >
        <div class="flex justify-center items-center gap-2.5 py-1.5 px-8 bg-green-bg rounded-full">
          <div class="flex justify-center items-center gap-3">
            <CheckCircle class="text-green-txt" />
            <p class="text-sm font-semibold">لینک پورتفیلیو کپی شد</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
