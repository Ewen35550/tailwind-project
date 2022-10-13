<template>
  <nav class="w-[200px] h-full bg-gray-200 py-8 px-4 fixed rounded-r-xl">
    <h1 class="text-3xl font-semibold text-center">Brand</h1>

    <div class="mt-8 gap-3">
      <template v-for="item in itemsNav" :key="item">
        <ItemNav :item="item" />
      </template>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ItemNav, { NavbarItem } from "@/components/layouts/ItemNav.vue";

export default defineComponent({
  name: "NavBar",
  components: { ItemNav },
  props: {
    itemsNav: {
      type: Array as PropType<NavbarItem[]>,
      required: true,
    },
  },
});
</script>

<style></style>
