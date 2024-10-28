<!-- 08. - Form input bindings - v-model -->
<!-- Vue.js Guide: https://vuejs.org/guide/essentials/forms.html -->

<script setup lang="ts">
import { reactive } from 'vue';

interface IFormData {
  name: string;
  value: FormDataEntryValue;
}

interface IStore {
  submitted: boolean;
  submitResult: IFormData[];
  submitEmpty: boolean | null;
  acceptAgreement: boolean | null;
  subscribeNewsletter: string | null;
  genreRock: string | null;
  genreFunk: string | null;
  genrePop: string | null;
}

const store: IStore = reactive({
  submitted: false,
  submitResult: [],
  submitEmpty: false,
  acceptAgreement: false,
  subscribeNewsletter: null,
  genreRock: 'rock',
  genreFunk: 'funk',
  genrePop: 'pop',
});

function onReset() {
  store.submitted = false;
  store.submitResult = [];
  store.submitEmpty = null;
  store.acceptAgreement = null;
  store.subscribeNewsletter = null;
  store.genreRock = null;
  store.genreFunk = null;
  store.genrePop = null;
}

function onSubmit(evt: Event) {
  store.submitted = true;
  store.submitResult = [];

  const formData: FormData = new FormData(evt.target as HTMLFormElement);

  formData.forEach((value, name) => {
    store.submitResult.push({
      name,
      value,
    });
  });
  store.submitEmpty = store.submitResult.length === 0;
}
</script>

<template>
  <q-page class="column flex-center">
    <q-form class="q-gutter-md" @reset="onReset" @submit="onSubmit">
      <div class="q-pa-sm rounded-borders bg-grey-2">
        <q-checkbox v-model="store.acceptAgreement" label="Accept agreement" name="accept_agreement" />

        <q-checkbox
          v-model="store.subscribeNewsletter"
          false-value="NO"
          label="Subscribe to newsletter"
          name="subscribe_newsletter"
          true-value="YES"
        />
      </div>

      <div class="q-pa-sm rounded-borders bg-grey-2">
        <q-checkbox v-model="store.genreRock" label="Rock" name="music_genre" true-value="rock" />

        <q-checkbox v-model="store.genreFunk" label="Funk" name="music_genre" true-value="funk" />

        <q-checkbox v-model="store.genrePop" label="Pop" name="music_genre" true-value="pop" />
      </div>

      <div>
        <q-btn color="primary" label="Submit" no-caps type="submit" />
        <q-btn class="q-ml-md bg-red-3" label="Reset" no-caps type="reset" />
      </div>
    </q-form>
    <q-card v-if="store.submitted" bordered class="q-mt-md bg-grey-2" flat>
      <template v-if="store.submitEmpty">
        <q-card-section> Submitted form contains empty formData. </q-card-section>
      </template>
      <template v-else>
        <q-card-section>Submitted form contains the following formData (key -> value):</q-card-section>
        <q-separator></q-separator>
        <q-card-section class="row q-gutter-sm items-center">
          <div
            v-for="(item, index) in store.submitResult"
            :key="index"
            class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
          >
            {{ item.name }} -> {{ item.value }}
          </div>
        </q-card-section>
      </template>
    </q-card>
    <h4>Store object:</h4>
    <span v-for="(v, k) in store" :key="k">{{ k }}: {{ v }}</span>
  </q-page>
</template>

<style lang="scss" scoped></style>
