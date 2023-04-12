import type { App, Plugin } from 'vue';
import type { User } from '@/factories/userFactory';
import { useUserStore } from '@/stores/userStore';

/**
 * Interface for getting/saving persistent data
 */
export const apiClient = {
  getUserData(): User|null {
    const storedUser = localStorage.getItem('user');

    return storedUser === null ? storedUser : JSON.parse(storedUser) ;
  },

  setUserData(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  },

  clearStorage(): void {
    localStorage.clear();
  },
}

/**
 * Syncs values to local stores on first load
 */
export const ApiClientPlugin: Plugin = {
  install: (app: App) => {
    app.provide('apiClient', apiClient);

    // Sync User
    const userStore = useUserStore();
    try {
      const user = apiClient.getUserData();
      if (user !== null) {
        userStore.updateUserSettings(user);
      }
    } catch(e) {
      console.error('Unable to sync User,', e);  
    }
  },
};
