<template>
  <span>
    <ParagraphSection v-for="m in menu" :key="m.section" class="mb-5">
      <HeaderWithDeco>{{ m.section }}</HeaderWithDeco>
      <ul class="list-inside">
        <li v-for="item in m.items" :key="item[0]">
          {{ item[0] }} <small v-if="item[1]">({{ item[1] }})</small>
        </li>
      </ul>
    </ParagraphSection>
  </span>
</template>

<script lang="ts" setup>
interface MenuSection {
  section: string;
  items: [string, string][];
}

const menu: MenuSection[] = [
  {
    section: 'Leves',
    items: [
      ['Újházy tyúkhús leves gazdagon', 'GL, tojás, zeller, gomba'],
      ['Hideg gyümölcs leves jégágyon', 'V, LK'],
    ],
  },
  {
    section: 'Előétel',
    items: [
      ['Pulled pork rilette,sárga paradicsom lekvár', 'LK'],
      ['Sajtos buché (V)', 'GL, LK'],
      ['Chickenfingers pohárban, remoulade mártás', 'GL'],
      [
        'Medvehagymás ricotta, marinált zöldségek, rukkola Wrap (V)',
        'LK, gomba',
      ],
    ],
  },
  {
    section: 'Főétel',
    items: [
      ['Grillezett lazacderék , zöldséges tagliatelle', 'GL, LK, tojás, hal'],
      [
        'Szárított paradicsommal töltött csirkemell - petrezselymes burgonya',
        'LK',
      ],
      ['Pulled pork BBQ - vadrizs', ''],
      ['Marhapörkölt - vajgaluska', 'GL, LK, tojás'],
      ['Tepsiben sült gnocchi Sorientina (V)', 'GL, LK, tojás'],
      ['Brokkoli rózsák mandulás morzsában (V)', 'GL'],
    ],
  },
  {
    section: 'Saláta',
    items: [['Cézár saláta', 'GL, LK, hal']],
  },
  {
    section: 'Pohárdesszert',
    items: [
      ['Sóskaramell mousse (LK, GL, tojás)', 'LK, GL, tojás'],
      ['Tápióka puding, mangó chutney', ''],
      ['Somlói habos galuska', 'GL, LK, tojás, diófélék'],
    ],
  },
  {
    section: 'Éjfélkor',
    items: [
      [
        'Kolozsvári mini töltött káposzta, friss tejfellel házi fehér kenyérrel',
        'GL, LK',
      ],
    ],
  },
  {
    section: 'Italok',
    items: [
      ['Szepsi Srácok Pálinkája (szilva, 2023)', ''],
      ['Szénsavas és rostos üdítőitalok', ''],
      ['Citromos és zöld jegestea', ''],
      ['Szénsavas és szénsavmentes ásványvíz', ''],
      ['Pilsner Urquell csapolt sör', ''],
      ['Peroni 0.0% 0.33l', ''],
      ['Kvassay Sauvignon Blanc Szekszárd 2021', ''],
      ['Chateau Dereszla Tokaj Dry 2021', ''],
      ['Chateau Dereszla Tokaj Muskotály 2022', ''],
      ['Szeleshát Tekenővölgyi Rosé Szekszárd 2023', ''],
      ['Szeleshát Merlot Szekszárd 2019', ''],
      ['Nespresso feketekávé, cappuccino', ''],
    ],
  },
];
</script>

<style></style>
