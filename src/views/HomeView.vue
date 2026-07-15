<script setup>
import BannerIntroduce from '@/components/BannerIntroduce.vue'
import Header from '@/components/Header/IndexHeader.vue'
</script>

<template>
  <div
    class="w-full mx-auto max-w-7xl bg-red-300 gap-4 lg:gap-10 lg:px-10 lg:pt-9 lg:pb-11 flex flex-col justify-start items-center"
  >
    <div class="w-full flex flex-col justify-start items-center gap-0 lg:gap-[13px]">
      <!-- //// banner  -->
      <BannerIntroduce />
      <div
        class="w-full flex flex-col justify-start items-center px-6 pt-6 pb-8 lg:pb-16 bg-white-bg lg:border lg:border-main-border lg:rounded-xl"
      >
        <Header />
      </div>
    </div>

    <!-- //// footer  -->
  </div>
</template>
