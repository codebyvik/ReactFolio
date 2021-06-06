// Animations
import { motion } from "framer-motion";
import { RevealAnim } from "../Animation";
// styles
import styled from "styled-components";

const Cards = ({ image, title, darkMode, id, setProject, Data }) => {
  // sets Project which will trigger Project Detail
  const detailToggle = async () => {
    const project = await Data.filter((data) => {
      document.body.style.overflow = "hidden";
      return id === data.id;
    });
    setProject(project);
  };

  return (
    <Card
      layoutId={`card-container-${id}`}
      darkMode={darkMode}
      onClick={detailToggle}
      variants={RevealAnim}
    >
      <motion.h2 layoutId={`card-title-${id}`}>{title}</motion.h2>
      <motion.img layoutId={`card-image-${id}`} src={image} alt="project" />
    </Card>
  );
};

const Card = styled(motion.div)`
  position: relative;
  height: 20rem;
  border-radius: 1rem;
  ${({ darkMode }) =>
    darkMode
      ? "box-shadow: 0px 5px 10px 0px rgba(109, 107, 107, 0.7);"
      : "box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);"}

  cursor: pointer;
  text-align: left;
  overflow: hidden;
  h2 {
    font-size: 2rem;
    padding: 1rem 1rem;
  }
  img {
    width: 100%;
    height: 21rem;
    object-fit: cover;
  }
`;

export default Cards;
