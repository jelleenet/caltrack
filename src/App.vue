<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderBar from '@/components/HeaderBar.vue';
import DefaultNav from '@/components/DefaultNav.vue';
import PackageJson from '@/../package.json';
</script>

<template>
  <div class="container">
    <HeaderBar class="container__header" />
    <RouterView class="container__body" />
  </div>
  <DefaultNav />
  <div class="version">v{{ PackageJson.version }}</div>
</template>

<style lang="scss" scoped>
@import '@/styles/typography';
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
    width: 100%;
  }

  &__body {
    flex: 1 1 auto;
    width: 100%;
    overflow-y: auto;
    padding-bottom: 2em;
  }
}

.version {
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 0.5rem;
  transform: translateX(-50%);

  @include body-font;
  font-size: 0.75rem;
  color: var(--color-off-background);
}
</style>
