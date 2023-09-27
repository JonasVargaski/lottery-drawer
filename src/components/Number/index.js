import React from "react";
import { Container } from "./styles";

function Number({ value, selected }) {
  return <Container selected={selected}>{value}</Container>;
}

export default Number;
