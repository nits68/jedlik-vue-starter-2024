<script setup lang="ts">
import { onUpdated, onMounted, onUnmounted, onBeforeUnmount, ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const counter = ref(0);

// A hook az oldal/komponens betöltésekor (felépítése után) hívódik meg
onMounted(() => {
  $q.notify({
    message: 'LifecycleHooksPage mounted',
    color: 'red',
    position: 'top',
    timeout: 1000,
  });
});


// Az onUpdated hooke akkor hívodik meg, amikor a reaktív változók értéke megváltozik
// Viszont a Quasar-ban nem hívódik meg, a szülő komponensben kerül meghívásra (MainLayout.vue)
onUpdated(() => {
  $q.notify({
    message: 'LifecycleHooksPage updated',
    color: 'green',
    position: 'top',
    timeout: 1000,
  });
});

// Quasar esetén @vue:updated="" eseménykezelőt kell használni az oladlon/komponensen belül
function onVueUpdated() {
  $q.notify({
    message: 'LifecycleHooksPage Vue updated',
    color: 'green',
    position: 'top',
    timeout: 1000,
  });
}

// Az oldal elhagyásakor (bezárásakor) hívódik meg
onUnmounted(() => {
  $q.notify({
    message: 'LifecycleHooksPage unmounted',
    color: 'red-6',
    position: 'top',
    timeout: 1000,
  });
});

onBeforeUnmount(() => {
  $q.notify({
    message: 'LifecycleHooksPage before unmounted',
    color: 'red-4',
    position: 'top',
  });
});
</script>

<!-- Lifecycle diagram in vue.js: -->
<!-- https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram -->
<template>
  <q-page class="column flex-center" @vue:updated="onVueUpdated()">
    <div>
      <h4>Counter: {{ counter }}</h4>
      <q-btn color="primary" glossy no-caps stack @click="counter++"
        >Press me for update event! {{ counter }}</q-btn
      >
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
