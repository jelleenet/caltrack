<script setup lang="ts">
import FoodTable from '@/components/FoodTable.vue';
</script>

<template>
  <main>
    <section class="food-overview">
      <div class="food-overview__header">
        <h1 class="h1">Food Log</h1>
      </div>
      <div class="food-overview__body">
        <FoodTable />
      </div>
    </section>
    
    
    <button class="button button--small newDay">New Day</button>
  </main>
</template>

<style lang="scss" scoped>

.food-overview {
  border: 1px solid var(--color-text);

  &__header {
    text-align: center;
    padding: var(--padding-form);
    border-bottom: 1px solid var(--color-text);
    background-color: var(--color-dark-background);
    color: #ffffff;
  }
}
.newDay {
  display: block;
  margin: var(--padding-form) auto 0;
}
</style>
