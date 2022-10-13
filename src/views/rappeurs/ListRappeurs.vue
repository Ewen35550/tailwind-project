<template>
  <article class="ml-[200px] p-12">
    <h1 class="text-4xl font-semibold">Liste des rappeurs</h1>
    <div class="pt-9 pb-8 sticky top-0 bg-white">
      <div>
        <template v-for="letter in alph" :key="letter.id">
          <a :href="`#${letter}`" class="cursor-pointer hover:underline">{{
            letter
          }}</a>
          <span v-if="letter !== alph[alph.length - 1]" class="cursor-default">
            -
          </span>
        </template>
      </div>
    </div>
    <template v-for="item in list" :key="item">
      <section :id="item.letter" class="mb-7">
        <h2 class="text-lg">{{ item.letter }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
          <template v-for="rappeur in item.rappeurs" :key="rappeur">
            <router-link
              :to="`rappeurs/${rappeur.image}`"
              class="bg-blue-200 hover:bg-blue-300 p-2 flex items-center rounded"
            >
              <img
                :src="getImage(rappeur.image)"
                class="w-8 h-8 rounded-full mr-4"
              />
              <p>{{ rappeur.name }}</p>
            </router-link>
          </template>
        </div>
      </section>
    </template>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getListAlphOfRappeurs } from "@/services/rappeurs";

export default defineComponent({
  name: "ListRappeurs",
  data() {
    return {
      alph: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      list: getListAlphOfRappeurs(),
    };
  },
  methods: {
    getImage(img: string) {
      return require(`@/assets/img/rappeurs/${img}.jpg`);
    },
  },
});
</script>
