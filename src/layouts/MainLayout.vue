<!-- Material Design Icons: https://materialdesignicons.com/ -->
<!-- Material icons: https://mui.com/material-ui/material-icons/ -->

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const r = useRoute();

const showMenuBar = ref(true);
const showLeftDrawer = ref(true);
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="hHh LpR fFf">
      <!-- Header: -->
      <q-header v-model="showMenuBar" class="text-left bg-blue-5" elevated reveal>
        <!-- Menu bar: -->
        <q-toolbar>
          <q-btn dense flat icon="menu" round @click="showLeftDrawer = !showLeftDrawer" />
        </q-toolbar>
      </q-header>

      <!-- Left drawer: -->
      <q-drawer v-model="showLeftDrawer" bordered :breakpoint="600" :width="300">
        <q-scroll-area class="fit bg-blue-1">
          <q-btn
            align="left"
            class="full-width no-margin"
            :class="{ active: r.path === '/' }"
            flat
            icon="mdi-home"
            label="Home"
            no-caps
            to="/"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/interpolation' }"
            flat
            icon="mdi-code-braces-box"
            label="Text interpolation"
            no-caps
            to="/interpolation"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/reactive' }"
            flat
            icon="mdi-refresh-auto"
            label="Reactive System"
            no-caps
            to="/reactive"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/computed' }"
            flat
            icon="mdi-calculator"
            label="Computed Properies"
            no-caps
            to="/computed"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/bindings' }"
            flat
            icon="mdi-vuejs"
            label="Bindings (v-bind)"
            no-caps
            to="/bindings"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/conditional' }"
            flat
            icon="mdi-arrow-decision-auto-outline"
            label="Conditional rendering (v-if, v-show)"
            no-caps
            to="/conditional"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/list' }"
            flat
            icon="mdi-list-box"
            label="List rendering (v-for)"
            no-caps
            to="/list"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/event' }"
            flat
            icon="mdi-cat"
            label="Event handling (v-on)"
            no-caps
            to="/event"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/form' }"
            flat
            icon="mdi-form-select"
            label="Form Input Binding (v-model)"
            no-caps
            to="/form"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/lifecycle' }"
            flat
            flexbox
            icon="mdi-recycle"
            label="Lifecycle hooks"
            no-caps
            to="/lifecycle"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/watchers' }"
            flat
            flexbox
            icon="mdi-binoculars"
            label="Watchers"
            no-caps
            to="/watchers"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/templaterefs' }"
            flat
            flexbox
            icon="mdi-information"
            label="Template refs"
            no-caps
            to="/templaterefs"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/componentsbasics' }"
            flat
            flexbox
            icon="mdi-view-quilt"
            label="Components basics"
            no-caps
            to="/componentsbasics"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/complex' }"
            flat
            flexbox
            icon="mdi-widgets"
            label="Complex page"
            no-caps
            to="/complex"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/flexbox' }"
            flat
            flexbox
            icon="mdi-apps-box"
            label="Quasar flexbox"
            no-caps
            to="/flexbox"
          />
          <q-btn
            align="left"
            class="full-width"
            :class="{ active: r.path === '/qtable' }"
            flat
            flexbox
            icon="mdi-table"
            label="Quasar table"
            no-caps
            to="/qtable"
          />
        </q-scroll-area>
      </q-drawer>

      <!-- Main container (DON'T DELETE!) -->
      <q-page-container id="container">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style>
.active {
  background-color: #44a5f1;
  color: yellow;
}
</style>
