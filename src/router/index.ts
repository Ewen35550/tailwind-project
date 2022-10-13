import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../views/Main.vue";
import HomeView from "../views/HomeView.vue";
import ListAlbums from "../views/albums/ListAlbums.vue";
import Album from "../views/albums/Album.vue";
import ListRappeurs from "../views/rappeurs/ListRappeurs.vue";
import Rappeur from "../views/rappeurs/Rappeur.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Main,
    redirect: { name: "dashboard" },
    children: [
      {
        path: "dashboard",
        name: "dashboard-view",
        component: HomeView,
      },
      {
        path: "albums",
        name: "list-albums",
        component: ListAlbums,
      },
      {
        path: "albums/:name",
        name: "album-view",
        component: Album,
      },
      {
        path: "rappeurs",
        name: "list-rappeurs",
        component: ListRappeurs,
      },
      {
        path: "rappeurs/:name",
        name: "rappeur-view",
        component: Rappeur,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
