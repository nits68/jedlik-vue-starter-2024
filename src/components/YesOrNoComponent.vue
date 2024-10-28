<script setup lang="ts">
// A szülő oldal(komponens) ---> gyermek komponens irányba propery-vel komminikálhatunk
// A példában típusos property-t használtam, alapértelmezett értékekkel
// Célszerű interfészt használni az attributumok azonosítóinak és típusainak definiálására
// A kérdőjel jelzi, hogy az adott attribútum opcionális, ha nem adjuk meg, akkor alapértelmezett értéket kap
interface IProps {
  kérdés?: string;
  igenFelirat?: string;
  nemFelirat?: string;
}

// A withDefaults és a defineProps Vue.js makro függvények, nem kell őket importálni
const props = withDefaults(defineProps<IProps>(), {
  kérdés: 'Igen vagy nem?',
  igenFelirat: 'Igen',
  nemFelirat: 'Nem',
});

// A defineEmits Vue.js makro függvény, nem kell importálni
// A gyermek komponens ---> szülő oldal(komponens) irányba eseményeken keresztül tudunk kommunikálni
const myEmit = defineEmits<{
  (e: 'btnPressed', result: boolean): void;
}>();
</script>

<template>
  <div class="column flex-center bg-blue q-my-md">
    <div class="col-12">
      {{ props.kérdés }}
      <q-btn class="q-ma-md" color="green" glossy :label="igenFelirat" no-caps @click="myEmit('btnPressed', true)" />
      <q-btn class="q-ma-md" color="red" glossy :label="nemFelirat" no-caps @click="myEmit('btnPressed', false)" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
