import React from "react";
import { styled } from "styled-components";
import { theme } from "../style/theme";

export default function Loading() {
  return <LoadingWrapper>loading</LoadingWrapper>;
}

const LoadingWrapper = styled.h1`
  width: 192rem;
  height: 108rem;

  background-color: blue;

  color: ${({ theme }) => theme.colors.white};
`;
