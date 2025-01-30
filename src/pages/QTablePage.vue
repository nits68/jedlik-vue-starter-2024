<script setup lang="ts">
import { useStore } from '../stores/store';
import { onMounted } from 'vue';

const s = useStore();

onMounted(() => {
  s.GetAllDocuments().catch((e) => {
    console.log(e);
  });
});
</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <q-table :rows="s.app.documents" title="Hírdetések (don't forget: 'npm run backend' command)" wrap-cells />
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
