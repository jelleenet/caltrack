import type { User } from '@/factories/userFactory';
import { createUser } from '@/factories/userFactory';
import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {

  let user = reactive(<User>createUser());

  function updateUserSettings(values: User) {
    user = { ...user, ...values };
  }

  return { 
    user,
    updateUserSettings,
  };
});
