<script setup lang="ts">
// Define typed prop(s)
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <q-banner class="bg-blue-4 text-yellow-5 q-ma-sm" :title="props.title">{{ props.title }}</q-banner>
</template>

<style lang="scss" scoped></style>
