import React, { memo } from "react";

import { Container, SCAvatar } from "./styles";

function Number({ value, onClick = () => {}, disabled }) {
  return (
    <Container onClick={() => onClick(value)}>
      <SCAvatar disabled={disabled}>{value}</SCAvatar>
    </Container>
  );
}

export default memo(Number);
