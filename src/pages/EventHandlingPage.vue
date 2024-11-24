<!-- 07. - Event Handling -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/event-handling.html -->

<!-- Eseményt és esemény kezelő összekötésére a v-on direktíva szolgál. -->
<!-- A v-on vue.js direktíva rövidítése: "v-on:" helyett "@" -->
<!-- Az eseménykezelő általában egy függvény, de helyén egyszerű JS/TS -->
<!-- kifejezés is állhat (pl.: counter++) -->

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const counter = ref(0);
const name = ref(null);
const age = ref(null);
const accept = ref(false);

function onSubmit() {
  if (accept.value !== true) {
    // $q.notify('You need to accept the license and terms first');
    $q.notify({
      color: 'red-5',
      icon: 'warning',
      message: 'You need to accept the license and terms first',
    });
  } else {
    $q.notify({
      color: 'green-4',
      icon: 'cloud_done',
      message: 'Submitted',
    });
  }
}

function onReset() {
  name.value = null;
  age.value = null;
  accept.value = false;
}

function warn(message: string, event: Event) {
  // now we have access to the native event
  alert(`Message: ${message} - Event type: ${event.type}`);
}
</script>

<template>
  <q-page class="column flex-center">
    <h4>Inline Handlers</h4>
    <q-btn color="primary" glossy no-caps @click="counter++">Counter: {{ counter }}</q-btn>

    <h4>Accessing typed 'event' Argument in Inline Handlers</h4>
    <q-btn color="primary" glossy label="Submit" no-caps stack @click="(event: Event) => warn('Hello World!', event)" />

    <h4>Quasar basic form</h4>
    <q-form class="q-ma-sm q-pa-sm bg-deep-orange-1" @reset="onReset()" @submit="onSubmit">
      <q-input
        v-model="name"
        clearable
        filled
        hint="Name and surname"
        label="Your name *"
        lazy-rules
        :rules="[(val: any) => (val !== null && val !== '') || 'Please type something']"
      />

      <q-input
        v-model.number="age"
        clearable
        filled
        label="Your age *"
        lazy-rules
        :rules="[
          (val: any) => (val !== null && val !== '') || 'Please type your age',
          (val: any) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
        type="number"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" name="accept" />

      <div>
        <q-btn id="submit" color="primary" glossy label="Submit" type="submit" />
        <q-btn id="reset" class="q-ml-sm" color="red-5" glossy label="Reset" type="reset" />
      </div>
    </q-form>
  </q-page>
</template>

<style lang="scss" scoped>
h4 {
  margin: 3px;
}
</style>

<!-- Event Modifiers -->
<!-- https://vuejs.org/guide/essentials/event-handling.html#event-modifiers -->

<!-- Key modifiers -->
<!-- https://vuejs.org/guide/essentials/event-handling.html#key-modifiers -->
