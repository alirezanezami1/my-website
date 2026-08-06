<script setup>
import { ref, provide, markRaw, onMounted } from 'vue'
import BannerIntroduce from '@/components/BannerIntroduce.vue'
import Header from '@/components/Header/IndexHeader.vue'
import Footer from '@/components/FooterView.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import IntroduceView from '@/components/IntroduceView.vue'

import { getProfileData } from '@/Services/api.js'

//// icons
import GithubSvg from '@/components/Icons/GithubSvg.vue'
import LinkedinSvg from '@/components/Icons/LinkedinSvg.vue'
import InstagramSvg from '@/components/Icons/InstagramSvg.vue'
import TelegramSvg from '@/components/Icons/TelegramSvg.vue'

const profile = ref(null)
const loading = ref(true)

const menuItems = ref([
  { id: 'AboutMe', title: 'درباره من' },
  { id: 'MyProjects', title: 'پروژه ها' },
  { id: 'MySkills', title: 'مهارت ها' },
  { id: 'MyExperiences', title: 'تجربیات من' },
  { id: 'CallMe', title: 'تماس با من' },
])

const socialMedia = ref([
  { name: 'گیتهاب', icon: markRaw(GithubSvg), link: 'https://github.com/alirezanezami1' },
  {
    name: 'لینکدین',
    icon: markRaw(LinkedinSvg),
    link: 'https://www.linkedin.com/in/alirezanezami1',
  },
  {
    name: 'اینستاگرام',
    icon: markRaw(InstagramSvg),
    link: 'https://www.linkedin.com/in/alirezanezami1',
  },
  {
    name: 'تلگرام',
    icon: markRaw(TelegramSvg),
    link: 'https://www.linkedin.com/in/alirezanezami1',
  },
])

const currentMenu = ref('AboutMe')

provide('socialMedia', socialMedia.value)
provide('menuItems', menuItems.value)
provide('currentMenu', currentMenu)

provide('profile', profile)
provide('loading', loading)

onMounted(async () => {
  try {
    profile.value = await getProfileData()
    console.log('دیتای دریافتی:', profile.value)
  } catch (error) {
    console.error('خطا در دریافت اطلاعات:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div
    class="w-full mx-auto max-w-7xl gap-4 lg:gap-10 lg:px-10 lg:pt-9 lg:pb-11 flex flex-col justify-start items-center"
  >
    <div class="w-full flex flex-col justify-start items-center gap-0 lg:gap-[13px]">
      <!-- //// banner  -->
      <BannerIntroduce />
      <div
        class="w-full flex flex-col justify-start items-center px-6 pt-6 pb-8 lg:pb-16 bg-white-bg lg:border lg:border-main-border lg:rounded-xl"
      >
        <Header />

        <div
          class="grid justify-center items-start w-full grid-cols-1 lg:gap-16 lg:grid-cols-[196px_612px] p-6 pb-8 lg:pt-12 lg:pb-16"
        >
          <!-- //// sidebar  -->
          <div class="flex flex-col gap-12 justify-center items-center">
            <ProfileImage />

            <div class="flex flex-col justify-center items-center gap-4 w-full">
              <p class="desktop-text text-gray-subtitle">همراه من باشید در :</p>
              <div class="flex flex-col justify-center items-center gap-3 w-full">
                <a
                  v-for="media in socialMedia"
                  :key="media.name"
                  :href="media.link"
                  target="_blank"
                  class="w-full"
                  rel="noopener noreferrer"
                >
                  <BaseButton
                    class="w-full gap-2.5 py-[11px] px-4 rounded-lg text-second-text bg-white-bg group hover:bg-second-white hover:text-orange-main transition-colors duration-150 ease-in-out border-[1.25px]"
                    flexing="flex justify-between items-center"
                  >
                    <p class="mobile-text text-gray-subtitle group-hover:text-title-text">
                      {{ media.name }}
                    </p>
                    <component :is="media.icon" class="w-5 h-5" />
                  </BaseButton>
                </a>
              </div>
            </div>
          </div>

          <!-- //// main  -->
          <div class="flex flex-col justify-start items-center w-full gap-10">
            <IntroduceView />
          </div>
        </div>
      </div>
    </div>

    <!-- //// footer  -->
    <Footer />
  </div>
</template>
