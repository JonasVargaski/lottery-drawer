import styled from "styled-components";
import { Card } from "@material-ui/core";

export const Container = styled(Card).attrs({ variant: "outlined" })`
  max-width: 395px;
  width: 100%;
  margin: 10px;
  padding: 4px 10px 10px 10px;

  @media (max-width: 634px) {
    max-width: 100%;
  }

  > p {
    margin-top: 6px;
    text-align: center;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CardsContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 12px;
`;
