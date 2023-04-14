<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useCaloriesStore } from '@/stores/caloriesStore';
import router from '@/router';

const caloriesStore = useCaloriesStore();
const localActivity = ref<number|null>(null);

/**
 * Syncs local activity to store
 */
const saveActivity = () => {
  if (localActivity.value !== null) {
    caloriesStore.updateActivity(localActivity.value);
    router.push({ name: 'home' });
  }
};

/**
 * Focus on input on mount
 */
onMounted(() => {
  document.getElementById('activity-field')?.focus();
});
</script>

<template>
  <main>
    <form @submit.prevent="saveActivity">
      <section class="block">
        <div class="block__title">
          <h1 class="h1">Set Activity</h1>
        </div>
        <div class="input-row">
          <label for="activity-field">Activity</label>
          <input
            name="activity"
            id="activity-field"
            type="number"
            input-mode="numeric"
            :placeholder="caloriesStore.activity.toString()"
            v-model="localActivity"
            step="1"
            min="0"
            required
          />
          <span class="input-row__postfix">cal</span>
        </div>
      </section>

      <section class="buttons-container">
        <button type="submit" class="button">Save</button>
      </section>
    </form>
  </main>
</template>

<style lang="scss" scoped></style>
