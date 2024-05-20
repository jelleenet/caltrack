import type { FoodItem } from '@/factories/foodItemFactory';
import { defineStore } from 'pinia';
import { apiClient } from '@/plugins/ApiClient';

type CaloriesStoreState = {
  food: FoodItem[];
  activity: number;
};

export const useCaloriesStore = defineStore('calories', {
  state: (): CaloriesStoreState => {
    return {
      food: [],
      activity: 0,
    };
  },

  getters: {
    /**
     * Returns the total calories consumed
     * @param state
     * @returns
     */
    foodCalories: (state): number =>
      state.food.reduce((total, foodItem) => {
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
      apiClient.setFoodItems(this.food);
    },

    /**
     * Updates whole food Array
     * @param food
     */
    setFood(food: FoodItem[]): void {
      this.food = food;
      apiClient.setFoodItems(this.food);
    },

    /**
     * Deletes a foodItem from the store based on it's timestamp
     * @param foodItem
     */
    deleteFood(foodItem: FoodItem): void {
      this.food = this.food.filter((item) => {
        return item.time !== foodItem.time;
      });
      apiClient.setFoodItems(this.food);
    },

    /**
     * Updates user activity value
     * @param activity
     */
    updateActivity(activity: number): void {
      this.activity = activity;
      apiClient.setActivity(this.activity);
    },

    /**
     * Resets entire store ("New Day" functionality)
     */
    resetStore(): void {
      this.food = [];
      this.activity = 0;
      apiClient.setFoodItems(this.food);
      apiClient.setActivity(this.activity);
    },
  },
});
