import styled from "styled-components";

export default function MainHeader() {
  return (
    <Header>
      <Title>이중섭 미술관</Title>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10rem;

  background-color: ${({ theme }) => theme.colors.skyblue};
`;
const Title = styled.h1`
  ${({ theme }) => theme.fonts.title};
`;
