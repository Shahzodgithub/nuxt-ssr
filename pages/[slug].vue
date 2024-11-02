<template>
  <v-container fluid v-if="data">
    <Head>
      <Title>{{ data[0]?.title }}</Title>
      <Meta name="description" :content="data[0]?.title" />
    </Head>
    <v-row>
      <v-col>
        <v-card class="elevation-1 py-100" v-if="data[0]?.title">
          <v-card-title class="headline">{{ data[0]?.title }}</v-card-title>
          <v-card-subtitle>
            <v-chip color="blue" text-color="white" v-if="data[0]?.keywords">
              {{ data[0]?.keywords }}
            </v-chip>
          </v-card-subtitle>
          <v-card-text v-html="data[0]?.content" class="my-3"></v-card-text>
        </v-card>
        <div v-else>
          <p>Page not found</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <p>Not Found</p>
  </v-container>
  <NuxtLink to="/">Back to Homepage</NuxtLink>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePagesStore } from "@/stores/index";

const store = usePagesStore();
const page = ref([]);

const slug = (await useRoute().params.slug) || "/";
const { data } = await useFetch(`http://localhost:3009/pages?slug=${slug}`);
</script>
