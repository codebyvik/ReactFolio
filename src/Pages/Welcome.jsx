// FRAMER MOTION
import { motion } from "framer-motion";
import { fadeLeftAnim, PagesAnim } from "../Animation";
// STYLED
import styled from "styled-components";
import { Colors, Div } from "./commonStyle";
// COMPONENTS
import Wave from "../components/Wave";

const Welcome = () => {
  return (
    <StyledWelcome
      id="home"
      variants={PagesAnim}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={fadeLeftAnim}>
        Hey, I am <span>Tony Stark</span>, <br /> a Full stack developer
      </motion.h1>
      <motion.a variants={fadeLeftAnim} href="#about" className="a-btn">
        know More
      </motion.a>
      <Wave />
    </StyledWelcome>
  );
};

const StyledWelcome = styled(Div)`
  justify-content: center;
  h1 {
    width: 55%;
    text-align: center;
  }

  a {
    margin-top: 2rem;
  }
  @media (max-width: 1030px) {
    h1 {
      font-size: 3.6rem;
      text-align: left;
      width: 80%;
    }
    .a-btn {
      font-size: 1rem;
      font-weight: bold;
      border: 2px solid ${Colors.white};
      padding: 0.5rem 1rem;
      transition: 0.5s ease;
      &:hover {
        background-color: ${Colors.mainColor};
        color: ${Colors.white};
      }
    }
  }
  @media (max-width: 736px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default Welcome;
