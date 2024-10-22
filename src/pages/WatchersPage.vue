<script setup lang="ts">
import { ref, Ref, watch } from 'vue';

const question: Ref<string> = ref('');
const oldValue: Ref<string> = ref('');
const imgURL: Ref<string> = ref('None');
const answer: Ref<string> = ref('Questions usually end with a question mark. ;-)');
const loading: Ref<boolean> = ref(false);

interface IYesNoAPIResponse {
  answer: string;
  forced: boolean;
  image: string;
}

watch(question, async (newValue, old) => {
  oldValue.value = old;
  if (newValue.endsWith('?') && newValue.length > 1) {
    loading.value = true;
    answer.value = 'Thinking...';
    imgURL.value = 'None';
    try {
      await fetch('https://yesno.wtf/api')
        .then((res) => res.json())
        .then((data: IYesNoAPIResponse) => {
          answer.value = data.answer;
          imgURL.value = data.image;
        });
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error;
    } finally {
      loading.value = false;
    }
  } else {
    answer.value = 'Questions usually end with a question mark. ;-)';
    imgURL.value = 'None';
  }
});
</script>

<template>
  <q-page class="column flex-center">
    <q-input v-model="question" clearable label="Ask a yes/no question:" :loading outlined />
    <q-banner class="bg-yellow-4" rounded>(Previous value was: {{ oldValue }})</q-banner>
    <q-banner :class="answer === 'no' ? 'bg-red-5' : 'bg-green-5'" rounded>API answer: {{ answer }}</q-banner>
    <q-card v-if="['yes', 'no'].includes(answer)" class="my-card">
      <q-img :src="imgURL">
        <div class="absolute-bottom text-subtitle3 text-center">
          {{ answer.toUpperCase() }}
        </div>
      </q-img>
    </q-card>
  </q-page>
</template>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 450px;
  border-radius: 20px;
}
</style>
