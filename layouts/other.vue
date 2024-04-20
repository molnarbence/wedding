<script lang="ts" setup></script>

<template>
  <div class="max-w-7xl mx-auto space-y-5 sm:space-y-6">
    <NaviMenu
        class="flex flex-row items-start justify-center gap-4 sm:gap-10 text-gray-700 text-lg sm:text-2xl uppercase" />
    <slot />
  </div>
</template>

<style scoped></style>
