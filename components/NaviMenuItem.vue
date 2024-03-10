<script lang="ts" setup>
  defineProps<{
    to: string;
  }>();
</script>

<template>
  <li class="mr-6">
    <router-link :to="to"><slot></slot></router-link>
  </li>
</template>

<style scoped></style>
