import { Router } from "express";
import { Film } from "../types";

const films: Film[] = [
  {
    id: 1,
    title: "About time",
    director: "Richard Curtis",
    duration: 123,
    budget: 12,
    description: "À l'âge de 21 ans, Tim découvre qu'il peut voyager dans le temps et changer ce qui a pu se passer dans sa vie. Sa décision de rendre son monde meilleur en trouvant une petite amie n'est pas aussi simple qu'on le pense.",
    imageUrl:
      "https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8=",
  },
  {
    id: 2,
    title: "Coca-Cola",
    director: "blabla",
    duration: 120,
    budget: 10,
    description: "blabla",
    imageUrl:
      "https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8=",
  },
  {
    id: 3,
    title: "Coca-Cola",
    director: "blabla",
    duration: 120,
    budget: 10,
    description: "blabla",
    imageUrl:
      "https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8=",
  },
];

const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;