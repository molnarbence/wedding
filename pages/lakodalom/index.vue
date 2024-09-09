<template>
  <span>
    <ParagraphSection class="mt-5">
      <HeaderWithDeco>Menetrend</HeaderWithDeco>
      <ul>
        <li v-for="row in timelineRows" :key="row">{{ row }}</li>
      </ul>
    </ParagraphSection>
    <ParagraphSection class="mt-5">
      <HeaderWithDeco>A helyszín</HeaderWithDeco>
      Nem más mint a Testnevelési Egyetem új épületének étterme, a Testnevelési Egyetem "K" épülete mellett. Címe: 1123
      Budapest, Alkotás u. 44.
      <div class="text-center space-y-4 px-4 sm:px-0 mt-2">
        <NuxtImg src="/images/tf_k_epulet.png" alt="lakodalom helyszín" />
      </div>
    </ParagraphSection>
    <ParagraphSection class="mt-5">
      <HeaderWithDeco>A zene</HeaderWithDeco>
      A hangulatról a Show4You DJ-je gondoskodik majd. Ha nagyon szépen kéritek a DJ-t, akkor teljesíti a kéréseteket :)
    </ParagraphSection>
    <ParagraphSection class="mt-5">
      <HeaderWithDeco>A vőfély</HeaderWithDeco>
      A Matyó Néptáncegyüttes tagja, Nyeste Sándor lesz a vőfélyünk. Érdemes lesz majd az utasításait követni :)
    </ParagraphSection>
  </span>
</template>

<script lang="ts" setup>
const timelineRows = [
  "17:30 - Érkezés",
  "18:00 - Gratulációk és fényképezkedés",
  "18:50 - Megnyitó, beszédek, csókok",
  "19:00 - Vacsora",
  "20:30 - Nyitótánc",
  "20:45 - Tánc",
  "21:45 - Kvíz, vetítés",
  "22:00 - Tortavágás",
  "22:30 - Tánc",
  "23:30 - Menyecsketánc",
  "Éjfél - Töltött káposzta",
  "3:00 - Búcsú",
  "Hajnalig? - After party az éjszakában?"
]
</script>

<style></style>
