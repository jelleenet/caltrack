<script setup lang="ts">
import FoodTable from '@/components/FoodTable.vue';
</script>

<template>
  <main>
    <section class="block">
      <div class="block__title">
        <h1 class="h1">Food Log</h1>
      </div>
      <FoodTable />
    </section>
    
    <section class="buttons-container">
      <button class="button">New Day</button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>
