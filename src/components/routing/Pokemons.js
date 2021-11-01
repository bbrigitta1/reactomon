import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd/lib/radio";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import CardPokemon from "../CardPokemon";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [items, setItems] = useState({
    next: null,
    previous: null,
    pokemons: [],
  });

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setItems({
        next: response.data.next,
        previous: response.data.previous,
        pokemons: response.data.results,
      });
    });
  }, [url]);

  const handleLeftClick = (e) => {
    e.stopPropagation();
    if (items.previous) {
      setUrl(items.previous);
    }
  };
  const handleRightClick = (e) => {
    e.stopPropagation();
    if (items.next) {
      setUrl(items.next);
    }
  };

  return (
    <div>
      <div className="navbuttons">
        <Button key="button1" variant="light" onClick={handleLeftClick}>
          <CaretLeftFill />
        </Button>{" "}
        <Button key="button2" variant="light" onClick={handleRightClick}>
          <CaretRightFill />
        </Button>{" "}
      </div>

      <div className="cards-container" style={cardsContainerStyle}>
        {items.pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <CardPokemon
              data={{
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.url
                  .split("pokemon/")
                  .pop()
                  .replace("/", "")}.png`,
                pokeName: (
                  <Link
                    className="card-text"
                    to={`/pokemons/${pokemon.url
                      .split("pokemon/")
                      .pop()
                      .replace("/", "")}`}
                  >
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Link>
                ),
              }}
            ></CardPokemon>
          </div>
        ))}
      </div>
    </div>
  );
};

const cardsContainerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}

export default Pokemons;
