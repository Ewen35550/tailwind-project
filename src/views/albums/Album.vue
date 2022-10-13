<template>
  <article class="ml-[200px] p-12">
    <header class="flex">
      <div class="w-[250px] h-[250px] overflow-hidden rounded mr-6">
        <img :src="getImage()" class="w-full h-full" />
      </div>
      <div class="flex flex-col justify-center gap-4">
        <h1 class="text-4xl font-semibold mt-6">{{ album.name }}</h1>
        <p class="text-lg text-gray-700">
          {{ album.rappeur }} - {{ album.songs.length }} titre
        </p>
        <div class="flex items-center gap-4">
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

    <section class="mt-9">
      <table class="w-full shadow">
        <thead class="border-b">
          <tr>
            <th class="w-10 p-3">#</th>
            <th class="text-left p-3">Titre</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(song, index) in album.songs" :key="song">
            <tr class="border-b hover:bg-gray-100">
              <td class="text-center p-3">{{ index + 1 }}</td>
              <td class="text-left p-3">{{ song.name }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAlbumsByImage } from "@/services/albums";

export default defineComponent({
  name: "AlbumView",
  data() {
    return {
      album: getAlbumsByImage(this.$route.params.name.toString()),
    };
  },
  methods: {
    getImage() {
      return require(`@/assets/img/albums/${this.album.image}.jpg`);
    },
  },
});
</script>

<style></style>
