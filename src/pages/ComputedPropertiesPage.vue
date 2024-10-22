<!-- 03. - Computed Properties -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/computed.html -->

<script setup lang="ts">
import { ref, computed } from 'vue';

const számláló = ref(0);
let db_fg = 0;
let db_prop = 0;

// A computed property: az értéket csak akkor számolja újra, ha függőségei (számláló.value) megváltoznak
const duplaSzámlálóProp = computed(() => {
  db_prop++;
  return számláló.value * 2;
});

// Az eredmény azonos, de a függvény minden rendereléskor lefut, így kevésbé hatékony megoldás
function duplázSzámlálótFg(): number {
  db_fg++;
  return számláló.value * 2;
}

// Lehtőségünk van olvasható/írható computed property-t is készíteni:
const vnév = ref('Szabó');
const knév = ref('János');

const név = computed({
  // getter - olvasáskor fut le
  get() {
    if (knév.value === '') {
      return vnév.value;
    }
    return `${vnév.value} ${knév.value}`;
  },
  set(newValue) {
    // setter - íráskor fut le
    if (newValue.indexOf(' ') != -1) {
      // vnév.value = newValue.split(' ')[0];
      // knév.value = newValue.split(' ')[1];
      // vagy rövidebben:
      [vnév.value, knév.value] = newValue.split(' ');
    } else {
      vnév.value = newValue;
      knév.value = '';
    }
  },
});
</script>

<template>
  <q-page class="column flex-center">
    <h5>Számláló: {{ számláló }}</h5>
    <h5>Dupla számláló függvénnyel: {{ duplázSzámlálótFg() }}</h5>
    <h5>Dupla számláló számított property-vel: {{ duplaSzámlálóProp }}</h5>
    <q-btn color="red" glossy :label="`Számláló növelése Fg:${db_fg} Prop:${db_prop}`" no-caps @click="számláló++" />
    <h5>Teljes név: {{ név }}</h5>
    <h5>Vezetéknév: {{ vnév }}</h5>
    <h5>Keresztnév: {{ knév }}</h5>
    <!-- v-model vue.js direktíva kétirányú adatkötést biztosít: -->
    <q-input v-model="név" label="Név" outlined rounded />
  </q-page>
</template>

<style lang="scss" scoped>
h5 {
  margin: 5px;
}
</style>
