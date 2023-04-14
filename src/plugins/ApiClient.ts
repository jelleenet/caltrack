import type { App, Plugin } from 'vue';
import type { User } from '@/factories/userFactory';
import type { FoodItem } from '@/factories/foodItemFactory';
import { useUserStore } from '@/stores/userStore';
import { useCaloriesStore } from '@/stores/caloriesStore';

/**
 * Interface for getting/saving persistent data
 */
export const apiClient = {
  clearStorage(): void {
    localStorage.clear();
  },

  getUserData(): User | null {
    const storedUser = localStorage.getItem('user');
    return storedUser === null ? storedUser : JSON.parse(storedUser);
  },

  setUserData(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  },

  getFoodItems(): Array<FoodItem> | null {
    const storedFoodItems = localStorage.getItem('foodItems');
    return storedFoodItems === null ? storedFoodItems : JSON.parse(storedFoodItems);
  },

  setFoodItems(foodItems: Array<FoodItem>): void {
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
  },

  getActivity(): number {
    const storedActivity = localStorage.getItem('activity');
    return storedActivity === null ? 0 : JSON.parse(storedActivity);
  },

  setActivity(activity: number): void {
    localStorage.setItem('activity', JSON.stringify(activity));
  },
};

/**
 * Syncs values to local stores on first load
 */
export const ApiClientPlugin: Plugin = {
  install: (app: App) => {
    app.provide('apiClient', apiClient);

    const userStore = useUserStore();
    const caloriesStore = useCaloriesStore();

    try {
      const user = apiClient.getUserData();
      user && userStore.updateUserSettings(user);

      const foodItems = apiClient.getFoodItems();
      foodItems && caloriesStore.setFood(foodItems);

      const activity = apiClient.getActivity();
      activity && caloriesStore.updateActivity(activity);
    } catch (e) {
      console.error('Unable to sync data,', e);
    }
  },
};
