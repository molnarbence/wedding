<script lang="ts" setup>
  defineProps<{
    to: string;
  }>();
</script>

<template>
  <li>
    <router-link :to="to"><slot/></router-link>
  </li>
</template>

<style scoped></style>
