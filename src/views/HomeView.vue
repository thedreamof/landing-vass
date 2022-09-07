<template>
  <VassBanner
    title="EXPLORE BEYOND HORIZON"
    subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque odio
      facere at ipsum cupiditate ipsa. Exercitationem mollitia architecto
      aliquid facilis."
    @view-work="viewWork"
  />

  <section class="section">
    <section class="is-flex is-justify-content-center gap-20 options">
      <span class="icon">
        <fa-icon icon="fa-list" />
      </span>
      <span class="icon">
        <fa-icon icon="fa-border-all" />
      </span>
    </section>

    <section class="section">
      <ul class="is-flex is-justify-content-center gap-15">
        <li v-for="filter in filters" :key="filter">
          <button
            class="button is-white"
            :class="{ 'is-primary': active === filter }"
            @click="selectFilter(filter)"
          >
            {{ filter }}
          </button>
        </li>
      </ul>
    </section>

    <section
      class="section is-flex is-flex-wrap-wrap is-justify-content-center gap-15"
    >
      <article class="photos" v-for="image in photos" :key="image.id">
        <figure class="image">
          <img :src="image.url" :alt="image.title" />
        </figure>
        <div class="photos_details">
          <h1>{{ image.title }}</h1>
          <div class="separator"></div>
          <h2>{{ image.albumId % 2 === 0 ? 'Pares' : 'Impares' }}</h2>
        </div>
      </article>
    </section>

    <section class="section is-flex is-justify-content-center">
      <button class="button is-primary" @click="showMore">Show me more</button>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import api from '@/api/api';
import type { PhotosI } from '@/interfaces/photos';
import VassBanner from '../components/VassBanner.vue';

// --- VARIABLES
const filters = ['All', 'Pares', 'Impares'];
const active = ref<string>('All');
const photos = ref<Array<PhotosI>>([]);
const currentAlbum = ref(1);

// --- FUNCTIONS
const getPhotosByAlbum = async (idAlbum: number) => {
  try {
    const res = (await api.getPhotosByAlbum(idAlbum)).data;
    photos.value?.push(...res);
  } catch (error) {
    console.error('Error get getPhotosByAlbum', error);
  }
};

const clearPhotos = () => {
  photos.value = [];
};

const selectFilter = (filter: string) => {
  active.value = filter;
  if (filter === 'Pares') currentAlbum.value = 2;
  else currentAlbum.value = 1;
  clearPhotos();
  getPhotosByAlbum(currentAlbum.value);
};

const showMore = () => {
  if (active.value === 'All') currentAlbum.value += 1;
  else currentAlbum.value += 2;
  getPhotosByAlbum(currentAlbum.value);
};

const viewWork = () => {
  document.body.scrollTo({ top: 500 });
};

// --- Initialized functions
getPhotosByAlbum(1);
</script>

<style lang="scss" scoped>
.options {
  cursor: pointer;
  font-size: 22px;

  .icon {
    &:hover {
      color: var(--primary);
    }
  }
}

.photos {
  position: relative;
  width: 300px;
  height: 100%;

  &:hover {
    .photos_details {
      opacity: 1;
      height: 100%;
      transition: all 0.5s ease;

      h1 {
        text-transform: uppercase;
      }
    }
  }
}

.photos_details {
  color: white;
  position: absolute;
  padding: 5px;
  bottom: 0;
  height: 0;
  opacity: 0;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.separator {
  border-bottom: 1px solid white;
  width: 80%;
  margin: 10px;
}
</style>
