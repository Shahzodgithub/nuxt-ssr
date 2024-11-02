<template>
  <v-app>
    <v-main>
      <NuxtPage /> 
    </v-main>
  </v-app>
</template>

<script setup>
useHead({
  titleTemplate: title => (title ? `${title} - Nuxt App` : 'Nuxt App'),
  meta: [
    { name: 'description', content: 'Nuxt.js project' }]
});
</script>

<style>
/* Global styles */
body {
  font-family: 'Roboto', sans-serif;
}
</style>
