<script setup lang="ts"></script>

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
      <tr v-for="index in 1" :key="`row-${index}`">
        <td>11:50</td>
        <td>93</td>
        <td>Pepsi</td>
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
.table {
  width: 100%;

  &,
  * {
    border-collapse: collapse;
  }

  th,
  td {
    text-align: left;
    padding: 0.25rem 2rem 0.25rem 0.5rem;
    width: 0%;
    font-size: 0.8rem;

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
  }
}
</style>
