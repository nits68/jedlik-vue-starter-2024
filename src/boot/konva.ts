import VueKonva from 'vue-konva';
import { boot } from 'quasar/wrappers';
export default boot(({ app }) => {
  return new Promise((resolve) => {
    app.use(VueKonva);
    resolve();
  });
});
