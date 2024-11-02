import { defineStore, createPinia, setActivePinia } from "pinia";
import { db } from "../firebase";
const pinia = createPinia();

export default { store: setActivePinia(pinia) };

export const usePagesStore = defineStore("page", {
  state: () => ({
    pages: [],
  }),
  actions: {
    async fetchPages() {
        const snapshot = await db.ref('pages').once('value');
        const data = snapshot.val();
        this.pages = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      }
  },
});
