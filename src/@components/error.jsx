import React from "react";
import { styled } from "styled-components";

export default function Error(props) {
  const { message } = props;

  return <ErrorWrapper>error : {message}</ErrorWrapper>;
}

const ErrorWrapper = styled.h1`
  width: 192rem;
  height: 108rem;

  background-color: green;

  color: ${({ theme }) => theme.colors.white};
  font-size: xx-large;
`;
