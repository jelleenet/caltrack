<script setup lang="ts">
import { reactive, computed } from 'vue';

const calories = reactive({
  current: 850,
  target: 1550,
  max: 2000,
});

const backgroundClass = computed(() => {
  if (calories.current <= calories.target) {
    return 'ok';
  }

  if (calories.target <= calories.max) {
    return 'warn';
  }

  return 'fail';
});
</script>

<template>
  <header class="calorie-summary" role="status" :class="backgroundClass"
    :aria-label="`${calories.current} calories consumed of ${calories.target} calorie allowance`">
    {{ calories.current }} / {{ calories.target }}
  </header>
</template>

<style lang="scss" scoped>
.calorie-summary {
  @import '@/styles/_typography.scss';

  width: 100%;
  padding: 1rem;
  margin: 1rem 0;

  border-radius: var(--border-radius);

  background-color: var(--color-dark-grey);
  color: #ffffff;

  @include header-font;
  font-size: 2rem;
  text-align: center;

  &.ok {
    background-color: var(--color-ok);
  }

  &.warn {
    background-color: var(--color-warn);
  }

  &.fail {
    background-color: var(--color-fail);
  }
}
</style>