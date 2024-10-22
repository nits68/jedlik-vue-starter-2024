import { api } from '../boot/axios';
import { defineStore } from 'pinia';
import { Loading } from 'quasar';

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
  getters: {},
  actions: {
    async GetAllDocuments(): Promise<void> {
      Loading.show();
      this.app.documents = [];
      api
        .get('/documents')
        .then((res) => {
          Loading.hide();
          if (res?.data) {
            this.app.documents = res.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
