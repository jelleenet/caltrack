import type { FoodItem } from '@/factories/foodItemFactory';
import { createFoodItem } from '@/factories/foodItemFactory';
import { defineStore } from 'pinia';
import { apiClient } from '@/plugins/ApiClient';

declare interface CaloriesStoreState {
  food: Array<FoodItem>,
  activity: number,
};

export const useCaloriesStore = defineStore('calories', {
  state: (): CaloriesStoreState => {
    return {
      food: [createFoodItem(93, 'pepsi'), createFoodItem(300, 'Bacon Roll')],
      activity: 0,
    };
  },

  getters: {
    /**
     * Returns the total calories consumed
     * @param state 
     * @returns 
     */
    foodCalories: (state): number => state.food.reduce((total, foodItem) => {
      return total + foodItem.calories;
    }, 0),
  },

  actions: {
    /**
     * Adds a new FoodItem to the store
     * @param foodItem
     */
    addFood(foodItem: FoodItem): void {
      this.food.push(foodItem);
    },

    /**
     * Updates user activity value
     * @param activity 
     */
    updateActivity(activity: number): void {
      this.activity = activity;
    }
  },
});
