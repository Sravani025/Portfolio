import Circle from "./circle";
import {
  ContentHolderContainer,
  ContentHolderText,
  StyledCircle,
} from "./style";

interface ContentHolderProps {
  direction: "left" | "right";
  header: string;
  subHeader: string;
  text: string;
}

const ContentHolder: React.FC<ContentHolderProps> = ({
  direction,
  header,
  subHeader,
  text,
}) => {
  return (
    <ContentHolderContainer>
      <ContentHolderText direction={direction}>
        {direction === "left" && (
          <>
            <h1>{header}</h1>
            <h4>{subHeader}</h4>
            <p>{text}</p>
          </>
        )}
      </ContentHolderText>

      <StyledCircle>
        <Circle radius={100} fillColor="#00FFFF" />
      </StyledCircle>

      <ContentHolderText direction={direction}>
        {direction === "right" && (
          <>
            <h1>{header}</h1>
            <h4>{subHeader}</h4>
            <p>{text}</p>
          </>
        )}
      </ContentHolderText>
    </ContentHolderContainer>
  );
};

export default ContentHolder;
