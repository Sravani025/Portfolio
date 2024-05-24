import React from "react";
import Card from "./card";
import { ProjectContainer } from "./styles";
const Projects: React.FC = () => {
  return (
    <ProjectContainer id="projects">
      <h1>Projects</h1>
      <div>
        <Card Image={""} Heading={"Sound Detector"} Content={"text"} />
        <Card Image={""} Heading={"Colour Game"} Content={"text"} />
        <Card Image={""} Heading={"Portfolio Making"} Content={"text"} />
      </div>
    </ProjectContainer>
  );
};

export default Projects;
