import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #f1f1f1;
  font-size: 1.2rem;
  font-weight: 600;
  display: grid;
  place-items: center;
  vertical-align: middle;
  text-align: center;
  color: #444;
  border: 1px solid #e9e9e9;
  box-shadow: 1px 1px 19px -12px rgba(0, 0, 0, 0.75);

  ${({ selected }) => selected && `background-color: #8fc93a; color:#fff `};
`;
