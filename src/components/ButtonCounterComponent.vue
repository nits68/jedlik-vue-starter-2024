<!-- Defining a simple Component -->

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
    <q-btn class="bg-red text-yellow-4" glossy :label="`You clicked me ${count} times.`" no-caps rounded @click="count++"></q-btn>
</template>

<style lang="scss" scoped>
.q-btn {
    margin: 20px 0px;
    display: block;
}
</style>
