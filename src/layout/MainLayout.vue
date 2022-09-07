<template>
  <VassHeader />
  <main>
    <RouterView />
  </main>
  <VassFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import VassHeader from './VassHeader.vue';
import VassFooter from './VassFooter.vue';
</script>

<style scoped></style>
