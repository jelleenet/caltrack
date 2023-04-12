<script setup lang="ts">
import { useCaloriesStore } from '@/stores/caloriesStore';

const caloriesStore = useCaloriesStore();

/**
 * Makes our timestamps human readable
 * @param time 
 */
const formatTime = function(time: number): string {
  // @ts-ignore
  // TS incorrectly reports 'timeStyle' as invalid - https://github.com/microsoft/TypeScript/issues/38266
  // TODO: This may be invalid in Safari?
  return new Date(time).toLocaleTimeString(window.navigator.language, { timeStyle: 'short' });
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th class="p">Time</th>
        <th class="p">Cals</th>
        <th class="p">Item</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="foodItem, i in caloriesStore.food" :key="`row-${i}`">
        <td>{{ formatTime(foodItem.time) }}</td>
        <td>{{ foodItem.calories }}</td>
        <td>{{ foodItem.description }}</td>
        <td>
          <button type="button" class="delete-button" aria-label="Delete Item">
            <font-awesome-icon icon="fa-solid fa-delete-left" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import '@/styles/typography';
.table {
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
