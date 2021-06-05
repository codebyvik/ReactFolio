import { useState } from "react";
// Animation
import { motion } from "framer-motion";
// styles
import styled from "styled-components";
import { Colors } from "../Pages/commonStyle";

const Nav = ({ setDarkMode, darkMode }) => {
  // state to toggle navbar in small screen devices
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <StyledNav darkMode={darkMode}>
      <div className="logo">
        <h4>Portfolio</h4>
      </div>

      <Bars className="bars" onClick={() => setMenuToggle(!menuToggle)}>
        <i className={`fas ${menuToggle ? "fa-times" : "fa-bars"} `}></i>
      </Bars>

      <UlContainer
        className={`ul-bg ${menuToggle ? "active" : ""}`}
        onClick={() => setMenuToggle(!menuToggle)}
        menuToggle={menuToggle}
      >
        <UL darkMode={darkMode} menuToggle={menuToggle}>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#project">PROJECT</a>
          </li>
          <li>
            <a href="#contact">CONTACT ME</a>
          </li>
          <li className="dark-mode-toggle">
            <i
              onClick={() => setDarkMode(!darkMode)}
              className="fas fa-adjust"
            ></i>
          </li>
        </UL>
      </UlContainer>
    </StyledNav>
  );
};

// STYLED COMPONENTS
const StyledNav = styled(motion.nav)`
  height: 4.5rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  ${({ darkMode }) =>
    darkMode
      ? `background: ${Colors.darkbg} ;`
      : `background: ${Colors.white} ;`}
  @media (max-width: 1030px) {
    justify-content: space-between;
    padding: 0 1rem;
  }
  @media (max-width: 736px) {
    min-height: 3.5rem;
  }
`;

const UlContainer = styled(motion.div)`
  display: flex;
  overflow-x: hidden;
  @media (max-width: 1030px) {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    transition: all 0.2s ease;
    ${({ menuToggle }) =>
      menuToggle
        ? " opacity: 1; pointer-events: unset;"
        : "opacity: 0;pointer-events: none;"}
  }
`;

const UL = styled(motion.ul)`
  display: flex;
  list-style: none;
  justify-content: space-evenly;

  li {
    margin: 0 1rem;
    i {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
  a {
    font-weight: 500;
  }

  @media (max-width: 1030px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 20rem;
    height: 100vh;
    ${({ darkMode }) =>
      darkMode
        ? `background: ${Colors.darkbg} ;`
        : `background: ${Colors.white} ;`}

    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${({ menuToggle }) =>
      menuToggle
        ? "transform: translateX(0%);"
        : "transform: translateX(100%);"}
    transition: all 0.5s ease;
    li {
      margin: 1rem 0;
    }
    a {
      font-size: 1.5rem;
    }
  }
`;

const Bars = styled(motion.div)`
  display: none;
  cursor: pointer;
  @media (max-width: 1030px) {
    display: block;
    z-index: 11;
    i {
      pointer-events: none;
      font-size: 1.5rem;
    }
  }
`;

export default Nav;
