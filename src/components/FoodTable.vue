<script setup lang="ts">
import { useCaloriesStore } from '@/stores/caloriesStore';
import FoodRow from './FoodRow.vue';

const caloriesStore = useCaloriesStore();
</script>

<template>
  <table class="food-table">
    <thead>
      <tr>
        <th class="p">Time</th>
        <th class="p">Cals</th>
        <th class="p">Item</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <food-row
        v-for="(foodItem, i) in caloriesStore.food"
        :key="`row-${i}`"
        :foodItem="foodItem"
      ></food-row>
      <template v-if="caloriesStore.food.length < 1">
        <tr>
          <td colspan="4" style="text-align: center; padding: 1rem">
            You have not logged any foods Today.
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss">
@import '@/styles/typography';
.food-table {
  width: 100%;

  &,
  * {
    border-collapse: collapse;
  }

  th,
  td {
    @include body-font;
    text-align: left;
    padding: 0.25rem 2rem 0.25rem 0.5rem;
    width: 0%;

    &:first-of-type {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }

    &:nth-child(3) {
      width: 100%;
    }

    &:last-of-type {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      padding-right: 0.5rem;
    }
  }

  td {
    font-size: 0.8rem;
  }

  tr:nth-child(odd) {
    td {
      background-color: var(--color-off-background);
    }
  }

  .delete-button {
    margin: 0;
    padding: 0.5rem;
    background-color: unset;
    border: unset;
    color: var(--color-text);
    cursor: pointer;
  }
}
</style>
