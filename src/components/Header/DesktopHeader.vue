<script setup>
import { inject } from 'vue'
import PlusIcon from '../Icons/PlusIcon.vue'
const menuItems = inject('menuItems')
const currentMenu = inject('currentMenu')

function changeActiveMenu(id) {
  currentMenu.value = id
}
</script>
<template>
  <div
    class="flex justify-center items-center w-full border border-main-border gap-2.5 px-8 rounded-xl"
  >
    <div class="flex justify-center items-center gap-6 w-full">
      <div
        v-for="item in menuItems"
        :key="item.id"
        class="flex justify-center items-center gap-3 cursor-pointer py-5"
        :class="currentMenu == item.id ? 'border-b-2 border-amber-600' : 'border-0'"
        @click="changeActiveMenu(item.id)"
      >
        <PlusIcon
          :class="
            currentMenu == item.id ? 'text-orange-main opacity-100' : 'text-main-text opacity-25'
          "
        />
        <p
          class="text-base leading-8 font-normal"
          :class="currentMenu == item.id ? 'text-orange-main' : 'text-main-text'"
        >
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>
