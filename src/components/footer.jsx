import { motion } from "framer-motion";
// styles
import styled from "styled-components";
import { Colors } from "../Pages/commonStyle";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Icons>
          <a href="/">
            <i className="fab fa-github"></i>
          </a>
          <a href="/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter-square"></i>
          </a>
        </Icons>
        <hr />
        <p>
          © 2021 - Template by{" "}
          <a href="https://github.com/codebyvik">codebyvik</a>
        </p>
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.div)`
  width: 100%;
  height: 10rem;
  background: ${Colors.darkbg};
  color: ${Colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
`;
const FooterContainer = styled(motion.div)`
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  hr {
    width: 90%;
  }
  p {
    font-size: 1rem;
    padding: 0;
  }
  @media (max-width: 1030px) {
    width: 90%;
  }
`;

const Icons = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.5rem;
  a {
    color: ${Colors.white};
  }
  i {
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export default Footer;
