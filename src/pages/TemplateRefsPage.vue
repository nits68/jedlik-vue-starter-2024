<!-- 11. - Template Refs -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/template-refs.html -->

<!-- A useTemplateRef függvény használatával közvetlen hozzáférést kapunk a template-ben definiált DOM elemekhez. -->
<!-- A leggyakoribb DOM manipulációkat a Vue direktivák biztosítják, de néha szükségünk lehet közvetlen hozzáférésre a DOM-hoz. -->
<!-- Ehhez a useTemplateRef függvénynek meg kell adni a template-ben definiált ref attribútum értékét. -->
<!-- A ref egy speciális attribútum, hasonlóan a v-for fejezetben tárgyalt key-attribútumhoz. -->
<!-- Lehetővé teszi számunkra, hogy közvetlen hivatkozást kapjunk egy adott DOM-elemre vagy gyermekkomponens-példányra a "mount" után. -->

<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue';
import { Notify } from 'quasar';

const input = useTemplateRef<HTMLInputElement>('my-input');

const list = ref(['hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek']);
const itemRefs = useTemplateRef<HTMLLIElement[]>('items');
const textInput = ref('kilincs');

onMounted(() => {
  // Első egyszerű példában fókuszba helyezzük az input mezőt:
  if (input.value) input.value.focus();
  // vagy:
  // input.value!.focus();

  // Második példában egy lista elemeire hivatkozunk:
  if (itemRefs.value) {
    Notify.create({
      message: `${itemRefs.value.map((item) => item.textContent).join(', ')}`,
      color: 'red',
      position: 'top',
      timeout: 1000,
    });
  }
});
</script>

<template>
  <q-page>
    <q-input
      ref="my-input"
      v-model="textInput"
      bg-color="primary"
      class="inline"
      color="yellow"
      input-class="text-white"
      label="Auto focus example"
      label-color="yellow"
      outlined
      style="width: 500px"
    />

    <ul>
      <li v-for="item in list" :key="item" ref="items">
        {{ item }}
      </li>
    </ul>
  </q-page>
</template>

<style lang="scss" scoped></style>
