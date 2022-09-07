<template>
  <header
    class="header is-flex is-justify-content-space-between is-align-items-center px-6"
  >
    <figure class="image logo">
      <img src="@/assets/logo1.png" />
    </figure>
    <ul class="menu is-flex is-justify-content-space-evenly">
      <li v-for="item in menu" :key="item.name">
        <RouterLink
          class="button is-white"
          :to="{ name: item.route }"
          :class="{ 'is-primary': currentRoute === item.route }"
          >{{ item.name }}</RouterLink
        >
      </li>
      <li class="button is-white">
        <fa-icon icon="fa-solid fa-magnifying-glass" />
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import type { MenuI } from '@/interfaces/Menu';
import { RouterLink, useRoute } from 'vue-router';

// --- VARIABLES
const { name } = useRoute();
const currentRoute = name || 'Home';

const menu: Array<MenuI> = [
  { name: 'All', route: 'Home' },
  { name: 'Branding', route: '' },
  { name: 'Wev', route: '' },
  { name: 'Photography', route: '' },
  { name: 'App', route: '' },
];
</script>

<style lang="scss" scoped>
.logo {
  width: 200px;
}
.header {
  height: 100px;

  @media (max-width: 450px) {
    height: 100%;
    padding: 10px;
    flex-direction: column;
  }
}
.menu {
  gap: 10px;

  @media (max-width: 450px) {
    height: 100%;
    flex-wrap: wrap;
  }
}
</style>
