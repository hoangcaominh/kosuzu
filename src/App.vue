<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <Toast />
  <div class="container mx-auto space-y-6">
    <header>
      <nav class="grid grid-cols-2 gap-1">
        <RouterLink
          class="p-5 text-2xl text-center border rounded-md border-solid border-gray-500 hover:bg-gray-100 active:bg-gray-300"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="p-5 text-2xl text-center border rounded-md border-solid border-gray-500 hover:bg-gray-100 active:bg-gray-300"
          to="/about"
          >About</RouterLink
        >
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
