<!-- 01. - Text Interpolation, template syntax -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/template-syntax.html -->

<script setup lang="ts">
// A q Quasar object:  https://quasar.dev/options/the-q-object/
import { useQuasar } from 'quasar';
const $q = useQuasar();

let greeting: string = 'Hello Vue.js';

function felkiáltójelHozzáadása() {
  greeting = greeting + '!';
}
// Ez egy megjegyzés a script blokkban
</script>

<template>
  <!-- Template syntax: HTML alapú template nyelv -->
  <!-- SFC: A vue.js állományok egyben tárolják az oldalt/komponenst meghatározó részeket  -->
  <!-- SFC részei: A script, template és style leírók/blokkok -->
  <!-- Ez egy megjegyzés a template blokkban -->

  <q-page class="column flex-center q-gutter-none">
    <h1>Text interpoláció: { { } }</h1>
    <!-- Vue.js Text Interpolation: {{  }} (double curly braces, mustache syntax)  -->
    <!-- Csak a nyitó és záró tag-ek között használható, a dinamikus tartalomhoz -->
    <h3>{{ greeting }}</h3>
    <q-btn color="primary" glossy label="Felkiáltójel hozzáadása" no-caps v-on:click="felkiáltójelHozzáadása()" />
    <h2>3 * 4 = {{ Math.sqrt(9) * Math.pow(2, 2) }}</h2>
    <h2>Screen: {{ $q.screen.width.toFixed(0) }} x {{ $q.screen.height.toFixed(0) }}</h2>
    <!-- Az active osztály a szülő oldaltól (itt MainLayout.vue) öröklődik, ott nincs "scoped" jelölés -->
    <h3 class="active">Ez egy active osztályú címsor</h3>
  </q-page>
</template>

<style lang="scss" scoped>
// Ez egy megjegyzés a style blokkban
// scoped: csak a komponensre vonatkozik, gyermekek nem öröklik
// scoped nélkül: globális stílus (öröklik a gyerek oldalak/komponensek)

// lang="scss": Sass (SCSS) preprocessor, CSS kompatibilis (https://sass-lang.com/)
// Sass: Syntactically Awesome Stylesheets (Sass) - CSS kiterjesztése, továbbfejlesztése
// Sass főbb jellemzői: változók, beágyazott szabályok, importálás, függvények, operátorok, elágazások, ciklusok, modulok
// SCSS: Sassy CSS - Sass 3. verziója: A hagyományos CSS-hez jobban hasonlító szintaxis.
h2 {
  color: $negative; // Sass változó használata, definiálása az "src/css/quasar.variables.scss"-ben
}
</style>
