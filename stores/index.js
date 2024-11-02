import axios from "axios";
import { defineStore, createPinia, setActivePinia } from "pinia";
const pinia = createPinia();

export default { store: setActivePinia(pinia) };

export const usePagesStore = defineStore("page", {
  state: () => ({
    pages: [],
  }),
  actions: {
    async fetchPages() {
      const response = await useFetch("http://localhost:3009/pages");
      this.pages = await response.data;
    }
  },
});
