import type { User } from '@/factories/userFactory';
import { createUser } from '@/factories/userFactory';
import { defineStore } from 'pinia';
import { calculateBMR } from '@/functions/calculateBMR';
import { apiClient } from '@/plugins/ApiClient';

type UserStoreState = {
  user: User;
};

export const useUserStore = defineStore('user', {
  state: (): UserStoreState => {
    return {
      user: createUser()
    };
  },

  getters: {
    /**
     * Returns BMR based on UserStore values
     * @param state
     * @returns
     */
    bmr: (state) => calculateBMR(state.user)
  },

  actions: {
    /**
     * Updates user settings, syncs to API
     * @param values
     */
    updateUserSettings(values: User): void {
      this.user = values;
      apiClient.setUserData(this.user);
    }
  }
});
