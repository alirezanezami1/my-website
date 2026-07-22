<script setup>
import { ref, inject } from 'vue'
import MenuIcon from '../Icons/MenuIcon.vue'
import ShareIcon from '../Icons/ShareIcon.vue'
import ProfileImage from '../ProfileImage.vue'
import BaseButton from '../UI/BaseButton.vue'
import PlusIcon from '../Icons/PlusIcon.vue'
import CloseIcon from '../Icons/CloseIcon.vue'
import CopyCvModal from '../UI/CopyCvModal.vue'

const openMenu = ref(false)
const showCopyModal = ref(false)

const menuItems = inject('menuItems')
const socialMedia = inject('socialMedia')
const currentMenu = inject('currentMenu')

const cvLink = inject('profile')

function changeActiveMenu(id) {
  currentMenu.value = id
}

async function CopyCvLink() {
  try {
    await navigator.clipboard.writeText(cvLink.value?.resume_file.url)
    showCopyModal.value = true
    setTimeout(() => {
      showCopyModal.value = false
    }, 1500)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <BaseButton class="gap-2 p-3.5 rounded-lg" @click="openMenu = true">
      <MenuIcon />
    </BaseButton>
    <ProfileImage />
    <BaseButton class="gap-2 p-3.5 rounded-lg" @click="CopyCvLink">
      <ShareIcon />
    </BaseButton>
  </div>

  <Teleport to="body">
    <Transition
      enter-active-class="animate__animated animate__fadeInDown animate__faster"
      leave-active-class="animate__animated animate__fadeOutUp animate__faster"
    >
      <div class="w-full fixed inset-0 z-50" v-if="openMenu">
        <div class="w-full h-full fixed inset-0 bg-black/30 z-40"></div>
        <div class="w-full fixed inset-0 z-50 text-white flex flex-col justify-start items-center">
          <div
            class="w-full flex flex-col justify-center items-center gap-2.5 rounded-b-xl px-6 pb-6 pt-3 bg-white-bg"
          >
            <div
              class="w-full flex flex-col justify-center items-center rounded-lg gap-10 p-4 border border-main-border"
            >
              <!-- /// menu items  -->
              <div class="w-full flex flex-col justify-center items-center gap-6">
                <ProfileImage />

                <div class="flex flex-col justify-center items-center gap-3 w-full">
                  <div
                    v-for="item in menuItems"
                    :key="item.id"
                    class="w-full"
                    @click="changeActiveMenu(item.id)"
                  >
                    <BaseButton
                      class="w-full rounded-lg gap-3"
                      :class="currentMenu == item.id ? 'border-orange-main' : ''"
                    >
                      <PlusIcon
                        :class="
                          currentMenu == item.id
                            ? 'text-orange-main opacity-100'
                            : 'text-main-text opacity-25'
                        "
                      />
                      <p
                        class="text-sm leading-7"
                        :class="currentMenu == item.id ? 'text-orange-main' : 'text-main-text'"
                      >
                        {{ item.title }}
                      </p>
                    </BaseButton>
                  </div>
                </div>
              </div>

              <!-- /// social media  -->
              <div class="flex flex-row-reverse justify-center items-center w-full gap-3">
                <div v-for="media in socialMedia" :key="media.name" class="w-full">
                  <a :href="media.link" target="_blank" rel="noopener noreferrer">
                    <BaseButton
                      class="gap-2.5 px-4 py-[11px] rounded-sm text-second-text hover:bg-second-white hover:text-orange-main transition-colors duration-150 ease-in-out"
                    >
                      <component :is="media.icon" />
                    </BaseButton>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            @click="openMenu = false"
            class="flex justify-center items-center rounded-full absolute bottom-14 border border-main-border bg-white-bg px-6 py-2.5"
          >
            <CloseIcon class="text-orange-second" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- //// modal - copy cv  -->

  <CopyCvModal :showCopyModal="showCopyModal" />
</template>
