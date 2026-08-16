<script setup>
import { inject } from 'vue'
import TitleButton from './UI/TitleButton.vue'

const cvLink = inject('profile')
</script>

<template>
  <div class="flex flex-col justify-center items-start gap-4 lg:gap-6 w-full">
    <div class="flex justify-start w-full items-center">
      <TitleButton class="gap-2.5 py-1 px-3 lg:px-4">
        <p class="title-button-mobile lg:title-button-desktop text-title-text">درباره من</p>
      </TitleButton>
    </div>

    <!-- //// text  -->
    <div
      class="mobile-text lg:desktop-text text-gray-subtitle [&_strong]:text-title-text text-right"
      v-html="cvLink?.about_me_text"
    ></div>

    <div class="flex justify-start items-center flex-wrap gap-3 lg:gap-4">
      <TitleButton class="py-1 px-4 lg:px-6 gap-1">
        <p
          class="text-base leading-8 font-semibold after:text-lg lg:text-xl lg:font-bold lg:leading-[150%] after:content-['_+'] lg:after:text-2xl after:text-orange-main"
        >
          3
        </p>
        <p class="title-button-mobile lg:title-button-desktop text-gray-subtitle">سال سابقه</p>
      </TitleButton>
      <TitleButton class="py-1 px-4 lg:px-6 gap-1">
        <p
          class="text-base leading-8 font-semibold after:text-lg lg:text-xl lg:font-bold lg:leading-[150%] after:content-['_+'] lg:after:text-2xl after:text-orange-main"
        >
          10
        </p>
        <p class="title-button-mobile lg:title-button-desktop text-gray-subtitle">پروژه موفق</p>
      </TitleButton>
      <TitleButton class="py-1 px-4 lg:px-6 gap-1">
        <p
          class="text-base leading-8 font-semibold after:text-lg lg:text-xl lg:font-bold lg:leading-[150%] after:content-['_+'] lg:after:text-2xl after:text-orange-main"
        >
          10
        </p>
        <p class="title-button-mobile lg:title-button-desktop text-gray-subtitle">نظر ثبت شده</p>
      </TitleButton>
    </div>
  </div>
</template>
