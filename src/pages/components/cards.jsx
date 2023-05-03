import React, { useEffect, useState } from "react";
import PokemonImage from "./image";

const Card = ({ handleScore, score }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([
      {
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        id: 0,
      },
      { img: "https://images.gameinfo.io/pokemon/256/p6f102s1.png", id: 1 },
      {
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f2.png",
        id: 2,
      },
      {
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        id: 3,
      },
      { img: "https://img.pokemondb.net/artwork/avif/squirtle.avif", id: 4 },
      { img: "https://img.pokemondb.net/artwork/avif/raticate.avif", id: 5 },
      { img: "https://img.pokemondb.net/artwork/avif/clefable.avif", id: 6 },
      { img: "https://img.pokemondb.net/artwork/avif/growlithe.avif", id: 7 },
      { img: "https://img.pokemondb.net/artwork/avif/rapidash.avif", id: 8 },
      { img: "https://img.pokemondb.net/artwork/avif/shellder.avif", id: 9 },
      { img: "https://img.pokemondb.net/artwork/avif/exeggutor.avif", id: 10 },
      { img: "https://img.pokemondb.net/artwork/avif/tangela.avif", id: 11 },
      { img: "https://img.pokemondb.net/artwork/avif/magmar.avif", id: 12 },
      { img: "https://img.pokemondb.net/artwork/avif/gyarados.avif", id: 13 },
      { img: "https://img.pokemondb.net/artwork/avif/pichu.avif", id: 14 },
      {
        img: "https://img.pokemondb.net/news/2023/area-zero-mystery-pokemon.jpg",
        id: 15,
      },
      { img: "https://img.pokemondb.net/artwork/avif/articuno.avif", id: 16 },
      { img: "https://img.pokemondb.net/artwork/avif/snorlax.avif", id: 17 },
    ]);
  }, []);

  const handleCardClicked = (id) => {
    handleScore(id);
  };

  useEffect(() => {
    setCards((prevState) => [...prevState.sort(() => Math.random() - 0.5)]);
  }, [score]);

  return (
    <>
      {cards.map((card) => {
        return (
          <div
            className="h-44 w-44 bg-white rounded shadow-2xl drop-shadow hover:cursor-pointer hover:-translate-y-1 transition"
            key={card.id}
            onClick={() => {
              handleCardClicked(card.id);
            }}
          >
            <PokemonImage image={card} />
          </div>
        );
      })}
    </>
  );
};

export default Card;
