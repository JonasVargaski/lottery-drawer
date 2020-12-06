import React, { memo } from "react";
import { Typography } from "@material-ui/core";

import Number from "../Number";
import { Container } from "./styles";

function CardGame({
  title,
  numbers = [],
  selecteds = [],
  handleChange = () => {},
}) {
  return (
    <Container>
      <Typography>{title}</Typography>
      <div>
        {numbers.map((number) => (
          <Number
            key={number}
            disabled={!selecteds.includes(number)}
            value={number}
            onClick={handleChange}
          />
        ))}
      </div>
    </Container>
  );
}

export default memo(CardGame);
