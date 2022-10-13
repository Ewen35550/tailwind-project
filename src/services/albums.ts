import {
  Album,
  AlbumWithSongs,
  ListAlbums,
} from "@/interfaces/album.interface";
import { Song } from "@/interfaces/song.interface";
import albumsJson from "@/assets/data/albums.json";
import songsJson from "@/assets/data/songs.json";

export function getAllAlbums(): Album[] {
  return albumsJson;
}

export function getAlbumsByName(name: string): Album {
  const albums: Album[] = [...albumsJson];

  const album = albums.filter(
    (album) => album.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  )[0];

  return album;
}

export function getAlbumsByImage(image: string): AlbumWithSongs {
  const albums: Album[] = [...albumsJson];
  const allSongs: Song[] = [...songsJson];

  const album = albums.filter(
    (album) => album.image.toLocaleLowerCase() === image.toLocaleLowerCase()
  )[0];

  const songs = allSongs.filter(
    (song) => song.album.toLocaleLowerCase() === image.toLocaleLowerCase()
  )[0];

  return {
    ...album,
    songs: songs.songs,
  };
}

export function getAllAlbumsByRappeur(rappeurName: string): Album[] {
  const albums: Album[] = [...albumsJson];

  const album = albums.filter(
    (album) =>
      album.rappeur.toLocaleLowerCase() === rappeurName.toLocaleLowerCase() &&
      album.type === "album"
  );

  return album;
}

export function getAllSinglesByRappeur(rappeurName: string): Album[] {
  const albums: Album[] = [...albumsJson];

  const album = albums.filter(
    (album) =>
      album.rappeur.toLocaleLowerCase() === rappeurName.toLocaleLowerCase() &&
      album.type === "single"
  );

  return album;
}

export function getListAlphOfAlbums(): ListAlbums[] {
  const alph = [
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
  ];

  const allAlbums: Album[] = [...albumsJson];
  const listOfAlbums: ListAlbums[] = [];

  alph.forEach((letter) => {
    const albumsByLetter = allAlbums.filter(
      (album) => album.name[0].toLocaleUpperCase() === letter
    );

    if (albumsByLetter.length > 0) {
      listOfAlbums.push({
        letter: letter,
        albums: albumsByLetter,
      });
    }
  });

  return listOfAlbums;
}
