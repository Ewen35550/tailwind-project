<template>
  <article class="ml-[200px] p-12">
    <h1 class="text-4xl font-semibold">Bienvenue !</h1>

    <section class="mt-9">
      <header class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-medium">Artistes populaires</h2>
        <router-link to="rappeurs" class="hover:underline">
          Voir plus
        </router-link>
      </header>
      <div class="w-full overflow-hidden">
        <div class="overflow-x-auto scrollbar flex gap-4">
          <template v-for="rappeur in rappeurs" :key="rappeur">
            <RappeurCard :rappeur="rappeur" />
          </template>
        </div>
      </div>
    </section>

    <section class="mt-9">
      <header class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-medium">Sorties de la semaine</h2>
        <router-link to="albums" class="hover:underline">
          Voir plus
        </router-link>
      </header>
      <div class="w-full overflow-hidden">
        <div class="overflow-x-auto scrollbar flex gap-4">
          <template v-for="album in albums" :key="album">
            <AlbumCard :album="album" />
          </template>
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RappeurCard from "@/components/rappeurs/RappeurCard.vue";
import { Rappeur } from "@/interfaces/rappeur.interface";
import AlbumCard from "@/components/albums/AlbumCard.vue";
import { Album } from "@/interfaces/album.interface";

import { getAllRappeurs } from "@/services/rappeurs";
import albumsJson from "@/assets/data/albums.json";

export default defineComponent({
  name: "HomeView",
  components: { RappeurCard, AlbumCard },
  data() {
    return {
      rappeurs: [] as Rappeur[],
      albums: [...albumsJson] as Album[],
    };
  },
  beforeMount() {
    this.rappeurs = getAllRappeurs();
  },
});
</script>
