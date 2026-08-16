<script setup>
import { inject } from 'vue'
import ShareIcon from './Icons/ShareIcon.vue'
import CopyCvModal from './UI/CopyCvModal.vue'
import documentIcon from './Icons/documentIcon.vue'
import { useCopyLink } from '@/composables/copyLink.js'

const { showCopyModal, CopyCvLink } = useCopyLink()

const cvLink = inject('profile')
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full gap-12">
    <div class="flex justify-between items-start w-full">
      <div class="flex flex-col justify-start items-start gap-8 max-w-[429px]">
        <div class="flex flex-col justify-start items-start gap-3 w-full">
          <div class="flex flex-col justify-start items-start">
            <p class="text-xs leading-6 lg:mobile-text text-gray-subtitle">سلام 👋 من</p>
            <h1
              class="text-[44px] leading-14 lg:text-[56px] lg:leading-[140%] font-normal text-title-text"
            >
              علیرضام
            </h1>
          </div>
          <p
            class="text-gray-subtitle text-lg leading-8 lg:text-2xl font-normal text-right lg:leading-[150%]"
          >
            <span class="text-title-text">توسعه‌دهنده فرانت‌اند</span>، عاشق رابط‌های کاربری، معماری
            تمیز و تجربه‌های روان
          </p>
        </div>

        <!-- //// btns  -->
        <div class="flex justify-center max-[345px]:flex-col items-center gap-4">
          <button
            class="flex justify-center items-center relative py-2 px-6 lg:px-8 gap-2 cursor-pointer rounded-lg bg-orange-main text-white shadow-btn"
          >
            <div class="flex justify-center items-center gap-2.5 w-full">
              <p class="mobile-text font-semibold">پروژه ها</p>
              <PlusIcon strokeWidth="1.5" />
            </div>
            <img src="../assets/images/Rectangle.png" class="absolute inset-0" />
          </button>
          <div
            class="flex flex-col justify-center items-center gap-2.5 py-2.5 px-3 lg:pr-4 lg:pl-5"
          >
            <button class="flex justify-center items-center gap-2.5 lg:gap-[9px]">
              <documentIcon />
              <a
                :href="cvLink?.resume_file?.url"
                target="_blank"
                class="mobile-text font-semibold underline"
                >مشاهده رزومه</a
              >
            </button>
          </div>
        </div>
      </div>

      <BaseButton
        class="hidden lg:block gap-2 p-3.5 rounded-lg"
        @click="CopyCvLink(cvLink?.resume_file?.url)"
      >
        <ShareIcon />
      </BaseButton>
    </div>

    <FrameIconPlus />
  </div>

  <!-- /// modal  -->
  <CopyCvModal :showCopyModal="showCopyModal" />
</template>
