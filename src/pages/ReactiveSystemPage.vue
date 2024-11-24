<!-- 02. Vue.js Reactive System -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/reactivity-fundamentals.html -->

<!-- Vue Reactive System: Az oldalon/komponensen megjelenített váltózóértékek -->
<!-- az érték megváltozásakor automatikusan frissüljenek (update) -->
<script setup lang="ts">
import { useStore } from '../stores/store';
import { ref, reactive, Ref } from 'vue';

let nemReaktívVáltozó = 0; // nem reactive típusos változó
let nemReaktívTípusosVáltozó: number = 0; // nem reactív típusos változó

const reactiveVáltozó = ref(0); // reactive változó
const reactiveTípusosVáltozó: Ref<number> = ref(0); // reactive típusos változó

// reactive objektum
const reactiveObject = reactive({
  born: 1953,
  live: true,
  books: ['The Shining', 'Doctor Sleep'],
});

// interface a reactive típusos objektumhoz
interface IReactive {
  born: number;
  live: boolean;
  books: string[];
}

// reactive típusos objektum
const reactiveTípusosObject: IReactive = reactive({
  born: 1953,
  live: true,
  books: ['The Shining', 'Doctor Sleep'],
});

// Store: Központi adattároló, bármely oldal/komponens elérheti, a változói (state) reaktívak
const s = useStore();

function modify(delta: number): void {
  nemReaktívVáltozó += delta;
  nemReaktívTípusosVáltozó += delta;
  reactiveVáltozó.value += delta;
  reactiveTípusosVáltozó.value += delta;
  reactiveObject.born += delta;
  reactiveTípusosObject.born += delta;
  s.app.counter += delta;
}
</script>

<template>
  <q-page class="column flex-center text-center">
    <h1>Vue.js Reactive System</h1>
    <h5>Nem reaktív változó: {{ nemReaktívVáltozó }}</h5>
    <h5>Nem reaktív típusos változó: {{ nemReaktívTípusosVáltozó }}</h5>

    <h5>Reaktív változó: {{ reactiveVáltozó }}</h5>
    <h5>Reaktív típusos változó: {{ reactiveTípusosVáltozó }}</h5>

    <h5>Reaktív object: {{ reactiveObject.born }}</h5>
    <h5>Reaktív típusos object: {{ reactiveTípusosObject.born }}</h5>

    <h5>Pinia store változó: {{ s.app.counter }}</h5>
    <div>
      <q-btn color="blue" glossy label="Változók csökkentése" no-caps @click="modify(-1)" />
      <q-btn class="q-ml-md" color="red" glossy label="Változók növelése" no-caps @click="modify(1)" />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
h1,
h5 {
  margin: 3px;
}
</style>
