import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  > main {
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;

    > div {
      margin: 10px 0 25px 0;
      padding: 8px;
    }
  }
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 40px 1fr 48px;
  grid-template-areas: "header header" "numbers form" "numbers actions";
  grid-gap: 10px;

  @media (max-width: 634px) {
    grid-template-rows: 40px auto auto 50px;
    grid-template-areas: "header header" "form form" "numbers numbers" "actions actions";
  }

  > header {
    grid-area: header;
    align-self: center;
    justify-self: center;
    font-weight: 500;
    font-size: 24px;
    border-bottom: 1px solid #e3e3e3;
  }

  > div {
    grid-area: numbers;
  }

  > section {
    margin: 10px;
    display: flex;
    align-self: flex-start;
    flex-wrap: wrap;
    gap: 20px;
  }

  > footer {
    grid-area: actions;
    align-self: center;
    justify-self: flex-end;

    > button {
      margin: 0 7px;
    }
  }
`;

export const SCTextField = styled(TextField)`
  &.MuiFormControl-root {
    max-width: 235px;

    @media (max-width: 634px) {
      max-width: 100%;
    }
  }

  .MuiInputBase-root {
    font-weight: bold;
    font-size: 16px;
  }
`;

export const Results = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    @media (min-width: 634px) {
      max-width: 47%;
    }
  }
`;
