<script setup lang="ts"></script>

<template>
  <q-page>
    <!-- Vízszintes elrendezés (row) -->
    <!-- vízszintesen: justify-* -->
    <!-- függőlegesen: content-* -->
    <!-- Elemek igazitása egymáshoz: items-* -->
    <div class="row justify-center content-center items-center bg-blue-9" style="min-height: inherit">
      <div class="col-2 bg-blue-1" style="height: 10vh">
        <div class="row justify-center content-center" style="height: inherit">
          <div class="bg-yellow-4 q-pa-md">Jedlik</div>
        </div>
      </div>
      <div class="col-2 bg-blue-3" style="height: 20vh">
        <div class="row justify-center content-center" style="height: inherit">
          <div class="bg-yellow-4 q-pa-md">Ányos</div>
        </div>
      </div>
      <div class="col-2 bg-blue-5" style="height: 30vh">
        <div class="row justify-center content-center" style="height: inherit">
          <div class="bg-yellow-4 q-pa-md">Jedlik Ányos</div>
        </div>
      </div>
      <div class="col-3 bg-blue-7" style="height: 40vh">
        <div class="row justify-center content-center" style="height: inherit">
          <div class="bg-yellow-4 q-pa-md">Jedlik István Ányos</div>
        </div>
      </div>
    </div>

    <!-- Függőleges elrendezés elrendezés -->
    <div class="column justify-center content-center items-center bg-blue-12" style="min-height: inherit">
      <div class="bg-blue-1" style="width: 10vh; height: 5vh">
        <div class="row justify-center content-center" style="height: inherit">
          <div class="bg-yellow-4 q-pa-xs">Jedlik</div>
        </div>
      </div>
      <div class="bg-blue-3" style="width: 20vh; height: 10vh">
        <div class="row justify-center content-center" style="height: inherit">
          <div class="bg-yellow-4 q-pa-xs">Ányos</div>
        </div>
      </div>
      <div class="bg-blue-5" style="width: 30vh; height: 15vh">
        <div class="row justify-center content-center" style="height: inherit">
          <div class="bg-yellow-4 q-pa-xs">Jedlik Ányos</div>
        </div>
      </div>
      <div class="bg-blue-7" style="width: 40vh; height: 20vh">
        <div class="row justify-center content-center" style="height: inherit">
          <div class="bg-yellow-4 q-pa-xs">Jedlik István Ányos</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
