<!-- 09. - Lifecycle Hooks -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/lifecycle.html -->

<script setup lang="ts">
import { onUpdated, onMounted, onUnmounted, ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const counter = ref(0);
const eventCounter = ref(0);


// A hook az oldal/komponens betöltésekor (felépítése után) hívódik meg
onMounted(() => {
  eventCounter.value++;
  $q.notify({
    message: `OnMounted (${eventCounter.value}.)`,
    color: 'green-6',
    position: 'top',
    timeout: 1000,
  });
});

// Az onUpdated hooke akkor hívodik meg, amikor a reaktív változók értéke megváltozik
// Viszont a Quasar-ban nem hívódik meg, más megoldást kell használni
onUpdated(() => {
  eventCounter.value++;
  $q.notify({
    message: `onUpdated (${eventCounter.value}.)`,
    color: 'yellow',
    position: 'top',
    timeout: 1000,
  });
});

// Quasar esetén @vue:updated="" eseménykezelőt kell használni az oladlon/komponensen belül, ha kezelni akarjuk az updated eseményt
function onVueUpdated() {
  eventCounter.value++;
  $q.notify({
    message: `on Vue Updated (${eventCounter.value}.)`,
    color: 'yellow',
    textColor: 'black',
    position: 'top',
    timeout: 1000,
  });
}

// Az oldal elhagyásakor (bezárásakor) hívódik meg
onUnmounted(() => {
  eventCounter.value++;
  $q.notify({
    message: `onUnmounted (${eventCounter.value}.)`,
    color: 'red-6',
    position: 'top',
    timeout: 1000,
  });
});
// Finished script setup
eventCounter.value = 1;
$q.notify({
  message: `Finished Script setup (${eventCounter.value}.)`,
  color: 'red',
  position: 'top',
  timeout: 1000,
});
</script>

<!-- Lifecycle diagram in vue.js: -->
<!-- https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram -->
<template>
  <q-page class="column flex-center" @vue:updated="onVueUpdated()">
    <div>
      <h4>Counter: {{ counter }}</h4>
      <q-btn color="primary" glossy no-caps stack @click="counter++">Press me for update event!</q-btn>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
