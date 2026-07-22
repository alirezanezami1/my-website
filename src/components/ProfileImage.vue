<script setup>
import { inject } from 'vue'

const profile = inject('profile')
const loading = inject('loading')
</script>

<template>
  <div
    class="flex justify-center items-center w-[42px] h-[42px] rounded-[7px] border-[1.46px] border-white-border shadow-profile rotate-[8deg]"
  >
    <img
      v-show="!loading"
      :src="profile?.my_avatar.url"
      alt="profile"
      class="object-cover w-full h-full rounded-[7px]"
    />

    <div v-if="loading" class="absolute inset-0 animate-pulse">
      <div class="w-full h-full bg-gray-200"></div>
    </div>
  </div>
</template>
