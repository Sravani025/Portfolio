import ContentHolder from "../ContentHolder";
import { EducationContainer, VerticalLine } from "./style";

const educationContent = [
  {
    header: "Bachelor of Technology",
    subHeader: "Indian Institute of Technology & Bhubaneswar",
    text: `Bachelor of Technology in Electrical Engineering in 
    Indian Institute of Technology Bhubaneswar
    Graduation Year: 2023`,
  },
  {
    header: "Secondary Education",
    subHeader: "Sri Chaitanya Junior College",
    text: "Pursued MPC",
  },
  {
    header: "10th Class",
    subHeader: "Sri Chaitanya School",
    text: "loremIpsum",
  },
];

const Education: React.FC = () => {
  return (
    <EducationContainer id="education">
      <h1>Education</h1>
      {educationContent.map((value, index) => {
        const direction: "left" | "right" = index % 2 === 0 ? "left" : "right";
        return (
          <>
            <ContentHolder
              direction={direction}
              header={value.header}
              subHeader={value.subHeader}
              text={value.text}
            />
            {!(index === educationContent.length - 1) ? <VerticalLine /> : null}
          </>
        );
      })}
    </EducationContainer>
  );
};

export default Education;
