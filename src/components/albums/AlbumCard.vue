<template>
  <router-link :to="`/albums/${album.image}`" class="hover:underline">
    <div class="w-[200px] h-[200px] overflow-hidden rounded-lg">
      <img :src="getImage()" class="w-full h-full" />
    </div>
    <div class="p-2">
      <p class="text-lg">{{ getLabel() }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Album } from "@/interfaces/album.interface";

export default defineComponent({
  name: "RappeurCard",
  props: {
    album: {
      type: Object as PropType<Album>,
      required: true,
    },
  },
  methods: {
    getLabel() {
      return `${this.album.name} - ${this.album.rappeur}`;
    },
    getImage() {
      return require(`@/assets/img/albums/${this.album.image}.jpg`);
    },
  },
});
</script>

<style></style>
