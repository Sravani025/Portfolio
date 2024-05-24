import styled from "styled-components";

export const AboutSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to top, #5a6964, #303632);
`;
export const AboutImage = styled.img`
  flex: 1;
  max-width: 30vw;
  padding: 80px;
  border-radius: 20vw;
`;

export const Content = styled.div`
  flex: 1;
  padding: 80px;
  color: wheat;
  font-family: "Playfair Display", serif;
`;
export const ContentHeader = styled.h1`
  font-size: 40px;
  font-weight: 800;
`;
export const ContentPara = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  font-family: "Josefin Sans", sans-serif;
`;
