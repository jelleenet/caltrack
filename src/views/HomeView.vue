<script setup lang="ts">
import FoodTable from '@/components/FoodTable.vue';
import NewDayButton from '@/components/NewDayButton.vue';
</script>

<template>
  <main>
    <section class="block">
      <div class="block__title">
        <h1 class="h1">Food Log</h1>
      </div>
      <FoodTable />
    </section>
    
    <new-day-button />
  </main>
</template>

<style lang="scss" scoped>
</style>
