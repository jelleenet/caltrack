<script setup lang="ts">
import { reactive, computed } from 'vue';

const calories = reactive({
  current: 850,
  target: 1550,
  max: 2000
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

const caloriesRemaining = computed(() => {
  return `${calories.target - calories.current} cal ${calories.current < calories.target ? 'under' : 'over'}`;
});

const caloriesActivity = computed(() => {
  return `500 cal activity`;
});
</script>

<template>
  <header>
    <section class="header-container">
      <div class="summary" role="status" :class="backgroundClass"
        :aria-label="`${calories.current} calories consumed of ${calories.target} calorie allowance`">
        {{ calories.current }} / {{ calories.target }}
      </div>
      <button class="activity-button" type="button" aria-label="Add Activity">
        <font-awesome-icon icon="fa-solid fa-person-running" />
      </button>
    </section>
    <p class="details">
      {{ caloriesRemaining }} | {{ caloriesActivity }}
    </p>
  </header>
</template>

<style lang="scss" scoped>
@import '@/styles/_typography.scss';

.header-container {
  position: relative;
}

.summary {
  position: relative;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.25rem;

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

.activity-button {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  bottom: 0;
  aspect-ratio: 1/1;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5em;
  color: #ffffff;
  background-color: transparent;
  border: none;
}

.details {
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 1rem;
}
</style>