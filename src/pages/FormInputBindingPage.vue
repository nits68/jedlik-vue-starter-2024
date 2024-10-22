<script setup lang="ts">
// Vue.js Guide: https://vuejs.org/guide/essentials/reactivity-fundamentals.html
import { ref } from 'vue';

const submitted = ref(false);
const submitEmpty = ref(false);

const acceptAgreement = ref(false);
const subscribeNewsletter = ref(null);

const genreRock = ref('rock');
const genreFunk = ref(false);
const genrePop = ref('pop');

interface IFormData {
  name: string;
  value: FormDataEntryValue;
}
const submitResult = ref<IFormData[]>([]);

function onSubmit(evt: Event) {
  submitted.value = true;
  submitResult.value = [];

  const formData: FormData = new FormData(evt.target as HTMLFormElement);

  formData.forEach((value, name) => {
    submitResult.value.push({
      name,
      value,
    });
  });
  submitEmpty.value = submitResult.value.length === 0;
}
</script>

<template>
  <q-page class="column flex-center">
    <q-form class="q-gutter-md" @submit="onSubmit">
      <div class="q-pa-sm rounded-borders bg-grey-2">
        <q-checkbox v-model="acceptAgreement" label="Accept agreement" name="accept_agreement" />

        <q-checkbox
          v-model="subscribeNewsletter"
          label="Subscribe to newsletter"
          name="subscribe_newsletter"
          true-value="YES"
        />
      </div>

      <div class="q-pa-sm rounded-borders bg-grey-2">
        <q-checkbox v-model="genreRock" label="Rock" name="music_genre" true-value="rock" />

        <q-checkbox v-model="genreFunk" label="Funk" name="music_genre" true-value="funk" />

        <q-checkbox v-model="genrePop" label="Pop" name="music_genre" true-value="pop" />
      </div>

      <div>
        <q-btn color="primary" label="Submit" type="submit" />
      </div>
    </q-form>
    <q-card v-if="submitted" bordered class="q-mt-md bg-grey-2" flat>
      <template v-if="submitEmpty">
        <q-card-section> Submitted form contains empty formData. </q-card-section>
      </template>
      <template v-else>
        <q-card-section>Submitted form contains the following formData (key -> value):</q-card-section>
        <q-separator></q-separator>
        <q-card-section class="row q-gutter-sm items-center">
          <div
            v-for="(item, index) in submitResult"
            :key="index"
            class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
          >
            {{ item.name }} -> {{ item.value }}
          </div>
        </q-card-section>
      </template>
    </q-card>
    {{ submitResult }}
  </q-page>
</template>

<style lang="scss" scoped></style>
