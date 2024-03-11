<script lang="ts" setup></script>

<template>
  <div
    class="w-full bg-no-repeat bg-[url('/images/hero-06.jpg')] h-96 lg:h-[36rem] bg-cover bg-center bg-transparent relative">

    <div class="max-w-3xl mx-auto pt-4 sm:pt-10">
      <ul class="flex flex-row items-start justify-center gap-4 sm:gap-10 text-white text-lg sm:text-2xl uppercase">
        <NaviMenuItem to="/">Köszöntő</NaviMenuItem>
        <NaviMenuItem to="/menetrend">Menetrend</NaviMenuItem>
        <NaviMenuItem to="/eskuvo">Esküvő</NaviMenuItem>
        <NaviMenuItem to="/lakadalom">Lakadalom</NaviMenuItem>
        <NaviMenuItem to="/parkolas">Parkolás</NaviMenuItem>
        <NaviMenuItem to="/kapcsolat">Kapcsolat</NaviMenuItem>
      </ul>
    </div>

    <div class="absolute top-3/4 w-full">
      <p class="text-center text-white text-4xl sm:text-7xl font-serif font-bold">
        Réka &amp; Bence
      </p>
      <p class="text-center text-white  text-xl font-mono">
        2024. szeptember 14.
      </p>

    </div>

  </div>
</template>

<style scoped></style>
