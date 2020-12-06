import styled from "styled-components";
import { IconButton, Avatar } from "@material-ui/core";

export const Container = styled(IconButton)`
  &.MuiButtonBase-root {
    padding: 8px;
  }
`;

export const SCAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 27px;
    height: 27px;
    background: ${({ disabled }) => !disabled && "#673AB7"};
    font-size: 17px;
    font-weight: 500;

    @media (max-width: 634px) {
      width: 35px;
      height: 35px;
      font-size: 18px;
    }
  }
`;
