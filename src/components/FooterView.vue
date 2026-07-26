<script setup>
import { inject } from 'vue'
import ProfileImage from './ProfileImage.vue'

const menuItems = inject('menuItems')
const socialMedia = inject('socialMedia')
</script>

<template>
  <div
    class="w-full relative overflow-hidden bg-[url('src/assets/images/bg-footer.png')] bg-center bg-white-bg lg:border lg:border-main-border lg:rounded-xl"
  >
    <div class="flex flex-col justify-center items-center w-full gap-8 px-6 pb-6 pt-12">
      <div class="flex flex-col justify-center items-center w-full gap-8 max-w-[622px]">
        <div class="flex flex-col justify-center items-center gap-6 w-full">
          <ProfileImage />

          <div class="flex flex-col justify-center items-center gap-2 w-full">
            <div class="flex justify-center items-center gap-3">
              <p class="text-base lg:text-lg lg:leading-[150%] leading-8 font-bold text-title-text">
                علیرضا نظامی
              </p>
              <div class="w-0.5 h-4 border border-main-border"></div>
              <p class="text-gray-subtitle mobile-text lg:desktop-text">فرانت اند دولوپر</p>
            </div>

            <p class="text-gray-subtitle mobile-text lg:desktop-text text-center">
              با استفاده از Vue.js، Nuxt.js و تکنولوژی‌های مدرن وب، ایده‌ها را به محصولاتی تعاملی،
              بهینه و کاربرمحور تبدیل می‌کنم.
            </p>
          </div>
        </div>

        <div class="flex justify-center items-center flex-wrap gap-3 w-full">
          <div
            v-for="item in menuItems"
            :key="item.id"
            class="flex justify-center items-center gap-3 cursor-pointer"
          >
            <PlusIcon class="text-main-text opacity-25" />
            <p class="mobile-text font-normal text-main-text">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col justify-center lg:justify-between lg:flex-row-reverse items-center w-full rounded-lg lg:rounded-xl border border-main-border gap-2.5 py-4 pl-6 lg:pl-10 pr-6 bg-second-white"
      >
        <!-- //// social media  -->
        <div class="flex flex-row-reverse justify-center items-center w-full max-w-[196px] gap-3">
          <div v-for="media in socialMedia" :key="media.name" class="w-full">
            <a :href="media.link" target="_blank" rel="noopener noreferrer">
              <BaseButton
                class="gap-[9.09px] px-[14.55px] py-2.5 rounded-sm text-second-text bg-white-bg hover:bg-second-white hover:text-orange-main transition-colors duration-150 ease-in-out border-[1.25px]"
              >
                <component :is="media.icon" class="w-5 h-5" />
              </BaseButton>
            </a>
          </div>
        </div>

        <p class="mobile-text text-gray-subtitle text-center">
          تمامی حقوق©  برای علیرضا نظامی محفوظ است.
        </p>
      </div>
    </div>
  </div>
</template>
