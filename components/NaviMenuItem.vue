<script lang="ts" setup>
  defineProps<{
    to: string;
  }>();
</script>

<template>
  <li>
    <router-link :to="to"><slot></slot></router-link>
  </li>
</template>

<style scoped></style>
