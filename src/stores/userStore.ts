import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export declare interface User {
  activityMultiplier: number;
  bodyFat: number;
  height: number;
  targetDeficit: number;
  weight: number;
}

export const useUserStore = defineStore('user', () => {

  let user = reactive(<User>{
    activityMultiplier: 1,
    bodyFat: 15,
    height: 180,
    targetDeficit: 500,
    weight: 80,
  });

  function updateUserSettings(values: User) {
    user = { ...user, ...values };
  }

  return { 
    user,
    updateUserSettings,
  };
});
