<script lang="ts" setup>
definePageMeta({
  layout: 'other'
})
</script>

<template>
  <div>
    <div id="story" class="w-full">
      <div class="flex justify-center">

        <div class="max-w-5xl ">
          <Paragraph>
            <HeaderWithDeco />
            Kérlek, jelezzetek nekünk vissza a Google Forms űrlap kitöltésével, hogy részt tudtok-e venni az esküvőnkön.
          </Paragraph>
          <Paragraph class="mt-4">
            <div class="text-center space-y-4 px-4 sm:px-0 text-blue-700">
              <NuxtLink to="https://forms.gle/SCHKsXAxSdhn1U2f7">Kattints IDE az űrlap kitöltéséhez</NuxtLink>
            </div>
          </Paragraph>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
