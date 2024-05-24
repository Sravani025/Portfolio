import styled from "styled-components";
import Circle from "./circle";

export const ContentHolderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 32px;
  margin: 0px 32px;
`;

export const StyledCircle = styled.div`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: -8px;
  text-align: center;
  text-shadow: 2px;
`;

type ContentHolderTextDirection = {
  direction: "left" | "right";
};
export const ContentHolderText = styled.div<ContentHolderTextDirection>`
  flex: 1;
  text-align: ${({ direction }) => (direction === "left" ? "right" : "left")};
`;
