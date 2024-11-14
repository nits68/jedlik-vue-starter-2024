<script setup lang="ts">
import { ContainerConfig } from 'konva/lib/Container';
import { CircleConfig } from 'konva/lib/shapes/Circle';
import { Ref, ref } from 'vue';

const configKonva: ContainerConfig = {
  width: 800,
  height: 600,
};

const configCircle: Ref<CircleConfig> = ref({
  x: 400,
  y: 300,
  radius: 170,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
});
</script>

<template>
  <q-page>
    <div class="flex flex-center">
      <q-badge> Radius: </q-badge>
      <q-slider v-model="configCircle.radius" label label-always :max="200" :min="20" switch-label-side />
      <v-stage :config="configKonva">
        <v-layer>
          <v-circle :config="configCircle"></v-circle>
        </v-layer>
      </v-stage>
    </div>
  </q-page>
</template>
