<!-- 04. - Bindings -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/class-and-style.html -->

<script setup lang="ts">
import { ref, reactive } from 'vue';

const dynamicId = ref(undefined);
// const dynamicId = ref('myId');

const id = ref('myDinamicId');

const activeColor = ref('red');

const styleObject = reactive({
  color: 'blue',
  fontSize: '80px',
  backgroundColor: 'pink', // CSS tulajdonság camelCase-ben is megadható snake-case helyett
  // vagy:
  // 'background-color': 'pink',
  //  background-color helyett: backgroundColor
});

const objectOfAttrs = reactive({
  id: 'container',
  class: 'q-my-md',
  style: 'background-color:green',
});

const isBold = ref(false);
const isActive = ref(false);
const attribNeve = ref('no-caps');

function toggleBold() {
  isBold.value = !isBold.value;
}

function toggleAttrib() {
  if (attribNeve.value === 'no-caps') {
    attribNeve.value = 'rounded';
  } else {
    attribNeve.value = 'no-caps';
  }
}

function toggleActive() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <!-- Bindings: Adatkötés -->
  <!-- Az egyirányú adatkötés Vue.js direktívája a "v-bind:", rövidítése ":" -->
  <q-page>
    <!-- Attribute Bindings -->
    <!-- Ha a dynamicId értéke undefined, akkor az "id" attributum nem kerül rendelerésre-->
    <p :id="dynamicId">Bekezdés dinamikus id-val (F12-vel keresd meg az azonosítóját!)</p>

    <!-- A v-model Vue.js direktíva a kétirányú adatkötésre szolgál, lsd. később -->
    <!-- Az indításkor undefined értékű "dynamicId" változónak adunk itt értéket -->
    <q-input v-model="dynamicId" clearable label="Add meg a paragrafus azonosítóját!" outlined />

    <!-- Same-name Shorthand -->
    <!-- Ha a TS/JS változó azonosítója eggyezik a "kötendő" attribútum azonosítójával, akkor röviden: -->
    <p :id>Ennek a paragrafusnak az id-ja: 'myDinamicId'</p>

    <!-- Style bindings -->
    <!-- Egy vagy több dinmikus CSS tulajdonságot (itt color és background-color) objektummal határozzuk meg -->
    <!-- Ha kötőjel van a tulajdonság nevében, akkor camelCase-ben kell megadni a tulajdonságot, -->
    <!-- vagy a tulajdonság azonosítóját (background-color) aposztrófok közé kell tenni. -->
    <h2 :style="{ color: activeColor, 'background-color': 'yellow' }">Style binding</h2>  
    <q-input v-model="activeColor" clearable label="Szín" outlined />
       
    <!-- Több dinamikus CSS tulajdonság megadásakor, célszerű objektumot (styleObject) készíteni a script blokkban: -->
    <h2 :style="styleObject">Style bindings with object</h2>

    <!-- Class bindings -->
    <!-- A 'bold' class hozzárendelését az isBold logikai változó értéke vezérli -->
    <!-- Igaz esetén hozzárendeli a CSS osztályt, hamis esetén nem  -->
    <h2 :class="{ bold: isBold }">Class binding - is bold?</h2>
    <q-btn color="primary" glossy label="Bold/Normal" no-caps @click="toggleBold()" />

    <!-- Példa attribútum binding-ra Quasar elemekkel, boolean típusú attribútummal -->
    <!-- A példában az előző feladat isBold reaktív változóját használjuk -->
    <!-- A disable és dense attribútumok beállítását (True) az isBold változó vezérli: -->
    <q-btn color="primary" :disable="isBold" glossy label="disable true/false" no-caps />
    <q-banner :dense="isBold">Ez a banner szövege (dense true/false)</q-banner>

    <!-- Példa Object of attributes binding-ra -->
    <!-- Ilyenkor a v-bind rövidítése nem használható -->
    <q-banner v-bind="objectOfAttrs">Object of attributes binding</q-banner>

    <!-- Péda dinamikus attributumokra -->
    <!-- Előző példákban a CSS attribútumok értékei voltak csak dinamikusak -->
    <!-- Azonban lehetőség van magát az attributumot is dinamikusan megadni: -->
    <!-- A példában a no-caps és rounded attribútumokat váltogatjuk -->
    <!-- Értéküket az isActive reaktív változó határozza meg: -->
    <q-btn :[attribNeve]="isActive">Péda dinamikus attribútumra</q-btn>
    <div>
      <q-btn
        color="primary"
        glossy
        :label="attribNeve == 'no-caps' ? 'no-caps' : 'rounded'"
        no-caps
        @click="toggleAttrib()"
      />
      <q-btn color="primary" glossy :label="`isActive = ${isActive}`" no-caps @click="toggleActive()" />
    </div>

    <!-- További lehetőségek a binding-ra (pl.: Binding to Arrays) -->
    <!-- https://vuejs.org/guide/essentials/class-and-style.html -->
  </q-page>
</template>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
  // font-size: 40px;
}
.q-banner {
  font-size: 20px;
  color: red;
  width: 300px;
  background-color: lightblue;
}

#myId {
  color: blue;
}
</style>
