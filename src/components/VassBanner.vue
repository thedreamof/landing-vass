<template>
  <section class="section has-background-primary banner">
    <p class="title has-text-centered has-text-white">{{ title }}</p>
    <p class="subtitle mt-4 has-text-centered has-text-white">
      {{ subtitle }}
    </p>
    <button class="button has-text-primary mt-6" @click="viewWork">
      View on work
    </button>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();

const emit = defineEmits(['viewWork']);

const viewWork = () => {
  emit('viewWork');
};
</script>

<style lang="scss" scoped>
.banner {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-size: 44px;
    letter-spacing: 10px;
    font-weight: normal;
  }

  .subtitle {
    max-width: 700px;
  }
}
</style>
