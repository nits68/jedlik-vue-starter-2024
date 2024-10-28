import { api } from '../boot/axios';
import { defineStore } from 'pinia';
import { Loading, Notify } from 'quasar';

// Interface for Application
interface IApp {
  showNewDialog: boolean;
  filter: string;
  documents: Array<any>;
  currentYear: number;
  counter: number;
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
      counter: 123,
    },
  }),
  getters: {},
  actions: {
    async GetAllDocuments(): Promise<void> {
      Loading.show();
      this.app.documents = [];
      api
        .get('/advertisements')
        .then((res) => {
          Loading.hide();
          if (res?.data) {
            this.app.documents = res.data;
          }
        })
        .catch(() => {
          Loading.hide();
          Notify.create({
            message: 'Can\'t get documents from json-server API',
            color: 'negative',
            position: 'top',
          });
        });
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
