<script setup lang="ts">
import FoodTable from '@/components/FoodTable.vue';
</script>

<template>
  <main>
    <h1 class="h1">Food Log</h1>
    <FoodTable />
    <button class="newDay">New Day</button>
  </main>
</template>

<style lang="scss" scoped>
.newDay {
  display: block;
  margin: 0 auto;
}
</style>
