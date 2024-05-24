import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalLine } from "./../Education/style";
import styled from "styled-components";

export const Contacts = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ContactContent = styled.section`
  margin: 12px;
  display: flex;
  flex: 1;
  width: 90vw;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const ContactHeader = styled.h1`
  margin: 20px;
  margin-top: 48px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 12px;
  flex: 7;
`;

export const ContactSubHeader = styled.h3`
  flex: 3;
`;

export const ContactContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Align items vertically */
  margin-bottom: 10px;
  flex: 1;
`;

export const ContentItemHeader = styled.div`
  margin: 10px;
  font-weight: 600;
  font-size: 20px;
  padding: 12px;
`;

export const ContentItemSubHeader = styled.div`
  margin-left: 10px;
`;

export const IconBackground = styled.div`
  background-color: wheat;
  padding: 16px;
  border-radius: 20px;
`;

export const ContactHeaders = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;
