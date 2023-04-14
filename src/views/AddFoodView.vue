<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createFoodItem } from '@/factories/foodItemFactory';
import { useCaloriesStore } from '@/stores/caloriesStore';
import router from '@/router';

const caloriesStore = useCaloriesStore();
const localName = ref(<string|null>null);
const localCalories = ref(<number|null>null);

/**
 * Saves new foodItem to store
 */
const saveFood = () => {
  if (localName.value && localCalories.value) {
    caloriesStore.addFood(createFoodItem(localCalories.value, localName.value));
    router.push({ name: 'home' });
  }
}

/**
 * Focus on input on mount
 */
onMounted(() => {
  document.getElementById('food-name')?.focus();
});
</script>

<template>
  <main>
    <form @submit.prevent="saveFood">
      <section class="block">
        <div class="block__title">
          <h1 class="h1">Add Food</h1>
        </div>
        <div class="input-row">
          <label for="food-name">Name</label>
          <input type="text"
                 id="food-name"
                 name="name"
                 placeholder="Food Name"
                 v-model="localName"
                 required />
        </div>
        <div class="input-row">
          <label for="activity-field">Calories</label>
          <input name="activity"
                id="activity-field"
                type="number"
                input-mode="numeric"
                placeholder="Food Calories"
                v-model="localCalories"
                step="1"
                min="0"
                required />
          <span class="input-row__postfix">cal</span>
        </div>
      </section>
      
      <section class="buttons-container">
        <button type="submit" class="button">Save</button>
      </section>
    </form>
  </main>
</template>

<style lang="scss" scoped>
</style>
