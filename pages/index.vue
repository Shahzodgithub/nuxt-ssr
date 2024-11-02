<template>
  <v-container v-if="homePage">
    <head>
      <title>{{ homePage.title || "Home" }}</title>
      <meta name="keywords" :content="homePage.metaKeywords || ''" />
    </head>
    <v-card>
      <v-card-title>{{
        homePage.title || "Welcome to Home Page"
      }}</v-card-title>
      <v-card-text
        v-html="homePage.content || 'This is the home page content.'"
      ></v-card-text>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card>
      <v-card-title>Page Not Found</v-card-title>
      <v-card-text
        >Sorry, the Homepage you're looking for doesn't exist.</v-card-text
      >
    </v-card>
  </v-container>
</template>

<script setup>
import { usePagesStore } from "~/stores/index";
import { computed, onMounted } from "vue";

const store = usePagesStore();

await useAsyncData("user", () => store.fetchPages());

const homePage = computed(() =>
  store.pages ? store.pages?.find((page) => page.slug === "home") : ''
);
</script>