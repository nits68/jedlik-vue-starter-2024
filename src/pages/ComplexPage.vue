<script setup lang="ts">
import { Ref, onMounted, onUpdated, reactive, ref, watch, computed } from 'vue';
import YesOrNoComponent from '../components/YesOrNoComponent.vue';

// Reaktivitás:
let rektívVáltozó: Ref<number> = ref(123);

interface IRectiveObject {
  count: number;
  napok: Array<string>;
  inputNap: string;
  yesNoResult: boolean | string;
}
const state = reactive<IRectiveObject>({
  count: 0,
  napok: ['hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek'],
  inputNap: '',
  yesNoResult: 'még nincs válasz',
});

const myColors: string[] = ['red', 'yellow', 'cyan', 'magenta'];

const számláló: Ref<number> = ref(0);

// Mezei JS függvény
setInterval(() => {
  rektívVáltozó.value++;
  state.count++; // nincs .value !!!!
}, 1000);

// itt szokás az oldal betöltése után az api-tól az adatok lekérését kezdeményezni
onMounted(() => {
  console.log('onMounted');
});

// Ha <q-page> tagben van az oldal, akkor az onUpdated metódust a szűlőnél hívja, itt nem!
onUpdated(() => {
  console.log('onUpdated');
});

watch(számláló, (newValue: number) => {
  console.log(`számláló is ${newValue}`);
});

function napEllenorzese(): boolean {
  const joNapok: string[] = ['', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat', 'vasárnap'];
  return joNapok.includes(iNap.value);
}

const iNap = computed(() => state.inputNap.toLowerCase());

function joNapHozzadni() {
  return iNap.value !== '' && napEllenorzese() && !state.napok.includes(iNap.value);
}

function hozzadNap(): void {
  state.napok.push(iNap.value);
  state.inputNap = '';
}

function joNapTorolni(): boolean {
  return state.napok.includes(iNap.value);
}

function torolNap(): void {
  state.napok = state.napok.filter((i) => i !== iNap.value);
  state.inputNap = '';
}

function yesNoHandler(result: boolean) {
  state.yesNoResult = result;
}
</script>

<template>
  <q-page>
    <div class="row">
      <!-- Text interpoláció (dupla bajusz) -->
      <div class="col-xs-12 col-md-6">
        <q-banner class="bg-secondary text-white q-ma-sm"
          >Text interpoláció (dupla bajusz) példa: Ez egy "reaktív" változó: {{ rektívVáltozó }}</q-banner
        >
      </div>

      <!-- v-bind (:), class binding és reaktivitás -->
      <div class="col-xs-12 col-md-6">
        <q-banner class="bg-secondary q-ma-sm" :class="rektívVáltozó % 2 == 0 ? 'text-white' : 'text-yellow'"
          >v-bind (:), class binding és reaktivitás: Ez egy reaktív "változó": {{ rektívVáltozó }}</q-banner
        >
      </div>

      <!-- v-if és v-else -->
      <div class="col-xs-12 col-md-6">
        <q-banner class="bg-secondary text-white q-ma-sm"
          >v-if és v-else példa:
          <span v-if="rektívVáltozó % 2 == 0">A szám páros</span>
          <span v-else>A szám páratlan</span></q-banner
        >
      </div>

      <!-- Reaktív objektum -->
      <div class="col-xs-12 col-md-6">
        <q-banner class="bg-secondary text-white q-ma-sm">Reaktív objektum: {{ state.count }}</q-banner>
      </div>

      <!-- v-for és style binding -->
      <div class="col-xs-12 col-md-6">
        <q-banner class="bg-secondary text-white q-ma-sm">
          v-for és style binding
          <span v-for="myC in myColors" :key="myC" :style="{ color: myC }">
            {{ myC + ', ' }}
          </span>
        </q-banner>
      </div>

      <!-- v-on (@) és v-model -->
      <div class="col-xs-12 col-md-6">
        <q-banner class="bg-secondary text-white q-ma-sm">
          v-on (@) és v-model
          <q-btn class="q-ma-sm" color="warning" glossy icon="mdi-plus" @click="számláló++" />
          <q-input
            v-model="számláló"
            bg-color="primary"
            class="inline"
            color="yellow"
            input-class="text-white"
            label="számláló"
            label-color="yellow"
            outlined
            style="width: 100px"
            type="number"
          />
          <q-btn class="q-ma-sm" color="warning" glossy icon="mdi-minus" @click="számláló--" />
          számláló = {{ számláló }}
        </q-banner>
      </div>

      <!-- v-for gyakorlás -->
      <div class="col-xs-12 col-md-6">
        <q-banner class="bg-secondary text-white q-ma-sm">
          <ol class="pa-3">
            <li v-for="nap in state.napok" :key="nap">{{ nap }}</li>
          </ol>
        </q-banner>
      </div>

      <!-- disabled és rules attribek -->
      <div class="col-xs-12 col-md-6">
        <q-banner class="bg-secondary text-white q-ma-sm">
          <q-input
            v-model="state.inputNap"
            bg-color="primary"
            class="inline q-ma-sm"
            color="yellow"
            input-class="text-white"
            label="Kérem a nap nevét!"
            label-color="yellow"
            outlined
            :rules="[(v: string) => napEllenorzese() || 'Figyeljen a helyesírásra!']"
            style="width: 300px"
            type="text"
          />
          <q-btn
            class="q-ma-sm"
            color="green-8"
            :disabled="!joNapHozzadni()"
            glossy
            label="Nap hozzáadása"
            no-caps
            @click="hozzadNap()"
          />
          <q-btn
            class="q-mr-md"
            color="red-8"
            :disabled="!joNapTorolni()"
            glossy
            label="Nap törlése"
            no-caps
            @click="torolNap()"
          />
        </q-banner>
      </div>

      <!-- Saját komponens alkalmazása -->
      <div class="col-xs-12 col-md-6">
        <q-banner class="bg-secondary text-white q-ma-sm">
          <!-- Saját komponens nevét javasolt PascalCase névkonvencióval írni -->
          <!-- De használható a snake-case is: "yes-or-no-component" alakban -->
          <YesOrNoComponent
            igen-felirat="Persze"
            kérdés="Jedlikes vagy?"
            nem-felirat="Ne már"
            @btn-pressed="yesNoHandler"
          />
          A kérdésre adott válasz:
          {{ state.yesNoResult }}
        </q-banner>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
