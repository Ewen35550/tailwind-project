export interface Album {
  name: string;
  rappeur: string;
  image: string;
  type: string;
}

export interface AlbumWithSongs extends Album {
  songs: { name: string }[];
}

export interface ListAlbums {
  letter: string;
  albums: Album[];
}
