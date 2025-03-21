import { defineStore } from 'pinia';

export const useLocaleStore = defineStore('locale', {
    state: () => ({
      locale: 'en-US' // Значение по умолчанию
    }),
    /*
    actions: {
      async fetchLocale() {
        try {
          const { locale } = await $fetch('/api/user-locale');
          if (locale) this.locale = locale;
        } catch (error) {
          console.error(error);
        }
      }
    }
      */
});