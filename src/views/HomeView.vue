<script setup>
import { ref, provide } from 'vue'
import BannerIntroduce from '@/components/BannerIntroduce.vue'
import Header from '@/components/Header/IndexHeader.vue'

//// icons
import GithubSvg from '@/components/Icons/GithubSvg.vue'
import LinkedinSvg from '@/components/Icons/LinkedinSvg.vue'
import InstagramSvg from '@/components/Icons/InstagramSvg.vue'
import TelegramSvg from '@/components/Icons/TelegramSvg.vue'

const menuItems = ref([
  { id: 'AboutMe', title: 'درباره من' },
  { id: 'MyProjects', title: 'پروژه ها' },
  { id: 'MySkills', title: 'مهارت ها' },
  { id: 'MyExperiences', title: 'تجربیات من' },
  { id: 'CallMe', title: 'تماس با من' },
])

const socialMedia = ref([
  { name: 'گیتهاب', icon: GithubSvg, link: 'https://github.com/alirezanezami1' },
  { name: 'لینکدین', icon: LinkedinSvg, link: 'https://www.linkedin.com/in/alirezanezami1' },
  { name: 'اینستاگرام', icon: InstagramSvg, link: 'https://www.linkedin.com/in/alirezanezami1' },
  { name: 'تلگرام', icon: TelegramSvg, link: 'https://www.linkedin.com/in/alirezanezami1' },
])

const currentMenu = ref('AboutMe')

provide('socialMedia', socialMedia.value)
provide('menuItems', menuItems.value)
provide('currentMenu', currentMenu)
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
