import React from "react";
import { styled } from "styled-components";

export default function Error() {
  return <ErrorWrapper>error!</ErrorWrapper>;
}

const ErrorWrapper = styled.h1`
  width: 192rem;
  height: 108rem;

  background-color: green;

  color: ${({ theme }) => theme.colors.white};
  font-size: xx-large;
`;
