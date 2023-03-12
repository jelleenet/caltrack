<script setup lang="ts">
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>time</th>
        <th>cals</th>
        <th>name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>12:46</td>
        <td>350</td>
        <td>Sausage Roll</td>
      </tr>
      <tr>
        <td>12:46</td>
        <td>350</td>
        <td>Sausage Roll</td>
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

    &:first-of-type {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }

    &:last-of-type {
      width: 100%;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }

  tr:nth-child(odd) {
    td {
      background-color: hotpink;
    }
  }
}
</style>