<!-- 12. - Components Basics -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/component-basics.html -->

<script setup lang="ts">
import { ref, Ref } from 'vue';

import BlogPostComponent from '../components/BlogPostComponent.vue';
import ButtonCounterComponent from '../components/ButtonCounterComponent.vue';
import YesOrNoComponent from '../components/YesOrNoComponent.vue';

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
]);

const yesNoResult: Ref<boolean | string> = ref('még nincs válasz');
function yesNoHandler(result: boolean) {
  yesNoResult.value = result;
}
</script>

<template>
  <q-page>
    <!-- Using Components -->
    <ButtonCounterComponent />
    <ButtonCounterComponent />
    <button-counter-component />

    <!-- Passing props to child component-->
    <BlogPostComponent v-for="post in posts" :key="post.id" :title="post.title" />

    <!-- two-way communication between parent and child component -->
    <YesOrNoComponent igen-felirat="Persze" kérdés="Jedlikes vagy?" nem-felirat="Ne már" @btn-pressed="yesNoHandler" />

    <!-- with defaults -->
    <YesOrNoComponent @btn-pressed="yesNoHandler" />
    <h4>
      A kérdésre adott válasz:
      {{ yesNoResult }}
    </h4>
  </q-page>
</template>

<style lang="scss" scoped></style>
