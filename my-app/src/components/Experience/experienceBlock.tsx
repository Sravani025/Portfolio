import React from "react";
import { ExperienceBlockDiv, ExperienceBlockParagraph } from "./style";

type ExperienceBlockProps = {
  heading: string;
  content: string;
};

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  heading,
  content,
}) => {
  return (
    <ExperienceBlockDiv>
      <h2>{heading}</h2>
      <ExperienceBlockParagraph>{content}</ExperienceBlockParagraph>
    </ExperienceBlockDiv>
  );
};

export default ExperienceBlock;
