<template>
  <div class="w-full min-h-screen bg-white">
    <Navbar :itemsNav="itemsNav" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/layouts/Navbar.vue";
import { NavbarItem } from "@/components/layouts/ItemNav.vue";

export default defineComponent({
  name: "HomeView",
  components: { Navbar },
  data() {
    return {
      itemsNav: [
        {
          text: "Dashboard",
          nameRoute: "dashboard-view",
          icon: "element-2",
        },
        {
          text: "Rappeurs",
          nameRoute: "list-rappeurs",
          icon: "microphone-2",
        },
        {
          text: "Albums",
          nameRoute: "list-albums",
          icon: "music-dashboard",
        },
      ] as NavbarItem[],
    };
  },
});
</script>

<style></style>
