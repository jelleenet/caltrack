<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isHome = computed(() => route.name === 'home');
</script>

<template>
  <router-link
    v-if="isHome"
    class="link link--settings"
    :to="{ name: 'settings' }"
    aria-label="Settings"
  >
    <font-awesome-icon icon="fa-solid fa-gear" aria-hidden="true" />
  </router-link>
  <router-link v-if="isHome" class="link link--add" :to="{ name: 'addFood' }" aria-label="Add Food">
    <font-awesome-icon icon="fa-solid fa-plus" aria-hidden="true" />
  </router-link>
  <router-link v-if="!isHome" class="link link--settings" :to="{ name: 'home' }" aria-label="Back">
    <font-awesome-icon icon="fa-solid fa-arrow-left" aria-hidden="true" />
  </router-link>
</template>

<style lang="scss" scoped>
.link {
  position: fixed;
  z-index: 1;
  bottom: 0.5em;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2em;
  height: 2em;
  aspect-ratio: 1/1;
  border-radius: 50%;

  font-size: 1.5em;
  color: var(--color-text);
  background-color: var(--color-off-background);
  box-shadow: 0 0 8px 8px var(--color-background);

  &--settings {
    left: 0.5em;
  }

  &--add,
  &--back {
    right: 0.5em;
    color: #ffffff;
    background-color: var(--color-green);
  }
}
</style>
