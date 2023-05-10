import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorPageWrapper>
      <ErrorText>ErrorPage</ErrorText>
      <BackButton onClick={() => navigate("/")}>홈으로 돌아가기</BackButton>
    </ErrorPageWrapper>
  );
};

const ErrorPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 100%;
  height: 100vh;
`;
const ErrorText = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
`;

const BackButton = styled.button`
  width: 10rem;
  height: 5rem;
  background-color: #e2e2e2;
  color: black;
`;

export default ErrorPage;
