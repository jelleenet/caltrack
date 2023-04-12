<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

const calories = reactive({
  current: 93,
});

const activity = 753;

const targetCalories = computed(() => {
  return userStore.bmr - userStore.user.targetDeficit + activity;
});

const backgroundClass = computed(() => {
  if (calories.current <= targetCalories.value) {
    return 'ok';
  }

  if (calories.current <= (userStore.bmr + activity)) {
    return 'warn';
  }

  return 'fail';
});

const caloriesRemaining = computed(() => {
  return `${calories.current < targetCalories.value ? 'Remaining' : 'Exceeded'}: ${
    Math.abs(targetCalories.value - calories.current)
  } cal`;
});

const caloriesActivity = computed(() => {
  return `Activity: ${activity} cal`;
});
</script>

<template>
  <header class="header">
    <div class="header__hero">
      <div
        class="summary"
        role="status"
        :class="backgroundClass"
        :aria-label="`${calories.current} calories consumed of ${targetCalories} calorie allowance`"
      >
        {{ calories.current }} / {{ targetCalories }}
      </div>
      <button class="activity-button" type="button" aria-label="Add Activity">
        <font-awesome-icon icon="fa-solid fa-person-running" />
      </button>
    </div>
    <div class="header__info">
      <p class="details">
        {{ caloriesRemaining }}
      </p>
      <p class="details">
        {{ caloriesActivity }}
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/styles/spacing';
@import '@/styles/_typography.scss';

.header {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  border: 1px solid var(--color-text);
  margin-bottom: var(--margin-block);

  &__hero {
    width: 100%;
    flex: 0 0 auto;
    position: relative;
    border-bottom: 1px solid var(--color-text);

    .summary {
      position: relative;
      width: 100%;
      padding: calc(var(--padding-form) * 2);

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
  }

  &__info {
    width: 100%;
    display: flex;
    align-items: stretch;

    .details {
      width: 50%;
      flex: 0 0 50%;
      font-size: 0.8rem;
      text-align: center;
      margin: unset;
      padding: var(--padding-form);

      &:first-of-type {
        border-right: 1px solid var(--color-text);
      }
    }
  }
}
</style>
