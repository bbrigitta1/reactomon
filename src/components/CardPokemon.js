import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

const { Meta } = Card;

const CardPokemon = ({data}) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={data.img}
        />
      }
    >
      <Meta title={data.pokeName} description="" />
    </Card>
  );
};

export default CardPokemon;
