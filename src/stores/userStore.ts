import { reactive } from 'vue';
import { defineStore } from 'pinia';

export declare interface UserState {
  activityMultiplier: number;
  bodyFat: number;
  height: number;
  targetDeficit: number;
  weight: number;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      activityMultiplier: 100,
      bodyFat: 23,
      height: 188,
      targetDeficit: 600,
      weight: 87.65,
    };
  },
});
