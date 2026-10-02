<script setup>
import TitleButton from './UI/TitleButton.vue'
import documentIcon from './Icons/documentIcon.vue'
import LeftArrowIcon from './Icons/LeftArrowIcon.vue'
</script>

<template>
  <div
    class="flex flex-col lg:flex-row justify-start items-center w-full rounded-xl p-4 border border-main-border gap-4 lg:gap-[51px]"
  >
    <div class="flex flex-col justify-center items-start gap-4 w-full">
      <div class="flex justify-start w-full items-center">
        <TitleButton class="gap-2.5 py-1 px-4 lg:px-5">
          <p class="title-button-mobile lg:title-button-desktop text-title-text">ارتباط با من</p>
        </TitleButton>
      </div>
      <div class="flex flex-col justify-center items-start gap-1">
        <h3
          class="desktop-text font-semibold text-title-text lg:text-lg lg:font-semibold lg:leading-8"
        >
          هر پروژه خوب، با یک گفتگوی ساده شروع میشه
        </h3>
        <p class="mobile-text text-gray-subtitle lg:desktop-text">
          اگر دنبال یه توسعه‌دهنده فرانت‌اند برای پروژه بعدیت هستی، فقط کافیه یه پیام بدی
        </p>
      </div>
      <button class="flex justify-center items-center gap-2.5 py-2.5 cursor-pointer">
        <div class="flex justify-center items-center gap-[9px]">
          <documentIcon />
          <a href="" class="underline decoration-0 title-button-desktop text-title-text"
            >شروع همکاری</a
          >
          <LeftArrowIcon />
        </div>
      </button>
    </div>

    <div class="flex justify-center items-center w-full rounded-lg">
      <img
        src="../assets/images/contact-banner.jpg"
        alt="banner"
        class="w-full h-full object-center"
      />
    </div>
  </div>
</template>
