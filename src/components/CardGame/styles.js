import styled from "styled-components";
import { Card } from "@material-ui/core";

export const Container = styled(Card).attrs({ variant: "outlined" })`
  max-width: 285px;
  width: fit-content;
  margin: 10px;
  padding: 4px 10px 10px 10px;

  @media (max-width: 634px) {
    max-width: 100%;
  }

  > p {
    border-bottom: 2px solid #e9e9e9;
    padding-bottom: 7px;
    margin-bottom: 7px;
    text-align: center;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;
