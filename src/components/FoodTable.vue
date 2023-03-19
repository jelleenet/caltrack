<script setup lang="ts">
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>time</th>
        <th>cals</th>
        <th>name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="index in 20" :key="`row-${index}`">
        <td>12:46</td>
        <td>350</td>
        <td>Sausage Roll</td>
        <td><button type="button" aria-label="Delete Item">
            <font-awesome-icon icon="fa-solid fa-delete-left" />
          </button></td>
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
    width: auto;

    &:first-of-type {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }

    &:nth-child(3) {
      width: 100%;
    }

    &:last-of-type {
      width: 0%;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }

  tr:nth-child(odd) {
    td {
      background-color: var(--color-off-background);
    }
  }
}
</style>