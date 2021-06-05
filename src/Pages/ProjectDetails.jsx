import { useEffect } from "react";
// Animation
import { motion } from "framer-motion";
// Style
import styled from "styled-components";
import { Colors, Line } from "./commonStyle";

const ProjectDetails = ({ Project, setProject, darkMode }) => {
  const id = Project[0].id;
  // scroll to top when opening a project detail
  useEffect(() => {
    const element = document.getElementById("details");
    element.scrollIntoView();
  }, []);

  // Exit detailed view

  const exitHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("detail-bg")) {
      document.body.style.overflow = "auto";
      setProject(null);
    }
  };

  return (
    <StyledDetails id="details" className="detail-bg" onClick={exitHandler}>
      <Details darkMode={darkMode} layoutId={`card-container-${id}`}>
        <Title>
          <motion.h2 layoutId={`card-title-${id}`}>
            {Project[0].title}
          </motion.h2>
          <Line />
        </Title>
        <div>
          <a className="a-btn" href="/">
            Github
          </a>
          <a className="a-btn" href="/">
            Live
          </a>
        </div>
        <ImageDiv>
          <motion.img
            layoutId={`card-image-${id}`}
            src={Project[0].DisplayImage}
            alt=""
          />
        </ImageDiv>
        <Description>
          <p>{Project[0].Description}</p>
        </Description>
        <Gallery>
          {Project[0].screenshots.map((screenshot) => (
            <img src={screenshot} alt="" />
          ))}
        </Gallery>
      </Details>
    </StyledDetails>
  );
};

const StyledDetails = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

const Title = styled(motion.div)`
  margin-bottom: 0.5rem;
  h2 {
    font-size: 2rem;
  }

  @media (max-width: 1030px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

const Details = styled(motion.div)`
  width: 80%;
  ${({ darkMode }) =>
    darkMode
      ? `background: ${Colors.darkbg};`
      : ` background: ${Colors.white};`}

  border-radius: 1rem;
  padding: 2rem 5rem;
  position: absolute;
  img {
    width: 100%;
  }
  .a-btn {
    font-size: 1.2rem;
    padding: 0.3rem 0.5rem;
    margin-right: 1rem;
  }
  @media (max-width: 1030px) {
    padding: 2rem 0.5rem;
  }
`;

const ImageDiv = styled(motion.div)`
  margin-top: 3rem;
  img {
    width: 100%;
    border-radius: 1rem;
  }
`;
const Description = styled(motion.div)`
  margin: 1rem 0rem;
`;
const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  img {
    border-radius: 1rem;
  }
`;

export default ProjectDetails;
