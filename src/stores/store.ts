import { api } from '../boot/axios';
import { defineStore } from 'pinia';
import { Loading, Notify } from 'quasar';

// Interface for Application
interface IApp {
  showNewDialog: boolean;
  filter: string;
  documents: Array<any>;
  currentYear: number;
}

interface IStore {
  app: IApp;
}

export const useStore = defineStore('Store', {
  state: (): IStore => ({
    app: {
      documents: [],
      filter: '',
      showNewDialog: false,
      currentYear: new Date().getFullYear(),
    },
  }),
  // getters: {},
  actions: {
    async GetAllDocuments(): Promise<void> {
      try {
        Loading.show();
        this.app.documents = [];
        const res = await api.get('/documents');
        if (res?.data) {
          this.app.documents = res.data;
        }
      } catch (error: any) {
        Notify.create({
          message: `Error: ${error?.message || 'While fetching documents.'}`,
          color: 'negative',
        });
      } finally {
        Loading.hide();
      }
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
