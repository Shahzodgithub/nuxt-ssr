<template>
  <v-container fluid v-if="page">
    <Head>
      <Title>{{ page?.title }}</Title>
      <Meta name="description" :content="page?.title" />
    </Head>
    <v-row>
      <v-col>
        <v-card class="elevation-1 py-100" v-if="page?.title">
          <v-card-title class="headline">{{ page?.title }}</v-card-title>
          <v-card-subtitle>
            <v-chip color="blue" text-color="white" v-if="page?.keywords">
              {{ page?.keywords }}
            </v-chip>
          </v-card-subtitle>
          <v-card-text v-html="page?.content" class="my-3"></v-card-text>
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
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePagesStore } from "@/stores/index";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

const store = usePagesStore();
const page = ref([]);

const slug = (await useRoute().params.slug) || "/";

const  {data}  = await useFetch(async () => {
  const q = query(collection(db, "pages"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  page.value = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() }
  console.log(data)
  return data
});
</script>
