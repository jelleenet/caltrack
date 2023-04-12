import type { User } from '@/factories/userFactory';
import { createUser } from '@/factories/userFactory';
import { defineStore } from 'pinia';
import { calculateBMR } from '@/functions/calculateBMR'; 

declare interface State {
  user: User,
};

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      user: createUser(),
    };
  },

  getters: {
    bmr: (state) => calculateBMR(state.user),
  },

  actions: {
    updateUserSettings(values: User): Promise<void> {
      return new Promise((resolve, reject) => {
        this.user = values;
        // TODO: sync to local store
        resolve();
      });
    },
  },
});
