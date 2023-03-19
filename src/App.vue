<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderBar from './components/HeaderBar.vue';
</script>

<template>
  <div class="container">
    <HeaderBar class="container__header" />
    <RouterView class="container__body" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  &__header {
    flex: 0 0 auto;
  }

  &__body {
    flex: 1 1 auto;
    overflow-y: auto;
  }
}
</style>
