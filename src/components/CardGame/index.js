import React from "react";
import { Typography } from "@material-ui/core";

import Number from "../Number";
import { CardsContainer, Container } from "./styles";

function CardGame({ title, numbers = [], selecteds = [] }) {
  return (
    <Container>
      <Typography variant="body1">{title}</Typography>
      <CardsContainer>
        {numbers.map((number) => (
          <Number
            key={number}
            selected={selecteds.includes(number)}
            value={number}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default CardGame;
