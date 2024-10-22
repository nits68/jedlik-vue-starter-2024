<script setup lang="ts">
import { useStore } from '../stores/store';
import { onMounted } from 'vue';
// import { QTableColumn } from "quasar";

const store = useStore();

onMounted(() => {
  store.GetAllDocuments();
});
</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <q-table :rows="store.app.documents || []" title="Hírdetések" wrap-cells />
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
