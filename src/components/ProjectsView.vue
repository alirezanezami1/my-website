<script setup>
import { ref, inject } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

const swiperInstance = ref(null)

const projectPortfolio = inject('projectPortfolio')

function onSwiper(swiper) {
  swiperInstance.value = swiper
}

function formatNumber(index) {
  return String(index + 1).padStart(2, '0')
}
</script>

<template>
  <div class="flex flex-col justify-center items-start gap-4 lg:gap-6 w-full">
    <div class="flex justify-start w-full items-center">
      <TitleButton class="gap-2.5 py-1 px-3 lg:px-4">
        <p class="title-button-mobile lg:title-button-desktop text-title-text">پروژه ها</p>
      </TitleButton>
    </div>
    <Swiper @swiper="onSwiper" class="w-full">
      <SwiperSlide v-for="(project, index) in projectPortfolio" :key="project.id">
        <div class="flex flex-col justify-center items-center gap-4 w-full">
          <!-- ///// header  -->
          <div class="flex justify-center items-center gap-3 w-full">
            <div
              class="flex justify-center items-center border border-main-border px-[9px] py-[18px] rounded-lg gap-1 desktop-text2 text-orange-main"
            >
              {{ formatNumber(index) }}
            </div>

            <div class="flex flex-col justify-center items-start gap-2 w-full">
              <div class="flex justify-between items-center w-full">
                <p class="desktop-text2 text-title-text">{{ project.acf.project_name }}</p>
                <div
                  class="flex justify-center items-center gap-2.5 rounded-full border border-main-border px-4 py-1 title-button-mobile font-normal text-orange-main"
                >
                  <p>{{ project.acf.job_type }}</p>
                </div>
              </div>

              <div class="flex justify-start items-center gap-2 text-gray-subtitle mobile-text">
                <p>
                  {{ project.acf.job_title }}
                </p>
                <div class="border border-main-border h-3"></div>
                <p>
                  {{ project.acf.job_duration }}
                </p>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center items-center relative w-full h-[228px] lg:h-[396px] px-4 py-6 rounded-lg border border-main-border bg-second-white"
          >
            <img
              :src="project.acf.photo_gallery.project_screenshot[0][0].full_image_url"
              alt="project image"
              class="w-full h-full object-cover rounded-lg"
            />

            <div class="absolute bottom-3 px-3 flex justify-between items-center w-full">
              <div class="size-8 border-[1.6px] border-main-border bg-gray-bg rounded-lg">
                <img
                  :src="project.acf.company_logo"
                  alt="logo"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div
                class="flex justify-center items-center cursor-pointer border border-main-border px-2.5 py-4 rounded-lg gap-1 bg-white-bg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                >
                  <path
                    d="M0.534506 5.71467C0.488498 5.57639 0.488498 5.42694 0.534506 5.28867C1.45917 2.50667 4.08384 0.5 7.17717 0.5C10.2692 0.5 12.8925 2.50467 13.8192 5.28533C13.8658 5.42333 13.8658 5.57267 13.8192 5.71133C12.8952 8.49333 10.2705 10.5 7.17717 10.5C4.08517 10.5 1.46117 8.49533 0.534506 5.71467ZM9.17708 5.5C9.17708 6.03043 8.96637 6.53914 8.5913 6.91421C8.21622 7.28929 7.70752 7.5 7.17708 7.5C6.64665 7.5 6.13794 7.28929 5.76287 6.91421C5.3878 6.53914 5.17708 6.03043 5.17708 5.5C5.17708 4.96957 5.3878 4.46086 5.76287 4.08579C6.13794 3.71071 6.64665 3.5 7.17708 3.5C7.70752 3.5 8.21622 3.71071 8.5913 4.08579C8.96637 4.46086 9.17708 4.96957 9.17708 5.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#212121"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
