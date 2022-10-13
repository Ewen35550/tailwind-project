<template>
  <article class="ml-[200px] p-12">
    <header class="flex">
      <div class="w-[250px] h-[250px] overflow-hidden rounded-full mr-6">
        <img :src="getImage()" class="w-full h-full" />
      </div>
      <div class="flex flex-col justify-center gap-4">
        <h1 class="text-4xl font-semibold mt-6">{{ rappeur.name }}</h1>
        <div class="flex items-center gap-4">
          <a href="#">
            <img
              :src="require('@/assets/iconsax/streaming/youtube.svg')"
              class="w-[24px]"
            />
          </a>
          <a href="#">
            <img
              :src="require('@/assets/iconsax/streaming/deezer.svg')"
              class="w-[24px]"
            />
          </a>
          <a href="#">
            <img
              :src="require('@/assets/iconsax/streaming/spotify.svg')"
              class="w-[24px]"
            />
          </a>
          <a href="#">
            <img
              :src="require('@/assets/iconsax/streaming/napster.svg')"
              class="w-[24px]"
            />
          </a>
          <a href="#">
            <img
              :src="require('@/assets/iconsax/streaming/soundcloud.svg')"
              class="w-[24px]"
            />
          </a>
        </div>
      </div>
    </header>

    <section class="mt-9" v-if="albums.length > 0">
      <h2 class="text-2xl font-medium">Albums</h2>

      <div class="w-full overflow-hidden mt-4">
        <div class="overflow-x-auto scrollbar flex gap-4">
          <template v-for="album in albums" :key="album">
            <AlbumCard :album="album" />
          </template>
        </div>
      </div>
    </section>

    <section class="mt-9" v-if="singles.length > 0">
      <h2 class="text-2xl font-medium">EPs & Singles</h2>

      <div class="w-full overflow-hidden mt-4">
        <div class="overflow-x-auto scrollbar flex gap-4">
          <template v-for="single in singles" :key="single">
            <AlbumCard :album="single" />
          </template>
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getRappeurByImage } from "@/services/rappeurs";
import AlbumCard from "@/components/albums/AlbumCard.vue";
import {
  getAllAlbumsByRappeur,
  getAllSinglesByRappeur,
} from "@/services/albums";

export default defineComponent({
  name: "RappeurView",
  components: { AlbumCard },
  data() {
    return {
      rappeur: getRappeurByImage(this.$route.params.name.toString()),
      albums: getAllAlbumsByRappeur(this.$route.params.name.toString()),
      singles: getAllSinglesByRappeur(this.$route.params.name.toString()),
    };
  },
  methods: {
    getImage() {
      return require(`@/assets/img/rappeurs/${this.rappeur.image}.jpg`);
    },
  },
});
</script>

<style></style>
