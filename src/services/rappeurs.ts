import { Rappeur, ListRappeurs } from "@/interfaces/rappeur.interface";
import rappeursJson from "@/assets/data/rappeurs.json";

export function getAllRappeurs(): Rappeur[] {
  return rappeursJson;
}

export function getRappeur(name: string): Rappeur {
  const rappeurs: Rappeur[] = [...rappeursJson];

  const rappeur = rappeurs.filter(
    (artist) => artist.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  )[0];

  return rappeur;
}

export function getRappeurByImage(image: string): Rappeur {
  const rappeurs: Rappeur[] = [...rappeursJson];

  const rappeur = rappeurs.filter(
    (artist) => artist.image.toLocaleLowerCase() === image.toLocaleLowerCase()
  )[0];

  return rappeur;
}

export function getListAlphOfRappeurs(): ListRappeurs[] {
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

  const allRappeurs: Rappeur[] = [...rappeursJson];
  const listOfRappeurs: ListRappeurs[] = [];

  alph.forEach((letter) => {
    const rappeurByLetter = allRappeurs.filter(
      (rappeur) => rappeur.name[0].toLocaleUpperCase() === letter
    );

    if (rappeurByLetter.length > 0) {
      listOfRappeurs.push({
        letter: letter,
        rappeurs: rappeurByLetter,
      });
    }
  });

  return listOfRappeurs;
}
