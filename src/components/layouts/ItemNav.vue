<template>
  <router-link
    :to="{ name: item.nameRoute }"
    :class="`flex p-2 rounded ${selected && 'bg-blue-500'}`"
    @click="$emit('click')"
  >
    <img :src="getSvgLink()" class="mr-3" />
    <span>{{ item.text }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface NavbarItem {
  text: string;
  nameRoute: string;
  icon: string;
}

export default defineComponent({
  name: "ItemNav",
  props: {
    item: {
      type: Object as PropType<NavbarItem>,
      required: true,
    },
  },
  computed: {
    active() {
      return this.item.nameRoute === document.location.pathname;
    },
    selected() {
      return this.$route.name === this.item.nameRoute;
    },
  },
  methods: {
    getSvgLink(): string | undefined {
      if (this.item.icon) {
        if (this.selected) {
          return require(`@/assets/iconsax/icons/bold/${this.item.icon}.svg`);
        }
        return require(`@/assets/iconsax/icons/linear/${this.item.icon}.svg`);
      }
    },
  },
});
</script>

<style></style>
