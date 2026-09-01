<script setup>
const props = defineProps(['projectPortfolio'])
console.log(props.projectPortfolio)
</script>

<template>
  <div class="flex flex-col justify-center items-start gap-4 lg:gap-6 w-full">
    <div class="flex justify-start w-full items-center">
      <TitleButton class="gap-2.5 py-1 px-3 lg:px-4">
        <p class="title-button-mobile lg:title-button-desktop text-title-text">پروژه ها</p>
      </TitleButton>
    </div>
  </div>
</template>
