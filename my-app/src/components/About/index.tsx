import {
  AboutImage,
  AboutSection,
  Content,
  ContentHeader,
  ContentPara,
} from "./styles";

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutImage src="images/Sravani.JPG" />
      <Content>
        <ContentHeader>About Me</ContentHeader>
        <ContentPara>
          Hey there! I'm Sravani, a tech enthusiast and creative explorer from
          Hyderabad, India. With a background in Electrical Engineering from IIT
          Bhubaneswar, I thrive on crafting captivating web experiences and
          delving into the world of technology. Beyond coding, I'm a basketball
          enthusiast, a photography aficionado, and a leader with a passion for
          teamwork. Let's connect and embark on a journey of innovation and
          creativity together!
        </ContentPara>
      </Content>
    </AboutSection>
  );
};
export default About;
