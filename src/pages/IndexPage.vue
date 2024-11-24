<script setup lang="ts">
import { type ContainerConfig } from 'konva/lib/Container';
import { type CircleConfig } from 'konva/lib/shapes/Circle';
import { type Ref, ref } from 'vue';

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
  shadowColor: 'gray',
  shadowOffset: { x: 10, y: 10 },
  shadowBlur: 10,
  shadowOpacity: 0.5,
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
          <v-text :config="{ text: 'Some text on canvas', fontSize: 15 }" />
          <v-rect
            :config="{
              x: 20,
              y: 50,
              width: 100,
              height: 100,
              fill: 'blue',
              shadowBlur: 10,
            }"
          />
          <v-circle
            :config="{
              x: 200,
              y: 100,
              radius: 50,
              fill: 'green',
            }"
          />
          <v-line
            :config="{
              x: 20,
              y: 200,
              points: [0, 0, 100, 0, 100, 100],
              tension: 0.5,
              closed: true,
              stroke: 'black',
              fillLinearGradientStartPoint: { x: -50, y: -50 },
              fillLinearGradientEndPoint: { x: 50, y: 50 },
              fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
            }"
          />
        </v-layer>
      </v-stage>
    </div>
  </q-page>
</template>
