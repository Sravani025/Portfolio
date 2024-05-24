import React from "react";
import {
  CardContainer,
  CardContainerContent,
  CardContainerImage,
} from "./styles";

type CardProps = {
  Image: string;
  Heading: string;
  Content: string;
};
const Card: React.FC<CardProps> = ({ Image, Heading, Content }) => {
  return (
    <CardContainer>
      <CardContainerImage src={Image} alt="project-image" />

      <CardContainerContent>
        <h2>{Heading}</h2>
        <p>{Content}</p>
      </CardContainerContent>
    </CardContainer>
  );
};

export default Card;
