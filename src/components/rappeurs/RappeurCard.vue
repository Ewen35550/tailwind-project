<template>
  <router-link :to="`/rappeurs/${rappeur.image}`">
    <div class="w-[200px] h-[200px] overflow-hidden rounded-full">
      <img
        :src="getImage()"
        class="w-full h-full hover:scale-110 duration-300"
      />
    </div>
    <div class="py-3">
      <p class="text-center text-lg">{{ rappeur.name }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Rappeur } from "@/interfaces/rappeur.interface";

export default defineComponent({
  name: "RappeurCard",
  props: {
    rappeur: {
      type: Object as PropType<Rappeur>,
      required: true,
    },
  },
  methods: {
    getImage() {
      return require(`@/assets/img/rappeurs/${this.rappeur.image}.jpg`);
    },
  },
});
</script>

<style></style>
