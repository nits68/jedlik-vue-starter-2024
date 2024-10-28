<!-- 11. - Template Refs -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/template-refs.htmll -->

<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// the first argument must match the ref value in the template
const input = useTemplateRef<HTMLInputElement>('my-input');

const list = ref([1, 2, 3]);
const itemRefs = useTemplateRef<HTMLLIElement[]>('items');
const textInput = ref('kilincs');

onMounted(() => {
  input.value!.focus();
  if (itemRefs.value) {
    $q.notify({
      message: `${itemRefs.value.map((i) => i.textContent)}`,
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
