<!-- 06. - List Rendering -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/list.html -->

<script setup lang="ts">
import { ref, reactive } from 'vue';

let napok = ref(['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap']);

function napTörlése(nap: string) {
  napok.value = napok.value.filter((n) => n !== nap);
}

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
});
</script>

<template>
  <q-page>
    <h2>A listák renderelése</h2>
    <q-list bordered>
      <!-- A v-for vektor bejárása esetén kaphat két ciklusváltozót is -->
      <!-- Ilyenkor az elem (e) és index (i) ciklusváltozókat zárojelekbe () kell tenni! -->
      <!-- A key attributum binding-ja kötelező, egyedi érték kell hogy legyen, itt "e" és "i" is jó -->
      <q-item v-for="(e, i) in napok" :key="i" clickable dense>
        <q-item-section>
          <q-item-label>{{ `${e} - (${i})` }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn color="primary" :label="`Töröl ${i}`" no-caps @click="napTörlése(e)" />
        </q-item-section>
      </q-item>
    </q-list>

    <h2>v-for with an object</h2>
    <q-list bordered>
      <q-item v-for="(value, key) in myObject" :key="key" clickable dense>
        <q-item-section>{{ key }}: {{ value }}</q-item-section>
      </q-item>
    </q-list>

    <h2>v-for with a range</h2>
    <span v-for="n in 10" :key="n">{{ n }}</span>
  </q-page>
</template>

<style lang="scss" scoped></style>
