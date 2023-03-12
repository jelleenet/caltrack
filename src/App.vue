<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue';
</script>

<template>
  <div class="container">
    <HeaderBar />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
