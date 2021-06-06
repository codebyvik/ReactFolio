import { useState } from "react";
// Animation
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { LineAnim, fade, fadeLeftAnim } from "../Animation";
// components
import Cards from "../components/Cards";
import { ProjectData } from "../components/ProjectData";
import { useScroll } from "../components/useScroll";
import ProjectDetails from "./ProjectDetails";
// styles
import styled from "styled-components";
import { Div, Line } from "./commonStyle";

const Project = ({ darkMode }) => {
  // all projects
  const Data = ProjectData();
  // Currently Opened project
  const [Project, setProject] = useState(null);
  // trigger animation
  const [element, controls] = useScroll();
  return (
    <StyledProject
      ref={element}
      variants={fade}
      animate={controls}
      initial="hidden"
      id="project"
    >
      <div>
        <motion.h3 variants={fadeLeftAnim}>Projects</motion.h3>
        <Line variants={LineAnim} />
      </div>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {Project && (
            <ProjectDetails
              darkMode={darkMode}
              Project={Project}
              setProject={setProject}
            />
          )}
        </AnimatePresence>

        <CardContainer>
          {Data.map((data) => (
            <Cards
              darkMode={darkMode}
              key={data.id}
              image={data.DisplayImage}
              title={data.title}
              id={data.id}
              setProject={setProject}
              Data={Data}
            />
          ))}
        </CardContainer>
      </AnimateSharedLayout>
    </StyledProject>
  );
};

const StyledProject = styled(motion.div)`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.5rem 1rem 0rem 1rem;
  div {
    margin-bottom: 1rem;
  }
  @media (max-width: 1030px) {
    height: auto;
  }
`;

const CardContainer = styled(motion.div)`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  margin-top: 1rem;
`;

export default Project;
